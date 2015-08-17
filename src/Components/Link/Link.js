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
    const { link, isNew } = this.props;

    return (
      <div className="Link">
        { isNew ? <div className="Link__Highliter" /> : null }
        <div className="Link__Urls">
          { link.isCreating ? <div>Loading...</div> : <div>
            { SHORT_DISPLAY_HOST }<span className="Link__Shortcode">{ link.shortcode }</span>
            <span className="Link__Copy">Click to copy this link</span>
            </div> }

          <div className="Link__Source">{ fix_length(link.url, 45) }</div>
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
}

Link.propTypes = {
  link: PropTypes.object.isRequired,
  isNew: PropTypes.bool,
}


let fix_length = function(str, length) {
  console.log(str)
  return str.length > length ? str.slice(0, length - 1) + "..." : str
}
