import { FC } from "react";
import { TCheckboxField } from "../../shared/types";

export const CheckboxField: FC<any> = ({
  fieldsCheckbox,
  handleFieldCheckboxValueChange,
  handleAddCheckboxField,
  handleRemoveCheckboxField,
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
      <div style={{}}>
        <button
          style={{ height: "60px", fontSize: "20px" }}
          onClick={handleAddCheckboxField}
        >
          Добавить checkbox
        </button>
      </div>
      {fieldsCheckbox &&
        fieldsCheckbox.map((field: TCheckboxField) => (
          <div
            key={field.id}
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
            }}
          >
            <input
              type="checkbox"
              value={field.value}
              onChange={(e) =>
                handleFieldCheckboxValueChange(field.id, e.target.checked)
              }
              placeholder="Label"
            />
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleRemoveCheckboxField(field.id)}
            >
              Удалить
            </button>
          </div>
        ))}
    </div>
  );
};
