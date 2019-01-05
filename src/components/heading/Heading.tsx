import React, { Fragment } from 'react';
import { Transition, animated } from 'react-spring';
import Waypoint from 'react-waypoint';

import s from './Heading.scss';

export default class Heading extends React.PureComponent {
  state = {
    show: false,
    isReady: false,
  };

  static defaultProps = {
    white: false,
    border: true,
  }

  componentDidMount() {
    this.setState({
      ready: true,
    })
  }


  waypointRef = React.createRef();
  isAnimationComplete = false;

  handlePositionChange = ({ currentPosition }: any) => {

    if (this.waypointRef && currentPosition === 'above' && !this.isAnimationComplete) {
      console.log('SHOW.....');

      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 300);

      this.isAnimationComplete = true;
    }
  }

  render() {
    return (
      <div className={s.heading}>
        <Waypoint
          ref={this.waypointRef}
          topOffset="99.99%"
          onPositionChange={this.handlePositionChange}
          scrollableAncestor={this.state.isReady ? window : undefined}
          />
          <Transition
            native
            items={this.state.show}
            from={{ transform: 'translate3d(0,20px,0)', opacity: 0 }}
            enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
            leave={{ transform: 'translate3d(0,20px,0)', opacity: 0 }}>
            {show =>
              show && (props => <animated.h1 style={props} className={s(s.heading__text, { white: this.props.white })}>{this.props.children}</animated.h1>)
            }
          </Transition>

            <Transition
              native
              items={this.state.show}
              from={{ width: 0 }}
              enter={{ width: 100 }}
              leave={{ width: 0 }}>
              {show =>
                show && this.props.border && (props => <animated.div style={props} className={s.heading__border} />)
              }
          </Transition>

        </div>
    )
  }
}