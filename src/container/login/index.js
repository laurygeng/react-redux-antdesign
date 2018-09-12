import React from 'react'

import { Form, DatePicker, TimePicker, Icon,Input,Button } from 'antd';

const FormItem = Form.Item;


class CaseAddForm extends React.Component {

    constructor(props) {
        super(props);
        // const params = convertQueryStringToMap(location.search);
        // this.profileID = params.profileid ? parseInt(params.profileid) : 0;
        // this.cancelCaseId = 0;
        // this.handleData = null;
        // this.submitType = undefined;
        // this.categories = []
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

  render(){

    const  getFieldDecorator  = this.props.form.getFieldDecorator;
    return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
            <Input placeholder="Basic usage" />
            <FormItem >
                            {getFieldDecorator(`subject`, {
                                rules: [{
                                    required: true,
                                    message: '请填写主题!',
                                },
                                {
                                    max: 100,
                                    message: '输入主题的长度过长',
                                }
                            ],
                            })(
                                <Input placeholder="请输入主题" style={{ width: '750px' }} />
                            )}
            </FormItem>
        </Form>
      );
  }

}

// class Login extends React.Component {
//     render() {
//         return <h2>登录页</h2>
//     }
// }

//export default Login

const WrappedAddCaseForm = Form.create()(CaseAddForm);

export default WrappedAddCaseForm;
