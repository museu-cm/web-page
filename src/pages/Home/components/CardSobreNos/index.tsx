import { Box, Typography } from "@mui/material";
import theme from "../../../../styles/theme";
import { images } from "../../../../assets/images";

const CardSobreNos = () => {

  return(
    <Box 
      sx={{
        background: theme.palette.primary.main,
        p: "2rem",
      }}
      display="flex"
      flexDirection="row"
      >
        <Box display="flex" flexDirection="column">
          <Box  display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" flex={1}>
              <Typography
                variant="h3"
                color={theme.palette.grey[100]}
                display="flex"
                flex={1}
                >
                  Sobre <br/> nós
              </Typography>
              <Box flex={2 } p="5px">
                <img src={images.image01} alt="image 01" width="100%" height="auto"/>
              </Box>
            </Box>

            <Box display="flex" p="5px" flex={1}>
              <img src={images.Image02} alt="image 02" width="100%" height="auto" />
            </Box>
        </Box>
        <Box display="flex" flexDirection="row" >
          <Box p="5px" flex={1}>
            <img src={images.Image03} alt="image 03" width="100%" height="auto" />
          </Box>
          <Box p="5px"flex={3}>              
            <img src={images.Image04} alt="image 04" width="100%" height="auto" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardSobreNos;