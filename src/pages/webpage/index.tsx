import { Box } from "@mui/material";
import CardBemVindo from "./components/CardBemVindo";
import Header from "./components/Header";
import CardSobreNos from "./components/CardSobreNos";
import Footer from "./components/Footer";


const WebPage = () => {

  return(
    <Box 
    display='flex'  
    flexDirection='column'  
      >
        {/* TODO: Ajustar para que o box tenha um padding top do tamanho do header */}
      <Header />
      <CardBemVindo />
      <CardSobreNos />
      <Footer />
    </Box>
  )
};

export default WebPage;