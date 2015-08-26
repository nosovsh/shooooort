import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { SHORT_HOST_DISPLAY, SHORT_HOST_REAL } from 'Flux/constants/Urls';
import ReactZeroClipboard from 'react-zeroclipboard'
import classNames from 'classnames'

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
    const classes = classNames(
      "Link",
      {"Link-isError": link.isError },
      {"Link-isCreating": link.isCreating }
    )

    // Component with shortcode and copy text
    const shortcodeComponent = (
      <span>
        { link.isCreating ? <div>Loading...</div> :
          <div>
            { SHORT_HOST_DISPLAY }<span className="Link__Shortcode">{ link.shortcode }</span>
            <span className="Link__Copy">
              { this.state.isJustCopied ? "Copied!" : "Click to copy" }
            </span>
          </div> }
      </span>
    )

    // whole row
    const comnonent = (
      <div className={ classes } onClick={ this.clickHandler.bind(this) }>
        { isNew ? <div className="Link__Highliter" /> : null }
        <div className="Link__Urls">
          { link.isError ? <div className="Link__Error">Something went wrong. Please try again.</div> : shortcodeComponent }
          <div className="Link__Source">{ fix_length(link.url, 40) }</div>
        </div>
        <div className="Link__Visits">
          <span className="Link__Visits__Helper">Visits: </span>{ link.isError || link.isCreating ? "—" : link.redirectCount || 0 }
        </div>
        <div className="Link__LastVisited">
          <span className="Link__LastVisited_Helper">Created: </span>{ link.isError || link.isCreating ? "-" : moment(link.startDate || Date.now()).fromNow() }
        </div>
      </div>
    );

    // wrap into copy compnonent if needed
    return (
      <span>
        { link.isError || link.isCreating ? comnonent :
          <ReactZeroClipboard text={ SHORT_HOST_REAL + link.shortcode }>
            { comnonent }
          </ReactZeroClipboard> }
      </span>
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


let fix_length = function(str="", length) {
  return str.length > length ? str.slice(0, length - 1) + "..." : str
}
