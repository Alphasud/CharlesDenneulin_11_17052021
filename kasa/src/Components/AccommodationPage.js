import React, { Component } from "react";
import { withRouter } from "react-router";
import Gallery from "./Gallery";

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
            <>
              {this.state.singleAccommodation.map(el => {
                  return (
                    <main key={el.id}>
                          <Gallery datas = {this.state.singleAccommodation}/>
                        <h1>{el.title}</h1>
                    </main>
                         )
                })}
            </>
        )
    };
    
};

export default withRouter(AccommodationPage);