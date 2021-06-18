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
                          <Gallery datas={this.state.singleAccommodation} />
                          <section className="accommodation">
                              <div className="accommodation__left-side">
                                <h1 className="accommodation__left-side__title">{el.title}</h1>
                                <p className="accommodation__left-side__location">{el.location}</p>
                              </div>
                              <div className="accommodation__right-side">
                                  <div className="accommodation__right-side__host">
                                      <p className="accommodation__right-side__host__firstname">{el.host.name.split(' ', 1)}</p>
                                      <p className="accommodation__right-side__host__lastname">{el.host.name.split(' ').pop()}</p>
                                  </div>
                                  <img src={el.host.picture} alt="Hôte" />
                              </div> 
                          </section>
                        
                    </main>
                         )
                })}
            </>
        )
    };
    
};

export default withRouter(AccommodationPage);