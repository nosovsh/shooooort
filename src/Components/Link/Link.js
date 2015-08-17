import React, { Component, PropTypes } from 'react';
import { SHORT_DISPLAY_HOST } from 'Flux/constants/Urls';

import './style.scss';

export default class Link extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }
  render () {
    const { link } = this.props;
    return (
      <div className="Link" onHover={ this.handleHover.bind(this) }>
        <div className="Link__Urls">
          { link.isCreating ? <div>Loading...</div> : <div>
            { SHORT_DISPLAY_HOST }<span className="Link__Shortcode">{ link.shortcode }</span>
            <span className="Link__Copy">Click to copy this link</span>
            </div> }

          <div className="Link__Source">{ link.url }</div>
        </div>
        <div className="Link__Visits">
          1140
        </div>
        <div className="Link__LastVisited">
          2 days ago
        </div>
      </div>
    );
  }

  handleHover (e) {

  }
}

Link.propTypes = {
  link: PropTypes.object.isRequired
}
