import React from 'react'
import './index.less'

import { Tabs, InputNumber, Cascader, Row, Select, Col, Layout, Form, DatePicker, Icon, Input, Button, Tooltip, Checkbox, Radio } from 'antd';
const { Header, Sider, Content, Footer} = Layout;
const { TextArea } = Input;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        iconLoading: true,
        mode: 'top',
        initSubject: 'sdfsd'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

      submitDemoForm =()=>{
        alert('我提交了表单哦')
      } 

      handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
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
    const { mode, initSubject } = this.state;

    // let checkPass = (rule, value, callback)=>{
    //     const {getFieldValue} = form;
    //     if(value && value != getFieldValue('userpassword')){
    //         callback('两次输入的密码不一致');
    //     }else{
    //         callback();
    //     }
    // }

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
        <div className="page-wrap">
            <Form  onSubmit={this.handleSubmit}>
                <h2>Input</h2>
                <Row>
                    <FormItem      {...formItemLayout}
                        label={(
                            <span>
                            输入框&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        )}>
                        {
                        getFieldDecorator(`subject`, {
                            initialValue: initSubject,
                            rules: [
                                {
                                    required: true,
                                    message: '请填写主题!'
                                }, {
                                    max: 100,
                                    message: '输入主题的长度过长'
                                },
                                // {
                                //     validator: checkPass
                                // }
                            ]
                            })(<Input placeholder="请输入主题" style={{
                                width: '250px'
                            }}/>)
                        }
                    </FormItem>
                </Row>
                <Row>
                    <FormItem {...formItemLayout}
                        label={(
                            <span>
                            数字输入框&nbsp;
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
                            })(<InputNumber min={1} max={10} initialValue={3}/>)
                        }
                    </FormItem>
    
                </Row>

                <h2>TextArea</h2>
                <Row>
                    <FormItem   {...formItemLayout} label={(
                            <span>
                            数字输入框&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        )}>
                        {getFieldDecorator(`textAreaOutPut`, {
                            rules: [
                            {
                                max: 1000,
                                message: '输入描述的长度过长',
                            }
                        ],
                        })(
                            <TextArea placeholder="请输入描述" rows={4} style={{ width: '750px' }} />
                        )}
                    </FormItem>
                </Row>

                <h2>DatePicker</h2>
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
    
                {/* <iframe src="https://www.hitalk.com" width="300" height="550"></iframe> */}
                <h2>checkbox</h2>
                <Row>
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                        )}
                    </FormItem>
                </Row>

                <h2>Radio</h2>
                <Row>
                    <RadioGroup name="radiogroup" defaultValue={1}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                    </RadioGroup>
                </Row>

                <h2>select</h2>
                <Row>
                    <FormItem
                        label="单选下拉菜单"
                        {...formItemLayout}
                        // labelCol={{ span: 5 }}
                        // wrapperCol={{ span: 12 }}
                        >
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.handleSelectChange} style={{
                                width: '250px'
                            }}
                            >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            </Select>
                        )}
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                    {...formItemLayout}
                    label="多选下拉"
                    >
                    {getFieldDecorator('select-multiple', {
                        rules: [
                        { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <Select style={{
                            width: '250px'
                        }} mode="multiple" placeholder="Please select favourite colors">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    )}
                    </FormItem>
                </Row>
                <h2>Cascader</h2>
                <Row>
                    <FormItem
                        {...formItemLayout}
                        label="级联下拉"
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
                <h2>Button</h2>
                {/* <Row>
                    <div className="btn-wrap">
                        <Button type="primary" loading={this.state.loading} icon="cloud" target="_blank" block href="https://www.baidu.com" onClick={this.submitDemoForm}>Primary</Button>
                    </div>
                </Row> */}

                <Row>
                    <FormItem  {...formItemLayout}>
                        <Button type="primary" htmlType="submit">提交按钮</Button>
                    </FormItem>
                </Row>

                <h2>Icon</h2>
                <Row>
                    <div className="icons-list">
                        <Icon spin style={{fontSize:'24px'}} type="up-circle" theme="twoTone"/>
                        <Icon type="setting" theme="filled" />
                        <Icon type="smile" theme="outlined" />
                        <Icon type="smile" theme="twoTone" />
                        <Icon type="sync" spin />
                        <Icon type="loading" />
                    </div>
                </Row>
            </Form>
        </div> 
    );
}

}

const WrappedAddCaseForm = Form.create()(RegistrationForm);
export default WrappedAddCaseForm;
