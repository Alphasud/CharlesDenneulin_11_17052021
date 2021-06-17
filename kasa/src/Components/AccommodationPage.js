import React, { Component } from "react";
import { withRouter } from "react-router";

class AccommodationPage extends Component {
    constructor(props) {
    super(props);
        this.state = {
            datas: this.props.datas,
            singleAccommodation: this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.accommodationId),
        };
    };
    render() {
        return (
            <div>
              {this.state.singleAccommodation.map(el => {
                    return (
                        <h1 key={el.id}>{el.title}</h1>
                         )
                })}
            </div>
        )
    };
    
};

export default withRouter(AccommodationPage);