import React, { Component } from "react";

export default class Equipments extends Component {
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
            <article className="equipments">
                <div className="equipments__header" onClick={this.openDescription}>
                    <h4>Equipements</h4>
                    {this.state.open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.open ? "equipments__body--open" : "equipments__body"}>
                    <ul className={this.state.open ? "equipments__text--open" : "equipments__text"}>{this.state.datas.map(ele => ele.equipments.map((el, index) => {
                        return <li className="equipments__list-item" key={index}>{el}</li>
                    }))}</ul>
                </div>
            </article>
        )
    }
}