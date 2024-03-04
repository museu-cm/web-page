import { Box, Typography } from "@mui/material";
import { images } from "../../../../assets/images";
import theme from "../../../../styles/theme";


const CardBemVindo = () => {
  return (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: 'auto',
      }}
    >
      {/* TODO: Add sombreado na imagem */}
      <Box
      sx={{
        position: 'absolute',
        top: '30%',
        left: '10%',
      }}
      >
        <Typography
          variant="h2"
          color={theme.palette.grey[100]} 
          >
            Seja bem vindo!
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.grey[100]} 
          >
            Conheça o Museu Municipal Deolindo Mendes Pereira
        </Typography>
      </Box>
      <img 
        src={images.bodyImage} 
        alt="body"  
        width="100%" 
        height="auto" 
        style={{
          display: 'block',
        }}
      />
    </Box>
  )
}

export default CardBemVindo;