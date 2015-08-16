import { CREATE_LINK, DELETE_ALL_LINKS, REFRESH_All_LINKS_INFO } from '../constants/ActionTypes';
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
  case CREATE_LINK:
    return [{
      url:action.url,
      visits: 0,
      lastVisited: null
    }, ...state];

  case DELETE_ALL_LINKS:
    return [];

  case REFRESH_All_LINKS_INFO:
    return state;

  default:
    return state;
  }
}
