import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from 'Flux/actions/links';
import TimeoutTransitionGroup from 'react-components/timeout-transition-group'

import CreateLinkForm from "Components/CreateLinkForm/CreateLinkForm"
import LinkList from "Components/LinkList/LinkList"

import 'normalize.css/normalize.css';
import './style.scss'

class App extends Component {
  render() {
    const { links, dispatch } = this.props;
    const actions = bindActionCreators(LinkActions, dispatch);

    return (
      <div className="Container">
        <div className="Header">
          <div className="Column-4">
            <h1 className="Header__Logo">Shooooort</h1>
          </div>
          <div className="Column-4">
            <h2 className="Header__Tagline">The link shortener with a long name</h2>
          </div>
        </div>
        <CreateLinkForm createLink={ actions.createLink } />

        <TimeoutTransitionGroup
            enterTimeout={500}
            leaveTimeout={500}
            transitionName="LinkList">
            { links.length ? <LinkList links={links} deleteAllLinks={ actions.deleteAllLinks } /> : null }
        </TimeoutTransitionGroup>
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
