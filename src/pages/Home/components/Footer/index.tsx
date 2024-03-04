import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return(
    <Box  
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{
        background: '#000',
        p: "4rem"
      }}
    >
      <Box display="flex" flexDirection="column">
        <Typography color='#fff' variant='h6' fontWeight="bold">Museu Municipal Deolindo Mendes Pereira</Typography>
        <Typography color='#fff' variant='subtitle1'>Endereço: Av. Cap. Índio Bandeira, 1117</Typography>
        <Typography color='#fff' variant="subtitle1"> Centro, Campo Mourão/ PR, 87301-000</Typography>
        <Typography color='#fff' variant="subtitle1">Telefone: (44) 3523-8280</Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Button color="secondary" variant="contained"> HOME </Button>
        <Button color="secondary" variant="contained"> VISITAS </Button>
        <Button color="secondary" variant="contained"> SOBRE </Button>
        <Button color="primary" variant="contained"> ACERVO </Button>
      </Box>
      <Box display="flex" flexDirection="column" >
        <Typography color='#fff' variant="subtitle1"> Entre em contato:</Typography>
        {/* adicionar os icons */}
        <Button color="primary" variant="contained"> PAINEL ADMINISTRATIVO </Button>
      </Box>
    </Box>
  );
};

export default Footer;