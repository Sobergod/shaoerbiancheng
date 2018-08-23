/**
 * @author CJH
 * @description 登录页
 */

import React from 'react';
import styles from './style/login.css';
import LoginItem from '../components/LoginItem/LoginItem.jsx'
class Login extends React.Component {
    render() {
        return (
            <div className={styles.wrap}>
                <LoginItem history={this.props.history} />
            </div>
        )
    }
}

export default Login;