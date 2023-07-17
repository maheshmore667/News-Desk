import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsSection extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      pageNumber: 1,
    };
    document.title = `${this.capitalize(this.props.category)} -News Desk`;
  }

  capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  async componentDidMount() {
    /* let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89f8a48acc1a4193aeab8d5584ea7352&page=${this.state?.pageNumber}&pagesize=${this.props?.pageSize}`;
    this.setState({  loading : true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData?.articles,
    totalResults : parsedData?.totalResults,
    loading : false}) */
    this.fetchData();
  }

  fetchData = async () => {
    if (this.state.pageNumber > Math.ceil(this.state.totalResults / 10)) {
      alert("Enough news for the day !!");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89f8a48acc1a4193aeab8d5584ea7352&page=${this.state?.pageNumber}&pagesize=${this.props?.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:  parsedData?.articles,
        totalResults: parsedData?.totalResults,
        loading: false,
      });
    }
  };

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89f8a48acc1a4193aeab8d5584ea7352&page=${this.state?.pageNumber}&pagesize=${this.props?.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData?.articles),
      totalResults: parsedData?.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="text-center my-2">
          <h2 className="my-3">
            Top {this.capitalize(this.props.category)} Headlines -News Desk
          </h2>
        </div>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="d-flex col-xs-12 col-md-4 my-2 justify-content-center"
                    key={element?.url}
                  >
                    <NewsItem
                      title={element?.title}
                      desc={element?.description}
                      imageUrl={element?.urlToImage}
                      newsUrl={element?.url}
                      source={element?.source?.name}
                      author={element?.author}
                      date={element?.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
