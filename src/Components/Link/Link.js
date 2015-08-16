import React, { Component, PropTypes } from 'react';

export default class Link extends Component {
  render() {
    const { link } = this.props;
    return (
      <li className="Link">
        { link.url }
      </li>
    );
  }
}

Link.propTypes = {
  link: PropTypes.object.isRequired
}
