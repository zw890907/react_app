import React, { Component } from 'react'
import Header from '../../components/Header'
import './index.scss'

class Home extends Component {
    render() {
        return (
            <div className="P-home">
                <Header />
                <h1>Home page</h1>
            </div>
        )
    }
}

export default Home
