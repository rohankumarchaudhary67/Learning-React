import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        pageSize: 6,
        category: "general",
        country: "in"
    }
    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page : 1        
        }
        document.title = `${this.capitalize(this.props.category)} - News App for any time any place`;
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9dd1eefbba3b43e79d25129cdcccde60&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount(){
        this.updateNews();
    }
    
    fetchMoreData = async() => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9dd1eefbba3b43e79d25129cdcccde60&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <>
                <h2 className='text-center p-2 py-2'>News App - Top {this.capitalize(this.props.category)} Headlines</h2>
                <InfiniteScroll
                    className='text-center'
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            {this.state.articles.map((element)=>{
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem newsUrl={element.url} title={element.title} desc={element.description} imageURL={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} categories={this.props.categories} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
