import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (<>
    <section className="text-center">
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </section>
        
    </>
    )
  }
}
