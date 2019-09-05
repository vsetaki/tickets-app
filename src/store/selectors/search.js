const getSearch = state => state.get('search');

export const getSearchId = state => getSearch(state).get('searchId');
export const getSearchProcessing = state => getSearch(state).get('processing');
