import React, { Component } from "react";

export default class Banner extends Component {
    constructor(props) {
    super(props);
    this.state = {
        info : this.props.info,
    }
    };
    render() {
        return (
            <section className={this.state.info.type}>
                <h3 className={this.state.info.type + "__title"}>{this.state.info.text}</h3>
            </section>
        )
    }
}