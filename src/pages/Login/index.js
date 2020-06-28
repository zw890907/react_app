import React, { Component } from 'react'
import Header from '../../components/Header'
import './index.scss'

class Login extends Component {

    gotoHome = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="P-login">
                <Header />
                <h1>Login page</h1>
                <button onClick={this.gotoHome}>跳转home页</button>
            </div>
        )
    }
}

export default Login
