const getSearch = (state) => state.get('search');

export const getSearchId = (state) => getSearch(state).get('searchId');
export const getSearchStop = (state) => getSearch(state).get('stop');
