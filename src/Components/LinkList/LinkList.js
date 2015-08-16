import React, { Component, PropTypes } from 'react';
import Link from 'Components/Link/Link'

export default class LinkList extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className="LinkList">
        <h2>Previously shortened by you</h2>
        { links.length ? <a href="" onClick={ this.handleDeleteAllLinks.bind(this) }>Clear history</a> : null }
        <ul>
          { links.map(link =><Link key={ link.url } link={ link } />)}
        </ul>
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
