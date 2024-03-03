import { Box, Button, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    sx={{
      background: '#000',
      padding: '2rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1,
    }}

      >
      <Typography variant="h3" color='#fff'>Museu Municipal Deolindo Mendes Pereira</Typography>
      <Stack direction='row' spacing={2} sx={{ pt: "1rem"}}>
        <Button color="secondary" variant="contained"> HOME </Button>
        <Button color="secondary" variant="contained"> VISITAS </Button>
        <Button color="secondary" variant="contained"> SOBRE </Button>
        <Button color="primary" variant="contained"> ACERVO </Button>
      </Stack>
    </Box>
  );
}

export default Header;