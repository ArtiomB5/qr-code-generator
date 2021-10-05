import { StateType, ActionTypes, ActionTypesEnum } from "../../types/Types";

const initialState: StateType = {
  value: "",
  url: "",
  error: null
};

export const AppReducer = (
  state = initialState,
  action: ActionTypes
): StateType => {
  switch (action.type) {
    case ActionTypesEnum.CHANGE_TEXT:
      return { ...state, value: action.payload };
    case ActionTypesEnum.GENERATE_QR_CODE:
      return { ...state, url: action.payload, error: null };
    case ActionTypesEnum.ERROR_QR_CODE:
      return { ...state, url: "", error: action.payload };
    case ActionTypesEnum.REMOVE_QR_CODE:
      return { ...state, url: "", error: null };
    default:
      return state;
  }
};

export type appReducerType = ReturnType<typeof AppReducer>;
