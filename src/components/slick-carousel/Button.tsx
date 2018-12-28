import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

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
      return <Icon type="right" />;
    }

    return <Icon type="left" />;

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
