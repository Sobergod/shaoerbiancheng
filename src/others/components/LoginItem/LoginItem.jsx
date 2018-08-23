
/**
 * @author CJH
 * @description 登录组件
 */

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import {
    Link
} from 'react-router-dom';
import AX from '../../../lib/axios/axios.config.js'

// import 'antd/dist/antd.css';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e) {
        e.preventDefault();
        // let history = this.context.router.history;
        console.log(this.props);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // history.push('/');
                AX.get('/avaimg', {
                    params: {
                        name: "cjh"
                    }
                }).then(res => {
                    console.log(res);
                })
                this.props.history.push('/', null);
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className='login-form'>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input autoComplete="off" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input autoComplete="off" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="/">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <Link to="/register">立即注册</Link>
                </FormItem>
            </Form >
        );
    }

}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);