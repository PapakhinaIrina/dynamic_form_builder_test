import { FC } from "react";
import { TTextField } from "../../shared/types";

const options = ["Option 1", "Option 2", "Option 3"];

export const DropDownField: FC<any> = ({
  fieldsDropdown,
  handleAddDropdownField,
  handleFieldDropdownValueChange,
  handleRemoveDropdownField,
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
          onClick={handleAddDropdownField}
        >
          Добавить dropdown
        </button>
      </div>
      {fieldsDropdown &&
        fieldsDropdown.map((field: TTextField) => (
          <div
            key={field.id}
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "10px",
            }}
          >
            <select
              value={field.value.toString()}
              onChange={(e) =>
                handleFieldDropdownValueChange(field.id, e.target.value)
              }
              style={{ minWidth: "150px" }}
            >
              <option value="">Выберите значение</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleRemoveDropdownField(field.id)}
            >
              Удалить
            </button>
          </div>
        ))}
    </div>
  );
};
