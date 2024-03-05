import { Stack, Typography, useTheme } from "@mui/material";

const ListTags = () => {

  const theme = useTheme();

  return(
    <Stack 
    spacing={1}
    paddingX={6}
    paddingY={4}
    borderRadius={4}
    minWidth={1200}
    minHeight={600}
    sx={{
      backgroundColor: "white",
    }}>
      <Typography variant="h4" fontSize={32}>Lista de Tags</Typography>
      <Typography variant="body1" fontSize={16} color={theme.palette.grey[600]}>A listagem de tags relaciona isso isso e aquilo dos cadstros.</Typography>
    </Stack>
  );
};

export default ListTags;