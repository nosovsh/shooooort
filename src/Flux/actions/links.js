import fetch from 'isomorphic-fetch';
import * as types from 'Flux/constants/ActionTypes';
import { SHORTENING_URL, LINK_INFO_URL } from 'Flux/constants/Urls'

function createLinkRequest(url) {
  return {
    type: types.CREATE_LINK_REQUEST,
    url: url
  }
}

function createLinkSuccess(url, json) {
  return {
    type: types.CREATE_LINK_SUCCESS,
    url: url,
    shortcode: json.shortcode
  }
}

function createLinkFail(url) {
  return {
    type: types.CREATE_LINK_FAIL,
    url: url
  }
}

export function createLink(url) {
  return (dispatch, getState) => {
    return dispatch(actuallyCreateLink(url));
  };
}

export function deleteAllLinks() {
  return { type: types.DELETE_ALL_LINKS };
}

/**
 * Makes real request to server and fetch shortcode for *url*
 * Dispatch Link actions
 **/
function actuallyCreateLink(url) {
  return dispatch => {
    dispatch(createLinkRequest(url));
    return fetch(SHORTENING_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
      })
    }).then(response => response.json())
      .then(json => dispatch(createLinkSuccess(url, json)))
      .catch(ex => {
        dispatch(createLinkFail(url))
        throw ex;
      });
  }
}
