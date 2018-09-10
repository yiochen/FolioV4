import React from 'react';
import trim from 'lodash/trim';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  state = {
    possibleProjectName: '',
  };
  componentDidMount() {
    const possibleProjectName = trim(window.location.pathname, '/');
    this.setState({
      possibleProjectName,
    });
  }
  render() {
    const { location } = this.props;
    const { possibleProjectName } = this.state;
    return (
      <Layout location={location}>
        <div>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          {possibleProjectName && (
            <p>
              Are you looking for my project called {possibleProjectName}, you
              can head to{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://yiochen.github.io/${possibleProjectName}`}
              >
                here
              </a>
            </p>
          )}
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
