import { FC } from "react";

export const SubmitButton: FC<any> = ({ onSubmit }) => {
  return (
    <div>
      <button style={{ height: "60px", fontSize: "20px" }} onClick={onSubmit}>
        Отправить
      </button>
    </div>
  );
};
