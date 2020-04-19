import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  token: null
};

const map = {
  [`${actionTypes.GET_TOKEN}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    token: payload.data
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function authReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}