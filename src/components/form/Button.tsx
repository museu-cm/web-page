import {
  Button as ButtonMUI,
  ButtonProps as ButtonPropsMUI,
  CircularProgress,
} from "@mui/material";

type ButtonProps = {
  isLoading?: boolean;
} & ButtonPropsMUI;

const Button = ({ isLoading = false, children, ...rest }: ButtonProps) => {
  return (
    <ButtonMUI variant="contained" disabled={isLoading} {...rest}>
      {isLoading && (
        <CircularProgress color="inherit" size={24} sx={{ marginRight: 1.5 }} />
      )}
      {children}
    </ButtonMUI>
  );
};

export default Button;
