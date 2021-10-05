export enum ActionTypesEnum {
  CHANGE_TEXT = "CHANGE_TEXT",
  GENERATE_QR_CODE = "GENERATE_QR_CODE",
  REMOVE_QR_CODE = "REMOVE_QR_CODE",
  ERROR_QR_CODE = "ERROR_QR_CODE"
}

interface changeTextActionType {
  type: ActionTypesEnum.CHANGE_TEXT;
  payload: string;
}

interface generateQrCodeActionType {
  type: ActionTypesEnum.GENERATE_QR_CODE;
  payload: string;
}

interface removeQrCodeActionType {
  type: ActionTypesEnum.REMOVE_QR_CODE;
}

interface errorQrCodeActionType {
  type: ActionTypesEnum.ERROR_QR_CODE;
  payload: string;
}

export type ActionTypes =
  | changeTextActionType
  | generateQrCodeActionType
  | errorQrCodeActionType
  | removeQrCodeActionType;

export interface StateType {
  value: string;
  url: string;
  error: null | string;
}
