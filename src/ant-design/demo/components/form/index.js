import React from 'react'
import './index.less'
import moment from 'moment';
import {  InputNumber, Cascader, Row, Select, Form, DatePicker, Icon, Input, Button, Tooltip, Checkbox, Radio } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
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

    // handleSubmit = (e) => {
        //这个是form表单里面默认的提交方式，一般不用这个
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //         console.log('Received values of form: ', values);
    //       }
    //     });
    //   }

      handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
      }
      handleFormSubmit = ()=>{
          const {form} = this.props;
          //获取全部组件的值
          let formData = form.getFieldsValue();  
          console.log(formData);
          //this.props.regFormSubmit(formData);
          /*通过属性调用的方法也可以让子组件通知到父组件自身的变化，
            但是在多层组件调用的时候
            更多的会使用redux的方式来实现组件间的通信
          */
      }
      handleCheckBox = (e) =>{
        //debugger;
        const {form} = this.props;
        //获取全部组件的值
        form.setFieldsValue({checkBox:e.target.checked});  
        //console.log();
      }
      handleDatePickerChange = (value,dateString) =>{
        const {form} = this.props;
        //debugger
        form.setFieldsValue({datePicker:dateString});  
        //debugger
      }

  render(){
    const {handleFormSubmit,formInitData} = this.props;
    //debugger
    const {datePicker, radioGroup, groupOptions, residences, inputBox, numInputBox, textArea, singleSelectId, singleOptions, mutipleOptions, mutipleSelectId, checkBox} = formInitData;
    const  { getFieldDecorator }  = this.props.form;
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
        initialValue: moment(datePicker, 'YYYY-MM-DD'),
        //rules: [{ type: 'object', required: true, message: 'Please select time!' }],
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

    return (
        <div className="page-wrap">
            <Form>
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
                        getFieldDecorator(`inputBox`, {
                            initialValue: inputBox,
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
                        getFieldDecorator(`numInputBox`, {
                            initialValue: numInputBox,
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
                            文本输入框&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        )}>
                        {getFieldDecorator(`textArea`, {
                            initialValue: textArea,
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
                            {getFieldDecorator('datePicker', config)(
                                <DatePicker  onChange={this.handleDatePickerChange} style={{
                                    width: '250px'
                                }} />
                            )}
                    </FormItem>
                </Row>
                <h2>checkbox</h2>
                <Row>
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('checkBox', {
                            initialValue:checkBox,
                            valuePropName: 'checked',
                        })(
                            <Checkbox onChange={this.handleCheckBox}>I have read the <a href="">agreement</a></Checkbox>
                        )}
                    </FormItem>
                </Row>

                <h2>Radio</h2>
                <Row>
                    <FormItem>
                    {getFieldDecorator('radioGroup', {
                            initialValue:radioGroup,
                        })(
                            <RadioGroup options={groupOptions} onChange={this.handleRadioGroup}>
                            </RadioGroup>
                    )}
                    </FormItem>
                </Row>
                <h2>select</h2>
                <Row>
                    <FormItem
                        label="单选下拉菜单"
                        {...formItemLayout}
                        >
                        {getFieldDecorator('singleSelectId', {
                            initialValue:singleSelectId,
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Select
                            placeholder="请选择一个单选项"
                            onChange={this.handleSelectChange} style={{
                                width: '250px'
                            }}
                            >
                            { singleOptions && singleOptions.length > 0 && singleOptions.map((x) => {
                                    return <Option key={x.optionId} value={x.optionId}>{x.optionName}</Option>;
                                })
                            }
                            {/* <Option value="male">male</Option>
                            <Option value="female">female</Option> */}
                            </Select>
                        )}
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                    {...formItemLayout}
                    label="多选下拉"
                    >
                    {getFieldDecorator('mutipleSelectId', {
                        initialValue:mutipleSelectId,
                        rules: [
                        { required: true, message: '请选择一个多选下拉，不能为空哦', type: 'array' },
                        ],
                    })(
                        <Select style={{
                            width: '250px'
                        }} mode="multiple" placeholder="请选择-这是一个多选下拉">
                            {/* <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option> */}
                            { mutipleOptions && mutipleOptions.length > 0 && mutipleOptions.map((x) => {
                                    return <Option key={x.optionId} value={x.optionId}>{x.optionName}</Option>;
                                })
                            }
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
                        <Button type="primary" onClick={this.handleFormSubmit}>提交按钮</Button>
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
