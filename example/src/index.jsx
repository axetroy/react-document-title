import React from 'react';
import { render } from 'react-dom';
import DocumentTitle from '../../lib/react-document-title';

const element = document.createElement('div');
document.body.appendChild(element);

class App extends React.Component {
  state = {
    title: ['Axetroy']
  };

  render() {
    return (
      <div>
        <DocumentTitle title={this.state.title}>
          <h4>Click and change title, current: {this.state.title.join(' | ')}</h4>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['Axetroy'] })}
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['Blog', 'Axetroy'] })}
            >
              Blog
            </a>
          </p>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['News', 'Axetroy'] })}
            >
              News
            </a>
          </p>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['About', 'Axetroy'] })}
            >
              About
            </a>
          </p>
        </DocumentTitle>
      </div>
    );
  }
}

render(<App />, element);
