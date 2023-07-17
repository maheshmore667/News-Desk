import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsSection from "./Components/NewsSection";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  state ={
    progress : 10
  }

  setProgress =(progress) =>{
    this.setState({
      progress : progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          height={4}
          />
          <Route exact path="/">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="general" />
          </Route>
          <Route exact path="/entertainment">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <NewsSection setProgress ={this.setProgress} pageSize={15} country="in" category="technology" />
          </Route>
        </Router>
      </div>
    );
  }
}
