import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef } from "react";
import { AlertTitle } from "@mui/material";
import { Cancel, CheckCircle, Error, Info } from "@mui/icons-material";
import { useAlertStore } from "../../store/useAlertStore";

const AlertMUI = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

const Alert = () => {
  const { alert, closeAlert } = useAlertStore();

  const switchBackgroundColor = () => {
    switch (alert.type) {
      case "success":
        return "#EAF9D4";

      case "error":
        return "#FFE9E5";

      case "warning":
        return "#FEF5CD";

      case "info":
        return "#C0E3F5";

      default:
        return "#EAF9D4";
    }
  };
  const switchBorderColor = () => {
    switch (alert.type) {
      case "success":
        return "4px solid #388933";
      case "error":
        return "4px solid #F33A15";
      case "warning":
        return "4px solid #FCD212";
      case "info":
        return "4px solid #0E96E3";
      default:
        return "4px solid #388933";
    }
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={5000}
      onClose={closeAlert}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <AlertMUI
        onClose={closeAlert}
        severity={alert.type}
        iconMapping={{
          success: <CheckCircle color="primary" />,
          error: <Cancel color="error" />,
          warning: <Error color="warning" />,
          info: <Info color="info" />,
        }}
        sx={{
          width: "100%",
          borderLeft: switchBorderColor(),
          backgroundColor: switchBackgroundColor(),
        }}
      >
        {alert.title && <AlertTitle>{alert.title}</AlertTitle>}
        {alert.message}
      </AlertMUI>
    </Snackbar>
  );
};

export default Alert;
