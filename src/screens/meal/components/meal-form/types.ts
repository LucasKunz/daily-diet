import { INIT_FORM_STATE } from ".";

export type HandleChangeInputParams = {
  field: keyof typeof INIT_FORM_STATE;
  value: any;
};

export type MealFormProps = {
  id?: string;
};
