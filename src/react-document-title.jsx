import React, { Component } from 'react';
import PropTypes from 'proptypes';

export default class DocumentTitle extends Component {
  PropTypes = {
    title: PropTypes.array,
    revert: PropTypes.bool
  };

  componentWillMount() {
    // 存储原始的title
    this.__originTitle = document.title;
    const { title, suffix, root } = this.props;
    if (title) {
      this.setTitle(title, suffix, root);
    }
  }

  componentWillReceiveProps(nextPros) {
    const { title, suffix, root } = nextPros;
    if (title) {
      this.setTitle(title, suffix, root);
    }
  }

  componentWillUnmount() {
    // recover the title before set
    if (this.props.revert === true) {
      document.title = this.__originTitle;
    }
  }

  setTitle(title) {
    document.title = title.join(' | ');
    return this;
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
