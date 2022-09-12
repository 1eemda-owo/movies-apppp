const SortingApi = (state = '', action) => {
  switch (action.type) {
    case 'LIST_LIKE':
      return (state = '&sort_by=like_count');
    case 'LIST_DOWN':
      return (state = '&sort_by=download_count');
    case 'LIST_RATING':
      return (state = '&sort_by=rating');
    default:
      return state;
  }
};

export default SortingApi;
