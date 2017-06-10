# react-document-title

[Online Demo](https://axetroy.github.io/react-document-title/)

### Installation

```bash
npm install @axetroy/react-document-title
```

### Usage

```javascript
import React from 'react';
import { render } from 'react-dom';
import DocumentTitle from '@axetroy/react-document-title';

const element = document.createElement('div');
document.body.appendChild(element);

class App extends React.Component {
  state = {
    title: ['Axetroy']
  };

  render() {
    return (
      <div>
        <DocumentTitle title={this.state.title}></DocumentTitle>
      </div>
    );
  }
}

render(<App />, element);
```

### Props

- title:Array<string0>

- revert:Boolean

### Run the Demo

```bash
git clone https://github.com/axetroy/react-document-title.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-document-title/blob/master/LICENSE)