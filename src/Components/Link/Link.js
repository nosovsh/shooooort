import React, { Component, PropTypes } from 'react';
import { SHORT_HOST } from 'Flux/constants/Urls'

export default class Link extends Component {
  render() {
    const { link } = this.props;
    return (
      <li className="Link">
        { link.isCreating ? <div>Loading...</div> : <div>{SHORT_HOST + link.shortcode}</div> }
        { link.url }
      </li>
    );
  }
}

Link.propTypes = {
  link: PropTypes.object.isRequired
}
