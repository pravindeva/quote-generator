import React, { Component } from "react";
import "./Title.css";

export default class Title extends Component {
  render() {
    return (
      <div className="tc dib f3 b header animate__animated animate__jello  animate__infinite mt3 ">
        <p className="pb1 first">
          <span>P</span>
          <span>O</span>
          <span>S</span>
          <span>I</span>
          <span>T</span>
          <span>I</span>
          <span>V</span>
          <span>E</span>
        </p>
        <p className="pa0 mb3 second">
          <span>Q</span>
          <span>U</span>
          <span>O</span>
          <span>T</span>
          <span>E</span>
          <span>S</span>
        </p>
      </div>
    );
  }
}
