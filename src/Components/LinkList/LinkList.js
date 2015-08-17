import React, { Component, PropTypes } from 'react';
import Link from 'Components/Link/Link'

import './style.scss'

export default class LinkList extends Component {
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
              <div className="LinkList__Body__Header__LastVisited">Last Visited</div>
          </div>
          <div className="LinkList__Body__Content">
            { links.map(link =><Link key={ link.url } link={ link } />)}
          </div>
        </div>
      </div>

    );
  }

  handleDeleteAllLinks (e) {
    e.preventDefault();
    this.props.deleteAllLinks();
  }
}

LinkList.propTypes = {
  links: PropTypes.array.isRequired,
  deleteAllLinks: PropTypes.func.isRequired
}
