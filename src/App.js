import React, { Component } from "react";
import "./App.css";
import "tachyons";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qoutes: {},
      isLoading: false,
    };
  }
  quoteApi = () => {
    let val = Math.floor(Math.random() * 1400);
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let qoute = {
          author: data[val].author,
          text: data[val].text,
        };
        this.setState({ qoutes: qoute, isLoading: true });
      });
  };

  componentDidMount = () => {
    this.quoteApi();
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div className="app tc">
          <Card data={this.state.qoutes} newQuote={this.quoteApi} />
          <Footer />
        </div>
      );
    } else {
      return <div class="loader"></div>
      ;
    }
  }
}
