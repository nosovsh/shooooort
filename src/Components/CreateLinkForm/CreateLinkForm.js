import React, { Component, PropTypes } from 'react';

import './style.scss'

export default class CreateLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  render ()  {
    return (
      <div className="CreateLinkForm">
        <div className="Column-8">
          <input
            type="text"
            value={ this.state.url }
            onChange={ this.handleChange.bind(this) }
            onKeyPress={ this.handleKeyPress.bind(this)}
            className="CreateLinkForm__TextInput"
            placeholder="Paste the link you want to shorten here"/>

          <input
            type="button"
            value="Shorten this link"
            disabled={ !this.state.url }
            onClick={ this.handleCreateLink.bind(this) }
            className="CreateLinkForm__Button"/>
        </div>
      </div>
    );
  }

  handleChange (e) {
    this.setState({url: e.target.value});
  }

  handleKeyPress (e) {
    if (e.charCode == 13)
      this.handleCreateLink(e)
  }

  handleCreateLink (e) {
    this.props.createLink(this.state.url)
    this.setState({
      url: ""
    })
  }
}

CreateLinkForm.propTypes = {
  createLink: PropTypes.func.isRequired
}
