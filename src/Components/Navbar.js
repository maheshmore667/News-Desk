import React, { Component } from 'react';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><i className="fa fa-newspaper-o" style={{fontSize:"24px"}}></i> News Desk</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><i className="fa fa-home" style={{fontSize:"24px"}}></i> Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/"><i className="fa fa-address-book" style={{fontSize:"18px"}}></i> About</a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
