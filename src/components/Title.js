import React, { Component } from "react";
import "./Title.css";

export default class Title extends Component {
  render() {
    return (
      <div className= "f4 tc b mb0 header">
        <p className="first">
          <span>P</span>
          <span>O</span>
          <span>S</span>
          <span>I</span>
          <span>T</span>
          <span>I</span>
          <span>V</span>
          <span>E</span>
        </p>
        <p className="second">
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
