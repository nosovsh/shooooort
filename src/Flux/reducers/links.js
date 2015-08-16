import {
  CREATE_LINK_IN_PROGRESS, CREATE_LINK_SUCCESS, CREATE_LINK_FAIL,
  DELETE_ALL_LINKS, REFRESH_All_LINKS_INFO
} from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initialState = [{
  url: 'http://google.com',
  visits: 3,
  lastVisited: null
},{
  url: 'http://blahblah.com',
  visits: 1,
  lastVisited: null
}];

export default function links(state = initialState, action) {
  switch (action.type) {
  case CREATE_LINK_IN_PROGRESS:
    return [{
      url:action.url,
      isCreating: true
    }, ...state];

  case CREATE_LINK_SUCCESS:
    return state.map(link =>
      link.url == action.url ? Object.assign({}, link, {isCreating: false}) : link
    );

  case CREATE_LINK_FAIL:
    return state.map(link =>
      link.url == action.url ? Object.assign({}, link, {isCreating: false, isError: true}) : link
    );

  case DELETE_ALL_LINKS:
    return [];

  case REFRESH_All_LINKS_INFO:
    // Not Yes Implemented
    return state;

  default:
    return state;
  }
}
