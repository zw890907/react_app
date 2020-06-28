import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import './index.scss'

class Header extends Component {
    getAppListData = () => {
        this.props.getAppList({
            type: 10
        })
    }
    render() {
        return (
            <div className="M-header">
                This is Header
                <p>Header: myData = {this.props.myData}</p>
                <button onClick={()=> {this.props.getData('999')}}>更改heder的myData</button><br/>
                <button onClick={this.getAppListData}>请求接口</button><br/>
                <p style={{color: '#999999'}}>{this.props.appList && this.props.appList.type}</p>
            </div>
        )
    }
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => ({
    myData: state.getIn(['header', 'myData']),
    appList: state.getIn(['header', 'appList']),
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
    getData(data) {
        const action = actionCreators.getData(data)
        dispatch(action)
    },
    getAppList(data) {
        const action = actionCreators.getAppList(data)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
