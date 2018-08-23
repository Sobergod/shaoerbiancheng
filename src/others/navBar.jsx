import React from 'react'
import { Link } from 'react-router-dom'
class MNavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>主页</Link>
                <Link to='/login'>登录</Link>
                <a href='/test'>测试页</a>
            </div>
        )
    }
}
export default MNavBar