export type TField = {
  id: number;
  value: string;
  type: "text" | "checkbox" | "dropdown";
  options?: string[]
}

export type TProps = {
  fields: TField[];
  addField: (type: "text" | "checkbox" | "dropdown") => void;
  changeFieldValue: (id: number, value: string) => void;
  removeField: (id: number) => void;
};

export type TTextField = { id: number; value: string; type: "text", label: string };
export type TCheckboxField = { id: number; value: string; type: "checkbox", label: string };
export type TDropdownField = { id: number; value: string; type: "dropdown", label: string };