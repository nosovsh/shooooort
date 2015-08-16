import * as types from '../constants/ActionTypes';

export function createLink(url) {
  return { type: types.CREATE_LINK, url };
}

export function deleteAllLinks() {
  return { type: types.DELETE_ALL_LINKS };
}

export function refreshAllLinksInfo() {
  return { type: types.REFRESH_All_LINKS_INFO };
}
