import { ButtonUISC } from "../ButtonUI/ButtonUISC";

interface PropsType {
  buttonFunc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ButtonUI: React.FC<PropsType> = (props) => {
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.buttonFunc(event);
  };

  return <ButtonUISC onClick={onClickHandler}>{props.children}</ButtonUISC>;
};
