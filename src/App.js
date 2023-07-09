import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsSection from './Components/NewsSection';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Route exact path="/">
            <NewsSection pageSize={15} country="in" category="general"/>
          </Route>
          <Route exact path="/entertainment">
            <NewsSection pageSize={15} country="in" category="entertainment"/>
          </Route>
          <Route exact path="/general">
            <NewsSection pageSize={15} country="in" category="general"/>
          </Route>
          <Route exact path="/health">
            <NewsSection pageSize={15} country="in" category="health"/>
          </Route>
          <Route exact path="/science">
            <NewsSection pageSize={15} country="in" category="science"/>
          </Route>
          <Route exact path="/sports">
            <NewsSection pageSize={15} country="in" category="sports"/>
          </Route>
          <Route exact path="/technology">
            <NewsSection pageSize={15} country="in" category="technology"/>
          </Route>
          
         
        </Router>
       
      </div>
    )
  }
}
