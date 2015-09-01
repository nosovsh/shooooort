import React, { Component, PropTypes } from 'react';
import Link from 'Components/Link/Link';
import TimeoutTransitionGroup from 'react-components/timeout-transition-group';

import './style.scss';

export default class LinkList extends Component {
  handleDeleteAllLinks(e) {
    e.preventDefault();
    this.props.deleteAllLinks();
  }
  render() {
    const { links } = this.props;
    return (
      <div className="LinkList">
        <div className="LinkList__Header">
          <h2 className="LinkList__Header__Title">Previously shortened by you</h2>
          <a href="" onClick={ this.handleDeleteAllLinks.bind(this) } className="LinkList__Header__DeleteAll">Clear history</a>
        </div>
        <div className="LinkList__Body">
          <div className="LinkList__Body__Header">
              <div className="LinkList__Body__Header__Urls">Link</div>
              <div className="LinkList__Body__Header__Visits">Visits</div>
              <div className="LinkList__Body__Header__LastVisited">Created</div>
          </div>
          <div className="LinkList__Body__Content">
          <TimeoutTransitionGroup
              enterTimeout={500}
              leaveTimeout={500}
              transitionName="Link">
            { links.map((link, index) => (<Link link={ link } isNew={ !index } key={ link.url }/> ))}
          </TimeoutTransitionGroup>
          </div>
        </div>
      </div>

    );
  }

}

LinkList.propTypes = {
  links: PropTypes.array.isRequired,
  deleteAllLinks: PropTypes.func.isRequired,
};
