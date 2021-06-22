import React, { Component } from "react";

export default class Dropdown extends Component {
    constructor(props) {
    super(props);
    this.state = {
        openDrawerOne: false,
        openDrawerTwo: false,
        openDrawerThree: false,
        openDrawerFour: false,
    }
    };

    openMenuOne = () => {
        this.state.openDrawerOne ? this.setState({ openDrawerOne: false }) : this.setState({ openDrawerOne: true });
    }

     openMenuTwo = () => {
        this.state.openDrawerTwo ? this.setState({ openDrawerTwo: false }) : this.setState({ openDrawerTwo: true });
     }
    
     openMenuThree = () => {
        this.state.openDrawerThree ? this.setState({ openDrawerThree: false }) : this.setState({ openDrawerThree: true });
     }
    
     openMenuFour = () => {
        this.state.openDrawerFour ? this.setState({ openDrawerFour: false }) : this.setState({ openDrawerFour: true });
    }
    
    render() {
        return (
            <section>
            <article className="dropdown">
                <div className="dropdown__header" onClick={this.openMenuOne}>
                    <h4>Fiabilité</h4>
                    {this.state.openDrawerOne ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.openDrawerOne ? "dropdown__body--open" : "dropdown__body"}>
                    <p className={this.state.openDrawerOne ? "dropdown__text--open" : "dropdown__text"}>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                </div>
            </article>

            <article className="dropdown">
                <div className="dropdown__header" onClick={this.openMenuTwo}>
                    <h4>Respect</h4>
                    {this.state.openDrawerTwo ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.openDrawerTwo ? "dropdown__body--open" : "dropdown__body"}>
                    <p className={this.state.openDrawerTwo ? "dropdown__text--open" : "dropdown__text"}>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </div>
            </article>
                
                <article className="dropdown">
                <div className="dropdown__header" onClick={this.openMenuThree}>
                    <h4>Service</h4>
                    {this.state.openDrawerThree ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.openDrawerThree ? "dropdown__body--open" : "dropdown__body"}>
                    <p className={this.state.openDrawerThree ? "dropdown__text--open" : "dropdown__text"}>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </div>
            </article>
                
                <article className="dropdown">
                <div className="dropdown__header" onClick={this.openMenuFour}>
                    <h4>Sécurité</h4>
                    {this.state.openDrawerFour ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                <div className={this.state.openDrawerFour ? "dropdown__body--open" : "dropdown__body"}>
                    <p className={this.state.openDrawerFour ? "dropdown__text--open" : "dropdown__text"}>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </div>
            </article>
                
            </section>
        )
    }
}