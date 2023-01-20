import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, desc, imageURL, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width:"18rem"}}>
                    <img src={!imageURL?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/phone_0-sixteen_nine.jpg?VersionId=sJ7UYNgtRqQCqZbW.tA0vYqhjFXWTLiy":imageURL} alt="..." style={{height: 200, width:"100%"}}/>
                    <div className="d-flex flex-column m-10">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
