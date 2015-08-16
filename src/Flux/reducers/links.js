import {
  CREATE_LINK_IN_PROGRESS, CREATE_LINK_SUCCESS, CREATE_LINK_FAIL,
  DELETE_ALL_LINKS, REFRESH_All_LINKS_INFO
} from 'Flux/constants/ActionTypes';
import { combineReducers } from 'redux';


export default function links(state = [], action) {
  switch (action.type) {
  case CREATE_LINK_IN_PROGRESS:
    return [{
      url:action.url,
      isCreating: true
    }, ...state];

  case CREATE_LINK_SUCCESS:
    return state.map(link =>
      link.url == action.url ? Object.assign({}, link, {isCreating: false, shortcode: action.shortcode}) : link
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
