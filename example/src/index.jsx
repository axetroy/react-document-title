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
          <h4>点击切换title, 当前为: {this.state.title.join(' | ')}</h4>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['Axetroy'] })}
            >
              主页
            </a>
          </p>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['博客', 'Axetroy'] })}
            >
              博客
            </a>
          </p>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['新闻', 'Axetroy'] })}
            >
              新闻
            </a>
          </p>
          <p>
            <a
              href="javascript: void 0"
              onClick={() => this.setState({ title: ['关于', 'Axetroy'] })}
            >
              关于
            </a>
          </p>
        </DocumentTitle>
      </div>
    );
  }
}

render(<App />, element);
