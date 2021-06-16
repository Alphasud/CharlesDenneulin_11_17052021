import React, { Component } from "react";

export default class Thumb extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas
    }
  }
    render() {
        
        return (
                
            <section className='home__cards'>
                {this.state.datas.map(el => {
                    return (
                        <article className='home__cards__thumb' key={el.title}>
                            <img src={el.cover} alt={el.title} />
                            <p className='home__cards__thumb__title'>{el.title}</p>
                        </article>
                         )
                })}
            </section>
        )
            
    }
}