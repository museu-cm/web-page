import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useTheme,
  Stack,
} from "@mui/material";
import { Info, CheckCircle, Report } from "@mui/icons-material";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactElement, Ref } from "react";
import Button from "../form/Button";

type IconType = "success" | "warning" | "error" | "info";

export type AlertDialogProps = {
  title: string;
  subTitle: string;
  textConfirm?: string;
  textCancel?: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  iconType?: IconType;
};

const IconAlert = ({ iconType = undefined }: { iconType?: IconType }) => {
  const theme = useTheme();

  switch (iconType) {
    case "warning":
      return <Info fontSize="large" sx={{ fill: theme.palette.yellow[900] }} />;
    case "info":
      return <Info fontSize="large" sx={{ fill: "#4d94ce" }} />;
    case "error":
      return <Report fontSize="large" color="error" />;
    case "success":
      return <CheckCircle fontSize="large" color="success" />;
    default:
      return <span />;
  }
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({
  open,
  onClose,
  title,
  subTitle,
  textConfirm = undefined,
  textCancel = undefined,
  onConfirm,
  iconType = undefined,
}: AlertDialogProps) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        sx={{
          pt: 4,
          px: 4,
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
        }}
      >
        {iconType && (
          <Stack mr={2}>
            <IconAlert iconType={iconType} />
          </Stack>
        )}
        <Stack>{title}</Stack>
      </DialogTitle>
      <DialogContent sx={{ px: 4 }}>
        <DialogContentText
          id="alert-dialog-slide-description"
          sx={{
            color: theme.palette.grey[900],
          }}
        >
          {subTitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 4, pb: 4, justifyContent: "space-between" }}>
        {textCancel && (
          <Button onClick={onClose} variant="outlined" sx={{ minWidth: 120 }}>
            {textCancel}
          </Button>
        )}
        <div />
        {textConfirm && (
          <Button onClick={onConfirm} sx={{ minWidth: 120 }}>
            {textConfirm}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
