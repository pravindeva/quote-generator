import React, { Component } from "react";
import "tachyons";
// import moment from "moment";
import "./Card.css";

export default class Card extends Component {
  render() {
    // const loading = this.props.isLoading;
    const {author,text}=this.props.data;
    
    return (
      <div className="dib w-70 pa4 b card f4 shadow-5 ">
        <p className="f4">
          <span>
            <i className="fa fa-quote-left pr1" aria-hidden="true"></i>{" "}
          </span>
          {text}
        </p>
        <p className="author">-{author}</p>
        <button
          onClick={this.props.newQuote}
          className="br2 grow button outline-0"
        >
          New Quote
        </button>
      </div>
    );
  }
}
