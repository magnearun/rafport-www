import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrevIconSvg from 'assets/svg/left-chevron.svg';
import NextIconSvg from 'assets/svg/right-chevron.svg';

import s from './Button.scss';

export default class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    next: PropTypes.bool,
    prev: PropTypes.bool,
  };

  renderContent() {
    const { next } = this.props;

    if (next) {
      return <NextIconSvg />;
    }

    return <PrevIconSvg />;

  }

  render() {
    const {
      onClick,
      next,
      prev,
    } = this.props;

    return (
      <button
        className={s(s.button, {
          [s.buttonNext]: next,
          [s.buttonPrev]: prev,
        })}
        onClick={onClick}
      >
        {this.renderContent()}
      </button>
    );
  }
}
