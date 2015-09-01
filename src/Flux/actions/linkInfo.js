import fetch from 'isomorphic-fetch';
import * as types from 'Flux/constants/ActionTypes';
import { LINK_INFO_URL } from 'Flux/constants/Urls';

function linkInfoRequest(shortcode) {
  return {
    type: types.LINK_INFO_REQUEST,
    shortcode,
  };
}

function linkInfoSuccess(shortcode, json) {
  return {
    type: types.LINK_INFO_SUCCESS,
    shortcode: shortcode,
    lastSeenDate: json.lastSeenDate,
    redirectCount: json.redirectCount,
    startDate: json.startDate,
  };
}

function linkInfoFail(shortcode) {
  return {
    type: types.LINK_INFO_FAIL,
    shortcode,
  };
}

/**
 * Makes real request to server and fetch stats for *shortcode*
 * Dispatch LinkInfo actions
 **/
function actuallyLinkInfo(shortcode) {
  return dispatch => {
    dispatch(linkInfoRequest(shortcode));
    return fetch(LINK_INFO_URL.replace(':shortcode', shortcode), {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(req => req.json())
      .then(json => dispatch(linkInfoSuccess(shortcode, json)))
      .catch(ex => {
        dispatch(linkInfoFail(url));
        throw ex;
      });
  };
}

export function linkInfo(shortcode) {
  return (dispatch, getState) => {  // eslint-disable-line no-unused-vars
    return dispatch(actuallyLinkInfo(shortcode));
  };
}
