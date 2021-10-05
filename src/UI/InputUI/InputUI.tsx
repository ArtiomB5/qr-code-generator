import { InputUISC } from "./InputUISC";

interface PropsType {
  inputValue: string;
  inputFunc: (inputValue: string) => void;
}

export const InputUI: React.FC<PropsType> = (props) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.inputFunc(event.currentTarget.value);
  };

  return (
    <div>
      <InputUISC
        type="text"
        value={props.inputValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};
