import React from 'react';

// tslint:disable-next-line:no-reserved-keywords
type TComponentLoader =  (() => Promise<{ AsyncPage: React.ComponentType }>);

// tslint:disable-next-line:naming-convention
export const asyncComponent = (importComponent: TComponentLoader): React.ComponentType => {
  interface IAsyncComponentState {
    component?: React.ComponentType;
  }

  class AsyncComponent extends React.Component<{}, IAsyncComponentState> {
    constructor(props: {}) {
      super(props);

      this.state = {
        component: undefined,
      };
    }

    public async componentDidMount(): Promise<void> {
      const { AsyncPage: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    public render(): JSX.Element | null {
      // tslint:disable-next-line:naming-convention
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};
