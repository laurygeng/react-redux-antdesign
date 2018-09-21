import React from 'react'
import './app.less'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import RegistrationForm from './components/form';
import { Tabs, Layout} from 'antd';
import {getFormList} from "./action";
const { Header, Content, Footer} = Layout;
const TabPane = Tabs.TabPane;


class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        iconLoading: true,
        mode: 'top',
        initSubject: 'sdfsd'
    }

    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }
    regFormSubmit = (param)=>{
        debugger
        console.log("1111"+param);
    }

    componentDidMount(){
        getFormList();
        console.log(window.store);
    }
    
    
    render(){
    const { mode, initSubject } = this.state;
    const {pageData, formData} = this.props;
    //const {formData} = pageData;
    //debugger
    return (
        <Layout className="page-wrap">
            <Header className='title'>AntDesign_component</Header>
            <Content className="page-content">
            <div >
                <p>
                    <strong>AntDesign-</strong><br></br>
                    写这篇文档的目的主要是为了总结一下andDesign组件的使用方法
                </p>
                <Tabs
                    className="tab-warp"
                    defaultActiveKey="1"
                    style={{ background: '#fff' }}
                    >
                    <TabPane tab="Form" key="1">
                        <h2>Form表单</h2>
                        <p>
                            表单的主要作用是收集来自用户的信息，并将信息发送给服务端处理程序处理
                            调查表、订单、搜索界面
                        </p>
                        <p>
                            常用的表单元素包括了Input, label,Select（单选、多选、级联）, DatePicker, TextArea, checkbox，radio，button，Icon
                        </p>
                        <p>
                            每个控件都有一个初始值，也有一个当前值，值的类型都是字符串。
                            控件的初始值是不会变的，当表单重置的时候，每个控件的当前值被重新设置为初始值。
                            每个控件都定义有控件名和与之对应的当前值，这两者是提交的表单数据集的组成部分
                        </p>
                        <h3>getFieldDecorator</h3>
                        <p>
                            进行组件内容onchange监听, 这个方法会像组件注入value参数，onchange方法，自动更新表单组件的value以及onChange事件,
                            无需再手动添加value属性,用于和表单进行双向绑定。
                            使用getFieldDecorator过程中，会遇到 (Warning: getFieldDecorator will override value, so please don't set value directly and use setFieldsValue to set it.  ）这样的警告
                            这是因为我们在自定义组件中定义了value值，getFieldDecorator会覆盖我们定义的值，需要添加默认值可以使用在getFieldDecorator的时候，设置initialValue，删除在自定义组件中定义的value就可以了
                            
                            getFieldDecorator的initialValue,
                            不会根据最新的数据改变内容,添加了这个之后，查看props可以发现多了id,onchange,value
                            三个属性，value属性是用于获取我们在initalValue设定的值，而onChange方法是用于同步值
                            实现双向绑定
                        </p>
                        <p>
                            当我们使用getFieldDecorator并用initialValue设定初始值时，
                            当我们改变组件的值时，组件表现出的值也改变了，但这个值并不是initialValue设定的，
                            其是组件内部的state值保持的，如果需要继续用initialValue来设定组件的值，
                            我们需要调用resetFields方法使initialValue有效
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
                        <RegistrationForm formInitData={formData} regFormSubmit={this.regFormSubmit}></RegistrationForm>
                    </TabPane>
                    <TabPane tab="Modal" key="2">Content of tab 2</TabPane>
                    <TabPane tab="Tree" key="3">Content of tab 3</TabPane>
                    <TabPane tab="Table" key="4">Content of tab 4</TabPane>
                </Tabs>


            </div> 
            </Content>
            <Footer>
                <address>
                    有问题请联系<cite>By:Laury</cite>
                </address>
            </Footer>
        </Layout>
    );
}

}

//将state绑定到props
const mapStateToProps = (state) => {
    //debugger
    return state;
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    console.log(dispatch);
    //debugger
    return {
    }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Container)
/*
    将store中的state作为组件的props的值，
    通过connect实现将dispatch方法注入到组件的props.dispatch
 */