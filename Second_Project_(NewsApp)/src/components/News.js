import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1        
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77a5590306d3471ba0d5bd7fd0ade0a3&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json(); 
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handlePrevClick= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77a5590306d3471ba0d5bd7fd0ade0a3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        });
    }
    handleNextClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77a5590306d3471ba0d5bd7fd0ade0a3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, loading: false});
        this.setState({
            page: this.state.page + 1
        })
    }
    

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News App - Top Headlines</h1>
                <div className="container text-center">{this.state.loading && <Spinner />}</div>
                <div className="row d-flex justify-content-center">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem newsUrl={element.url} title={element.title} desc={element.description} imageURL={element.urlToImage}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type='button' className='btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
