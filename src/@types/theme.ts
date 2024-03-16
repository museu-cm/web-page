declare module "@mui/material/styles" {
  interface Palette {
    yellow: {
      main: string;
      900: string;
      200: string;
    };
    white: string;
  }
  interface PaletteOptions {
    yellow?: {
      main?: string;
      900?: string;
      200?: string
      ;
    };
    white?: string;
  }
}

export {};
