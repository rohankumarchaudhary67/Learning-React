import React, { Component } from 'react'
import loader from './Iphone-spinner-2.gif'

export default class loading extends Component {
    render() {
        return (
            <div>
                <img src={loader} alt="" />
            </div>
        )
    }
}
