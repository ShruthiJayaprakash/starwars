import React, { Component } from "react";
import { Button, Icon } from "@material-ui/core";
import axios from "axios";

export default class ButtonClick extends Component {
  handleButtonClick = () => {
    axios
      .get("https://swapi.co/api/films")
      .then(response => {
        console.log("response.data" + JSON.stringify(response));
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
