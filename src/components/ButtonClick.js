import React, { Component } from "react";
import { Button, Icon } from "@material-ui/core";
import axios from "axios";

export default class ButtonClick extends Component {
  handleButtonClick = () => {
    axios
      .get("https://swapi.co/api/films")
      .then(response => {
        // console.log("response.data" + JSON.stringify(response));
        //results.opening_crawl
        let maxCrawl = Math.max(
          ...response.data.results.map(el => el.opening_crawl.length)
        );
        console.log("maxCrawl" + JSON.stringify(maxCrawl));
        let maxCrawlTitle = response.data.results.filter(
          el => el.opening_crawl.length === maxCrawl
        );
        console.log("maxCrawlTitle" + JSON.stringify(maxCrawlTitle[0].title));
      })
      .catch(err => {
        console.log("err" + err);
      });

    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        // console.log("response.data" + JSON.stringify(response));
        //results.films
      })
      .catch(err => {
        console.log("err" + err);
      });
  };
  render() {
    return (
      <Button variant="contained" onClick={this.handleButtonClick}>
        <Icon>star</Icon>
        Do. Or do not. There is no try.
        <Icon>star</Icon>
      </Button>
    );
  }
}
