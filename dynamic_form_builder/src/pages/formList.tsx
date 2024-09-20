import { useState } from "react";
import { useFields } from "../shared/helpers";
import {
  TextField,
  CheckboxField,
  DropDownField,
  SubmitButton,
} from "../shared/ui";
import { TTextField, TCheckboxField, TDropdownField } from "../shared/types";

const initialFieldsText: TTextField[] = [
  { id: Date.now(), value: "", type: "text", label: "Test text" },
];
const initialFieldsCheckbox: TCheckboxField[] = [
  { id: Date.now(), value: "false", type: "checkbox", label: "Test checkbox" },
];
const initialFieldsDropdown: TDropdownField[] = [
  { id: Date.now(), value: "", type: "dropdown", label: "Test dropdown" },
];

export const FormList = () => {
  const [state, setState] = useState({
    text: initialFieldsText,
    checkbox: initialFieldsCheckbox,
    dropDown: initialFieldsDropdown,
  });

  const {
    fieldsDropdown,
    handleAddDropdownField,
    handleFieldDropdownValueChange,
    handleRemoveDropdownField,
    fieldsText,
    handleAddTextField,
    handleFieldTextValueChange,
    handleRemoveTextField,
    fieldsCheckbox,
    handleFieldCheckboxValueChange,
    handleAddCheckboxField,
    handleRemoveCheckboxField,
    onSubmit,
  } = useFields(state, setState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h1> Dynamic Form Builder </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "33%" }}>
          <TextField
            fieldsText={fieldsText}
            handleAddTextField={handleAddTextField}
            handleFieldTextValueChange={handleFieldTextValueChange}
            handleRemoveTextField={handleRemoveTextField}
          />
        </div>
        <div style={{ width: "33%" }}>
          <CheckboxField
            fieldsCheckbox={fieldsCheckbox}
            handleFieldCheckboxValueChange={handleFieldCheckboxValueChange}
            handleAddCheckboxField={handleAddCheckboxField}
            handleRemoveCheckboxField={handleRemoveCheckboxField}
          />
        </div>
        <div style={{ width: "33%" }}>
          <DropDownField
            fieldsDropdown={fieldsDropdown}
            handleAddDropdownField={handleAddDropdownField}
            handleFieldDropdownValueChange={handleFieldDropdownValueChange}
            handleRemoveDropdownField={handleRemoveDropdownField}
          />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <SubmitButton onSubmit={onSubmit} />
      </div>
    </div>
  );
};
