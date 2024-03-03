import { TextField as TextFieldMUI, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

const TextField = forwardRef((props: TextFieldProps, ref) => {
  return <TextFieldMUI ref={ref as any} variant="outlined" {...props} />;
});

export default TextField;
