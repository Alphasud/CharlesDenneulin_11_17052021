import React, { Component } from "react";
import Thumb from "./Thumb";

export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas
    }
  }
    render() {
        return (
            <Thumb datas={this.state.datas}/>
        )
    }
}




