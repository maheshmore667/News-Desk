import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl} = this.props;
    return (
      <div className="d-flex">
        <div className="card d-flex justify-content-center" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height: "10rem"}} />
                <div className="card-body ">
                    <h5 className="card-title">{title?.length > 0 ? title:  ""}</h5>
                    <p className="card-text">{desc?.length > 88 ?desc?.slice(0,88)+"..." :  desc}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary btn-dark" rel="noopener noreferrer"><i className="fa fa-window-maximize" style={{fontSize:"20px"}}></i> Read More</a>
                </div>
            </div>
      </div> 
    )
  }
}
