import React from 'react';
import Container from 'components/container/Container';
import s from './Segment.scss';

export enum EColor {
  'WHITE',
  'GRAY',
}

interface ISegmentProps {
  children?: React.ReactNode;
  container?: boolean;
  color: EColor;
}

export default class Segment extends React.PureComponent<ISegmentProps> {

  static defaultProps = {
    container: true,
    color: EColor.WHITE
  };

  public render() {
    const {
      children,
      container,
      color,
    } = this.props;

    const content = container ? <Container>{children}</Container> : children;

    return (
      <section className={s(s.segment, {
        white: color === EColor.WHITE,
        gray: color === EColor.GRAY,
      })}>
        {content}
      </section>
    );
  }
}
