import React, { Component } from "react";
import { withRouter } from "react-router";
import NoMatch from "./NoMatch";
import Gallery from "./Gallery";
import Tag from "./Tag";
import Rating from "./Rating";
import Description from "./Description";
import Equipments from "./Equipments";

class AccommodationPage extends Component {
    constructor(props) {
    super(props);
        this.state = {
            datas: this.props.datas,
            singleAccommodation: this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.accommodationId),
            allId: this.props.datas.map(elemnt => elemnt.id),
        };
    };
    render() {
        if (!this.state.allId.some((ele) => ele === this.props.match.params.accommodationId)) return <NoMatch />;

        return (
            <>
              {this.state.singleAccommodation.map(el => {
                  return (
                    <main key={el.id}>
                        <Gallery datas={this.state.singleAccommodation} />
                        <section className="accommodation-info">
                            <div className="accommodation-info__left-side">
                                <h1 className="accommodation-info__left-side__title">{el.title}</h1>
                                <p className="accommodation-info__left-side__location">{el.location}</p>
                            </div>
                            <div className="accommodation-info__right-side">
                                <div className="accommodation-info__right-side__host">
                                    <p className="accommodation-info__right-side__host__firstname">{el.host.name.split(' ', 1)}</p>
                                    <p className="accommodation-info__right-side__host__lastname">{el.host.name.split(' ').pop()}</p>
                                </div>
                                <img src={el.host.picture} alt="Hôte" />
                            </div> 
                          </section>
                          <section className="tags-ratings">
                            <Tag datas={this.state.singleAccommodation} />
                            <Rating datas={this.state.singleAccommodation} />
                          </section>
                          <section className="general-info">
                              <Description datas={this.state.singleAccommodation} />
                              <Equipments datas={this.state.singleAccommodation} />
                          </section>
                          
                    </main>
                         )
                })}
            </>
        )
    };
    
};

export default withRouter(AccommodationPage);