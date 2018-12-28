import React from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IState {
  theme: string;
  toggleTheme: () => void;
}

export type IUIContext = IState;

export const defaultUIContext = {
  theme: 'light',
  toggleTheme: () => {},
};

const UIContext = React.createContext(defaultUIContext);

export class UIProvider extends React.Component<IProps, IState> {

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });
  }

  state = {
    theme: 'light',
    toggleTheme: this.toggleTheme,
  }

  render() {
    const { children } = this.props;

    return (
      <UIContext.Provider value={this.state}>
        {children}
      </UIContext.Provider>
    );
  }
}

export const withUIContext = (Component: any) => {
  return (props: any) => (
    <UIContext.Consumer>
      {context => <Component {...props} UIContext={context} />}
    </UIContext.Consumer>
  )
};

export default UIContext;
