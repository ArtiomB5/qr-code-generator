import { Dispatch } from "redux";
import { ActionTypes, ActionTypesEnum } from "../../types/Types";

export const GetQRCodeAC = (text: string) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: ActionTypesEnum.GENERATE_QR_CODE,
        payload: `http://api.qrserver.com/v1/create-qr-code/?data=${text}&size=100x100`
      });
    } catch (error) {
      dispatch({
        type: ActionTypesEnum.ERROR_QR_CODE,
        payload: error
      });
    }
  };
};

export const RemoveQRCodeAC = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: ActionTypesEnum.REMOVE_QR_CODE,
      payload: ""
    });
  };
};

export const ChangeTextAC = (value: string) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: ActionTypesEnum.CHANGE_TEXT,
      payload: value
    });
  };
};
