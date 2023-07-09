import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class NewsSection extends Component {

  static defaultProps ={
    country : "in",
    category : "general"
  }

  static propTypes ={
    country : PropTypes.string,
    category : PropTypes.string
  }

  constructor() {
    super();
    this.state ={
      articles : [],
      loading : false,
      pageNumber : 1
    }
  }

   async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89f8a48acc1a4193aeab8d5584ea7352&page=${this.state?.pageNumber}&pagesize=${this.props?.pageSize}`;
    this.setState({  loading : true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData?.articles,
    totalResults : parsedData?.totalResults,
    loading : false})
  }

  fetchData = async() =>{
    if(this.state.pageNumber > Math.ceil(this.state.totalResults/10)) {
      alert("Enough news for the day !!");
    } else {
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89f8a48acc1a4193aeab8d5584ea7352&page=${this.state?.pageNumber}&pagesize=${this.props?.pageSize}`;
      this.setState({  loading : true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles : parsedData?.articles,
      totalResults : parsedData?.totalResults,
      loading : false})
    }
  }

  handleNextPage = () =>{
    this.setState({ pageNumber : this.state.pageNumber + 1})
   
    this.fetchData();
  }

  handlePreviousPage = () =>{
    this.setState({pageNumber : this.state.pageNumber - 1 });
    
    this.fetchData();
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: "aquamarine"}}>
        <div className="text-center my-2">
          <h2 className="my-3">News Desk</h2>
        </div>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
          return  <div className="d-flex col-xs-12 col-md-4 my-2 justify-content-center" key={element?.url}>
              <NewsItem title={element?.title} desc={element?.description} imageUrl={element?.urlToImage} newsUrl={element?.url}
              source={element?.source?.name} author={element?.author} date={element?.publishedAt}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-primary btn-dark" onClick={this.handlePreviousPage}>Previous</button>
          <button className="btn btn-primary btn-dark btn-sm"  onClick={this.handleNextPage}>Next</button>
        </div>
      </div>
    )
  }
}
