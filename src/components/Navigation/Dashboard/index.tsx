import {
  Assignment,
  DashboardOutlined,
  Domain,
  Forum,
  Group,
  InsertPhoto,
  ListAlt,
  Room,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PropsWithChildren, useCallback, useState } from "react";
import AppBar from "../AppBar/index";
import Accordion from "./components/Accordion";
import * as S from "./styles";

const drawerWidth = 300;

const Dashboard = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1320px)");

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const onNavigate = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const drawer = (
    <S.DrawerContent
      height="100%"
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
        padding: 2,
        borderRadius: 4,
      }}
    >
      <Accordion
        title="Dashboard"
        onNavigate={onNavigate}
        icon={<DashboardOutlined />}
        as="button"
      />
      <Accordion
        title="Tags"
        onNavigate={onNavigate}
        icon={<ListAlt />}
        as="button"
      />
      <Accordion
        title="Localização"
        onNavigate={onNavigate}
        icon={<Room />}
        as="button"
      />
      <Accordion
        title="Acervo"
        onNavigate={onNavigate}
        icon={<InsertPhoto />}
        as="button"
      />
      <Accordion
        title="Coleções"
        onNavigate={onNavigate}
        icon={<Assignment />}
        as="button"
      />
      <Accordion
        title="Solicitações"
        onNavigate={onNavigate}
        icon={<Forum />}
        as="button"
      />
      <Accordion
        title="Usuários"
        onNavigate={onNavigate}
        icon={<Group />}
        as="button"
      />
      <Accordion
        title="Administração"
        onNavigate={onNavigate}
        icon={<Domain />}
        as="button"
      />
    </S.DrawerContent>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.background.default}
    >
      <AppBar handleDrawerToggle={handleDrawerToggle} />

      <Toolbar />

      <Box display="flex" flexDirection="row">
        <Box
          // component="nav"
          sx={{ width: matches ? drawerWidth : 0, flexShrink: matches ? 1 : 0 }}
        >
          {matches ? (
            // <Drawer
            //   variant="permanent"
            //   sx={{
            //     "& .MuiDrawer-paper": {
            //       boxSizing: "border-box",
            //       width: drawerWidth,
            //     },
            //   }}
            //   open
            // >
            <Stack p={2}>{drawer}</Stack>
          ) : (
            // </Drawer>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          )}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            width: `calc(100% - ${matches ? drawerWidth : 0}px)`,
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            paddingTop: 2,
            height: "100vh",
            overflow: "auto",
          }}
          component="main"
        >
          <Box
            sx={{
              m: "auto",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
