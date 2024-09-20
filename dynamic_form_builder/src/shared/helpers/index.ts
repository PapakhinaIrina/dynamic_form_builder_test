import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { TTextField, TCheckboxField, TDropdownField } from "../../shared/types";


type TextField = { id: number; value: string; type: "text" };
type CheckboxField = { id: number; value: string; type: "checkbox" };
type DropdownField = { id: number; value: string; type: "dropdown" };

type TField = TextField | CheckboxField | DropdownField;

const initialFieldsText: TTextField[] = [{ id: Date.now(), value: "", type: "text", label: "Test Text" }];
const initialFieldsCheckbox: TCheckboxField[] = [{ id: Date.now(), value: 'false', type: "checkbox", label: "Test Checkbox" }];
const initialFieldsDropdown: TDropdownField[] = [{ id: Date.now(), value: "", type: "dropdown", label: "Test DropDown" }];

type TState = {
  checkbox: TCheckboxField[];
  dropDown: TDropdownField[];
  text: TTextField[];
};
type TSetState = Dispatch<SetStateAction<TState>>;


export const useFields = (state: TState , setState: TSetState) => {

  const [fieldsText, setFieldsText] = useState<TField[]>(initialFieldsText);
  const [fieldsCheckbox, setFieldsCheckbox] = useState<TField[]>(initialFieldsCheckbox);
  const [fieldsDropdown, setFieldsDropdown] = useState<TField[]>(initialFieldsDropdown);


  const handleAddTextField = () => {
    setState({checkbox: state.checkbox, dropDown: state.dropDown, text: [...state.text, { id: Date.now(), value: "", type: "text", label: "Test Text"  }] })
  };

  const handleAddCheckboxField = () => {
    setState({dropDown: state.dropDown, text: state.text, checkbox: [...state.checkbox, { id: Date.now(), value: "", type: "checkbox", label: "Test CheckBox" }],})
  };

  const handleAddDropdownField = () => {
    setState({checkbox: state.checkbox, dropDown: [...state.dropDown, { id: Date.now(), value: "", type: "dropdown", label: "Test DropDown" }], text: state.text})
  };

  const handleFieldTextValueChange = (id: number, newValue: string) => {    
    const arr = state.text.map((el) => el.id === id ? {...el, value: newValue} : el);
    setFieldsText([...arr])
    setState({dropDown: state.dropDown, text: [...arr], checkbox: state.checkbox,})
  };
  
  const handleFieldCheckboxValueChange = (id: number, newValue: boolean) => {
    const arr = state.checkbox.map((el) => el.id === id ? {...el, value: newValue.toString()} : el);
    setFieldsCheckbox([...arr]);
    setState({dropDown: state.dropDown, text: state.text, checkbox: [...arr],})
  };
  
  const handleFieldDropdownValueChange = (id: number, newValue: string) => {
    const arr = state.dropDown.map((el) => el.id === id ? {...el, value: newValue} : el);
    setFieldsDropdown([...arr]);
    setState({dropDown: [...arr], text: state.text, checkbox: state.checkbox,})
  };

  const handleRemoveTextField = (id: number) => {
    setState( {dropDown: state.dropDown, text: state.text.filter(field => field.id !== id), checkbox: state.checkbox,});
  };
  
  const handleRemoveCheckboxField = (id: number) => {
    setState( {dropDown: state.dropDown, text: state.text, checkbox: state.checkbox.filter(field => field.id !== id),});
  };
  
  const handleRemoveDropdownField = (id: number) => {
    setState( {dropDown: state.dropDown.filter(field => field.id !== id), text: state.text, checkbox: state.checkbox,});
  };
  const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allFields = [...state.checkbox, ...state.dropDown, ...state.text]
    const formattedFields = allFields.filter(item => item.value.trim() !== "");
    try {
      const response = await fetch('http://localhost:3003/fields', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedFields),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Данные успешно отправлены!');
    } catch (error) {
      console.error('Error:', error);
    }

    return formattedFields;
  };    
  
    return { 
    fieldsCheckbox: state.checkbox, 
    fieldsDropdown: state.dropDown, 
    fieldsText: state.text, 
    handleAddTextField, 
    handleAddCheckboxField, 
    handleAddDropdownField, 
    handleFieldTextValueChange, 
    handleFieldCheckboxValueChange, 
    handleFieldDropdownValueChange, 
    handleRemoveTextField,
    handleRemoveCheckboxField, 
    handleRemoveDropdownField, 
    onSubmit 
  };
};
