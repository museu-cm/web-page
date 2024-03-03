import { AlertColor } from "@mui/material";
import { create } from "zustand";

export type OptionsAlert = {
  title?: string;
  open: boolean;
  message: string;
  type: AlertColor;
};

type StateType = {
  alert: OptionsAlert;
  closeAlert: () => void;
};

export const useAlertStore = create<StateType>((set) => ({
  alert: {
    type: "success",
    open: false,
    message: "",
  },
  closeAlert: () => {
    set((state) => ({
      alert: { ...state.alert, open: false },
    }));
  },
}));
