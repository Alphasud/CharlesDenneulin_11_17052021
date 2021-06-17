import React, { Component } from "react";
import Banner from "./Banner";
import Accommodation from "./Accommodation";


export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas
    }
  }
    render() {
        return (
            <main>
                <Banner />
                <Accommodation datas={this.state.datas} />
            </main>
        )
    }
}




