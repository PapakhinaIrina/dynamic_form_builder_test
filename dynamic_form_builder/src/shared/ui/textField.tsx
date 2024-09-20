import { FC } from "react";
import { TTextField } from "../types";

export const TextField: FC<any> = ({
  fieldsText,
  handleAddTextField,
  handleFieldTextValueChange,
  handleRemoveTextField,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <button
          style={{ height: "60px", fontSize: "20px" }}
          onClick={handleAddTextField}
        >
          Добавить текстовое поле
        </button>
      </div>
      {fieldsText &&
        fieldsText.map((field: TTextField) => (
          <div
            key={field.id}
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
            }}
          >
            <input
              type="text"
              value={field.value}
              onChange={(e) =>
                handleFieldTextValueChange(field.id, e.target.value)
              }
              placeholder="Label"
            />

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleRemoveTextField(field.id)}
            >
              Удалить
            </button>
          </div>
        ))}
    </div>
  );
};
