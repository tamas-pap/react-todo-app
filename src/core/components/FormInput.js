import React from "react";
import { FormGroup, FormInput, FormError } from "./styled";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <FormGroup>
      <FormInput type="text" {...field} {...props} />

      {touched[field.name] && errors[field.name] && (
        <FormError>{errors[field.name]}</FormError>
      )}
    </FormGroup>
  );
};

export default Input;
