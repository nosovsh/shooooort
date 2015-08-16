import React, { Component, PropTypes } from 'react';

export default class CreateLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  render ()  {
    return (
      <div className="UrlForm">
        <input type="text" value={ this.state.url } onChange={ this.handleChange.bind(this) }/>
        <input type="button" value="Shorten this link" disabled={ !this.state.url } onClick={ this.handleCreateLink.bind(this) }/>
      </div>
    );
  }

  handleChange (e) {
    this.setState({url: e.target.value});
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
