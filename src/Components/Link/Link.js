import React, { Component, PropTypes } from 'react';
import { SHORT_HOST_DISPLAY, SHORT_HOST_REAL } from 'Flux/constants/Urls';
import ReactZeroClipboard from 'react-zeroclipboard'

import './style.scss';

const JUST_COPITE_TIMEOUT = 2000;

export default class Link extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHovered: false,
      isJustCopied: false
    };
  }
  render () {
    const { link, isNew } = this.props;

    return (
      <ReactZeroClipboard text={ SHORT_HOST_REAL + link.shortcode }>
        <div className="Link" onClick={ this.clickHandler.bind(this) }>
          { isNew ? <div className="Link__Highliter" /> : null }
          <div className="Link__Urls">
            { link.isCreating ? <div>Loading...</div> : <div>
              { SHORT_HOST_DISPLAY }<span className="Link__Shortcode">{ link.shortcode }</span>
              <span className="Link__Copy">
                { this.state.isJustCopied ? "Copied!" : "Click to copy this link" }
              </span>
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
      </ReactZeroClipboard>
    );
  }

  clickHandler (e) {
    this.setState({
      isJustCopied: true
    })
    setTimeout(() => this.setState({
      isJustCopied: false
    }), JUST_COPITE_TIMEOUT)
  }
}

Link.propTypes = {
  link: PropTypes.object.isRequired,
  isNew: PropTypes.bool,
}


let fix_length = function(str, length) {
  return str.length > length ? str.slice(0, length - 1) + "..." : str
}
