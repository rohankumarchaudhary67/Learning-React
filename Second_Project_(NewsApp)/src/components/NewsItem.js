import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, desc} = this.props;
        return (
            <div>
                <div className="card" style={{width:"18rem"}}>
                    <img className="..." src="..." alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
