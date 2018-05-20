import React from "react";
import trim from "lodash/trim";

class NotFoundPage extends React.Component {
  state = {
    possibleProjectName: ""
  };
  componentDidMount() {
    const possibleProjectName = trim(window.location.pathname, "/");
    this.setState({
      possibleProjectName
    });
  }
  render() {
    const { possibleProjectName } = this.state;
    return (
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        {possibleProjectName && (
          <p>
            Are you looking for my project called {possibleProjectName}, you can
            head to{" "}
            <a
              target="_blank"
              href={`https://yiochen.github.io/${possibleProjectName}`}
            >
              here
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default NotFoundPage;
