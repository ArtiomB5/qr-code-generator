import { useSelector } from "react-redux";
import { appReducerType } from "../../store/reducers/AppReducer";
import { useActions } from "../../hooks/useActions";
import { InputUI } from "../../UI/InputUI/InputUI";
import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";

export const QRCodeGenerator: React.FC = () => {
  const { GetQRCodeAC, RemoveQRCodeAC, ChangeTextAC } = useActions();

  const state = useSelector((state: appReducerType) => state);

  const inputHandler = (valune: string) => {
    ChangeTextAC(valune);
  };

  const generateQRCodeHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    GetQRCodeAC(state.value);
    ChangeTextAC("");
  };

  const removeQRCode = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    RemoveQRCodeAC();
  };

  return (
    <div>
      <form>
        <InputUI inputValue={state.value} inputFunc={inputHandler} />
        <ButtonUI buttonFunc={generateQRCodeHandler}>Generate QR code</ButtonUI>
        <ButtonUI buttonFunc={removeQRCode}>Remove QR code</ButtonUI>
        <br />
        <img src={state.url} alt="" />
      </form>
    </div>
  );
};
