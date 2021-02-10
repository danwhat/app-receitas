import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleHeader extends Component {
  constructor() {
    super();
    this.state = {
      h1: '',
    };
    this.ajustingStateH1 = this.ajustingStateH1.bind(this);
  }

  componentDidMount() {
    this.ajustingStateH1();
  }

  ajustingStateH1() {
    const { pathname } = this.props;
    switch (pathname) {
    case '/explorar':
      this.setState({
        h1: 'Explorar',
      });
      break;

    case '/comidas':
      this.setState({
        h1: 'Comidas',
      });
      break;

    case '/bebidas':
      this.setState({
        h1: 'Bebidas',
      });
      break;

    case '/explorar/comidas':
      this.setState({
        h1: 'Explorar Comidas',
      });
      break;

    case '/explorar/bebidas':
      this.setState({
        h1: 'Explorar Bebidas',
      });
      break;

    case '/explorar/comidas/ingredientes' || '/explorar/bebidas/ingredientes':
      this.setState({
        h1: 'Explorar Ingredientes',
      });
      break;

    case '/explorar/comidas/area' || '/explorar/bebidas/area':
      this.setState({
        h1: 'Explorar Origem',
      });
      break;

    case '/perfil':
      this.setState({
        h1: 'Perfil',
      });
      break;

    case '/receitas-feitas':
      this.setState({
        h1: 'Receitas Feitas',
      });
      break;

    case '/receitas-favoritas':
      this.setState({
        h1: 'Receitas Favoritas',
      });
      break;

    default: this.setState({ h1: 'Explorar Ingredientes' });
      break;
    }
  }

  render() {
    const { h1 } = this.state;
    return (
      <h1 data-testid="page-title" className="title-header">
        {h1}
      </h1>
    );
  }
}

TitleHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
