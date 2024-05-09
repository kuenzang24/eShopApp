import { SET_CURRENT_USER } from "../actions/Auth.actions";

export default function (state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: [], //TODO
        user: action.payload,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
}
