import React from 'react';
import identity from 'lodash/identity';

const NodeContext = React.createContext({});

const { Provider, Consumer } = NodeContext;

export function connect(mapStateToProps = identity) {
  return function(Component) {
    return props => (
      <Consumer>
        {value => <Component {...mapStateToProps(value)} {...props} />}
      </Consumer>
    );
  };
}

export const NodeProvider = Provider;
