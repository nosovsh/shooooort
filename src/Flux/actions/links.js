import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

function createLinkInProgress(url) {
  return {
    type: types.CREATE_LINK_IN_PROGRESS,
    url: url
  }
}

function createLinkSuccess(url, json) {
  return {
    type: types.CREATE_LINK_SUCCESS,
    url: url
  }
}

function requestCreateLink(url) {
  return dispatch => {
    dispatch(createLinkInProgress(url));
    return fetch(`http://gymia-shorty.herokuapp.com/shorten`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
      })
    }).then(req => req.json())
      .then(json => dispatch(createLinkSuccess(url, json)));
  }
}

export function createLink(url) {
  return (dispatch, getState) => {
    return dispatch(requestCreateLink(url));
  };
}

export function deleteAllLinks() {
  return { type: types.DELETE_ALL_LINKS };
}

export function refreshAllLinksInfo() {
  return { type: types.REFRESH_All_LINKS_INFO };
}
