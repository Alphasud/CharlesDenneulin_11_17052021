import React, { Component } from "react";
import Banner from "./Banner";
import Dropdown from "./Dropdown";

export default class About extends Component {
    constructor(props) {
    super(props);
    this.state = {
      info: {
        type: "banner-aboutpage",
        text: "",
      }
    }
  }

    render() {
        return(
          <main>
            <div className="about">
                <Banner info={this.state.info} />
                <Dropdown />
            </div>
          </main>
        )
    }
}