import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'

class Header extends Component {
    render() {
        return (
            <div className="M-header">
                This is Header
                <p>login: myData = {this.props.myData}</p>
                <button onClick={this.getData()}>更改login的myData</button>
            </div>
        )
    }
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => ({
    userList: state.header.userList,
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => {
    return {
        getUserList: dispatch.header.getUserList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
