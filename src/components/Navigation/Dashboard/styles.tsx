import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Section = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.background.paper}`,
}));

export const DrawerContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
