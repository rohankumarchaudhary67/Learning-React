import React, { Component } from 'react'
import loader from './Iphone-spinner-2.gif'

export default class loading extends Component {
    render() {
        return (
            <div>
                <img className='my-3' src={loader} alt="" />
            </div>
        )
    }
}
