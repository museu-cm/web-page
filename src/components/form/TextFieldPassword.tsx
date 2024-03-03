import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton, TextFieldProps } from "@mui/material";
import { useState } from "react";
import TextField from "./TextField";

type TextFieldPasswordProps = TextFieldProps;

const TextFieldPassword = ({ ...rest }: TextFieldPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={rest.id}
      label="Senha"
      variant="outlined"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        "& ::-ms-reveal": {
          display: "none",
        },
      }}
      {...rest}
    />
  );
};

export default TextFieldPassword;
