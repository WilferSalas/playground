// @types
export const UPDATE_STATUS = 'UPDATE_STATUS';

export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return { ...state, [action.payload.user]: action.payload.status };
    default:
      return state;
  }
};
