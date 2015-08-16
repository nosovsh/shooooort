import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from 'Flux/actions/links';

import CreateLinkForm from "Components/CreateLinkForm/CreateLinkForm"
import LinkList from "Components/LinkList/LinkList"

class App extends Component {
  render() {
    const { links, dispatch } = this.props;
    const actions = bindActionCreators(LinkActions, dispatch);

    return (
      <div className="Shooooort">
        <div className="Shooooort__Header">
          <h1>Shooooort</h1>
          <h2>The link shortener with a long name</h2>
        </div>
        <div className="Shooooort__Content">
          <CreateLinkForm createLink={ actions.createLink } />
          { links.length ? <LinkList links={links} deleteAllLinks={ actions.deleteAllLinks } /> : null }
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    links: state.links
  };
}

export default connect(select)(App);
