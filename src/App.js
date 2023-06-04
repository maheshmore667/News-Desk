import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsSection from './Components/NewsSection';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsSection pageSize={5}/>
      </div>
    )
  }
}
