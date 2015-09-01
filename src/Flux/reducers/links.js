import * as actionTypes from 'Flux/constants/ActionTypes';

export default function links(state = [], action) {
  switch (action.type) {
  case actionTypes.CREATE_LINK_REQUEST:
    // remove old link with the same url and add new
    return [{
      url: action.url,
      isCreating: true,
    }, ...state.filter(link => link.url !== action.url)];

  case actionTypes.CREATE_LINK_SUCCESS:
    return state.map(link =>
      link.url === action.url ? Object.assign({}, link, {isCreating: false, shortcode: action.shortcode}) : link
    );

  case actionTypes.CREATE_LINK_FAIL:
    return state.map(link =>
      link.url === action.url ? Object.assign({}, link, {isCreating: false, isError: true}) : link
    );

  case actionTypes.LINK_INFO_REQUEST:
    return state;

  case actionTypes.LINK_INFO_SUCCESS:
    return state.map(link =>
      link.shortcode === action.shortcode ? Object.assign({}, link, action) : link
    );

  case actionTypes.LINK_INFO_FAIL:
    return state;

  case actionTypes.DELETE_ALL_LINKS:
    return [];

  default:
    return state;

  }
}
