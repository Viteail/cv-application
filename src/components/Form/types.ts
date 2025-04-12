import React from "react";

export interface IInputConfig {
  text: string;
  type: React.HTMLInputTypeAttribute;
}

const test: IInputConfig = {
  type: 'button'
}

export interface IFormProps {
  inputs: IInputConfig[];
}
