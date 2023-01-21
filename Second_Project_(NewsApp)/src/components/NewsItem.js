import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, desc, imageURL, newsUrl, author, date, source, categories} = this.props;
        return (
            <div>
                <div className="card">
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${categories}`}>
                    {source}
                </span>
                    <img src={!imageURL?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/phone_0-sixteen_nine.jpg?VersionId=sJ7UYNgtRqQCqZbW.tA0vYqhjFXWTLiy":imageURL} alt="..." style={{height: 200, width:"100%"}}/>
                    <div className="d-flex flex-column">
                        <h5 className="card-title px-2 py-2">{title}</h5>
                        <p className="card-text mx-2">{desc}</p>
                        <p className="card-text mx-2"><small className="text-muted">By {!author?"Unkown":author} on {!date?"Not Given":new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark m-2" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
