import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News App - Top Headlines</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 mx-3 my-2">
                        <NewsItem title="My title" desc="Okk"/>
                    </div>
                    <div className="col-md-3 mx-3 my-2">
                        <NewsItem title="My title" desc="Okk"/>
                    </div>
                    <div className="col-md-3 mx-3 my-2">
                        <NewsItem title="My title" desc="Okk"/>
                    </div>
                </div>
            </div>
        )
    }
}
