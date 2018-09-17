import React from 'react'

import { Cascader,Row,Col, Layout, Form, DatePicker, TimePicker, Icon,Input,Button,Tooltip } from 'antd';
const {Header,Sider,Content,Footer} = Layout;

const FormItem = Form.Item;


class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        questions:'',
    }

    getinitaSate = ()=>{
        return{
            dropZoneEntered:false,
            title:'',
            introduction:'',
            questions:[]
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

    dragStartHandler = (e)=>{
        //alert(1);
        console.log("dragStart");
        e.dataTransfer.setData('questionType',e.target.id);
        e.effectAllowed = 'move';
    } 
    handleDragEnter = (e)=>{
        alert("drag enter");
        this.setState({dropZoneEntered:true});
    } 
    handleDragLeave = (e)=>{
        alert("drag Over"); 
        e.preventDefault();
        this.setState({dropZoneEntered:false});
    }
    handleDrop = (e)=>{
        debugger
        alert("drag drop");   
        var questionType = e.dataTransfer.getData('questionType');
        var questions = this.state.questions;
        questions = questions.concat({type:questionType});
        this.setState({questions:questions,dropZoneEntered:false})

    }

  render(){

    const  { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched }  = this.props.form;
    const formItemLayout = {
        labelCol: {
          span: 3 ,
          //sm: { span: 8 },
        },
        wrapperCol: {
         span: 12 ,
         // sm: { span: 16 },
        },
      };

    const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const tailFormItemLayout = {
        wrapperCol: {
         // xs: {
            span: 3,
            //justify=center,
            pull:3
         //   offset: 0,
         // },
        //   sm: {
        //     span: 16,
        //     offset: 8,
        //   },
        },
      };
      const residences = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake',
          }],
        }],
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          }],
        }],
      }];
    return (
        <Layout>
        <Header>Header</Header>
        <Content>
        <div className="page-wrap">
            <article>
                用来表示一套结构完整而且独立的内容，比如论坛的一个帖子、杂志或者报纸中的文章、博客、用户提交的评论，
                或者是页面上可用于互动的一个widget模块等
                <section>
                    表现普通的文档内容区块或应用区块，一个区块通常由内容及其标题组成，文章的章节
                </section>
            </article>
            <h1>
                写这篇文档的目的主要是为了普及一下andDesign组件的使用方法
                以及在大多数的业务场景下，怎么样设计页面是最合理、规范、简洁的
                本篇文章涉及到的知识点，包括了:<br></br>
               AntDesign,<br></br>
               H5,<br></br>
               HJ后管系统的规范在实际业务场景中的落地<br></br>
                下面介绍一下Form表单
            </h1>
            <h2>
                表单的主要作用是收集来自用户的信息，并将信息发送给服务端处理程序处理
                调查表、订单、搜索界面
            </h2>
            <p>

                看了这么多，我觉得form表单是最常见也是最复杂的，理解了它的使用方法后，很多东西就已经可以迎刃而解了
                常用的表单元素包括了Input, label, fieldset, legend, Select（单选、多选、级联）, DatePicker, TextArea, checkbox，radio，button，文件选择框
            </p>
            <p>
                input这块需要考虑校验的功能
                每个控件都有一个初始值，也有一个当前值，值的类型都是字符串。
                控件的初始值是不会变的，当表单重置的时候，每个控件的当前值被重新设置为初始值。
                每个控件都定义有控件名和与之对应的当前值，这两者是提交的表单数据集的组成部分
            </p>

            <p>getFieldDecorator,进行组件内容onchange监听，用于和表单进行双向绑定
            getFieldDecorator的initialValue,不会根据最新的数据改变内容
            </p>

            <p>
            mapPropsToFields,需要研究一下这个属性的用法看一下具体是怎么用的，可以实现那些功能
            </p>

            <p>
            onFieldsChange,需要研究一下这个属性的用法看一下具体是怎么用的，可以实现那些功能
            </p>

            <p>
            onValuesChange,需要研究一下这个属性的用法看一下具体是怎么用的，可以实现那些功能
            </p>

            <p>
                resetFields,感觉这个字段也会是比较常用的
            </p>

            <p>更新组件内部的状态，会触发组件的重绘，
                在拖拽事件处理器方法中更新状态，然后再次运行render函数，会在this.state中读取新的数据来显示标题
            </p>
            <Form  onSubmit={this.handleSubmit}>
                <h2>Input</h2>
                <Row>
                    <FormItem      {...formItemLayout}
                        label={(
                            <span>
                            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        )}>
                        {
                        getFieldDecorator(`subject`, {
                            rules: [
                                {
                                    required: true,
                                    message: '请填写主题!'
                                }, {
                                    max: 100,
                                    message: '输入主题的长度过长'
                                }
                            ]
                            })(<Input placeholder="请输入主题" style={{
                                width: '250px'
                            }}/>)
                        }
                    </FormItem>
                </Row>

                <Row>
                    <FormItem      {...formItemLayout}
                        label={(
                            <span>
                            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        )}>
                        {
                        getFieldDecorator(`fun`, {
                            rules: [
                                {
                                    required: true,
                                    message: '请填写主题!'
                                }, {
                                    max: 100,
                                    message: '输入主题的长度过长'
                                }
                            ]
                            })(<Input placeholder="请输入主题" style={{
                                width: '250px'
                            }}/>)
                        }
                    </FormItem>
                </Row>

                <Row>
                    <FormItem
                            {...formItemLayout}
                            label="DatePicker"
                            >
                            {getFieldDecorator('date-picker', config)(
                                <DatePicker style={{
                                    width: '250px'
                                }}/>
                            )}
                    </FormItem>
                </Row>


                <Row>
                    <FormItem
                        {...formItemLayout}
                        label="Habitual Residence"
                        >
                        {getFieldDecorator('residence', {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                        })(
                            <Cascader options={residences} style={{
                                width: '250px'
                            }}/>
                        )}
                    </FormItem>
                </Row>

                <Row>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </FormItem>
                </Row>

                <iframe src="https://www.hitalk.com" width="300" height="550"></iframe>

   
            </Form>
        </div> 
    </Content>
        <Footer>
            <address>
                有问题请联系<cite>By:Laury</cite>
            </address>
            <div onDragStart={this.dragStartHandler} id="dragtarget" draggable='true' className='drag'>我想试一下可以拖拽的功能</div>
            <div onDragEnter={this.handleDragEnter} id="demo" onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className="drop"> Drop here</div>
        </Footer>
    </Layout>
    );
}

}

// class Login extends React.Component {
//     render() {
//         return <h2>登录页</h2>
//     }
// }

//export default Login

const WrappedAddCaseForm = Form.create()(RegistrationForm);

export default WrappedAddCaseForm;
