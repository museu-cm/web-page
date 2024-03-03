import { useAlertStore, OptionsAlert } from "../store/useAlertStore";

export const showAlert = (options: Partial<OptionsAlert>) => {
  useAlertStore.setState((state) => ({
    alert: { ...state.alert, ...options, open: true },
  }));
};
