import React, { Component } from "react";

export default class Description extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas,
        open: false,
    }
    };

    openDescription = () => {
        this.state.open ? this.setState({ open: false }) : this.setState({ open: true });
    }
    
    render() {
        return (
            <article className="description">
                <div className="description__header" onClick={this.openDescription}>
                    <h4>Description</h4>
                    {this.state.open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.open ? "description__body--open" : "description__body"}>
                    <p className={this.state.open ? "description__text--open" : "description__text"}>{this.state.datas.map(ele => ele.description)}</p>
                </div>
            </article>
        )
    }
}