import React, { Component } from "react";

export default class Tag extends Component {
    constructor(props) {
    super(props);
    this.state = {
        datas: this.props.datas,
        tags: this.props.datas.map(el => el.tags),
    }
    };

    render() {
        return (
            <div>
                {this.state.datas.map(function(ele) {
                    return (
                        <div key={ele.id} className="tags">
                            {ele.tags.map(e => {
                            return <p className="tags__item">{e}</p>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}