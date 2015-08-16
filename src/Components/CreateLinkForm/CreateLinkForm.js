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
        <input type="button" value="Shorten this link" disabled={ !this.state.url } onClick={ this.props.createLink.bind(this, this.state.url) }/>
      </div>
    );
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }
}

CreateLinkForm.propTypes = {
  createLink: PropTypes.func.isRequired
}
