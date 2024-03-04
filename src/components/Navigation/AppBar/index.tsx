import {
  Toolbar,
  Button,
  Menu,
  MenuItem,
  AppBar as AppBarMUI,
  Avatar,
  Stack,
  useTheme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearUserLogged, getUserLogged } from "../../../services/userInfo";
import { clearSession } from "../../../services/session";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

const drawerWidth = 0;

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
type Props = {
  handleDrawerToggle: () => void;
};

const AppBar = ({ handleDrawerToggle }: Props) => {
  const matches = useMediaQuery("(min-width:1320px)");

  const navigate = useNavigate();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);

  const user = getUserLogged()?.nomeCompleto ?? "Geovana Figueiredo Silva";

  const handleClickButtonUser = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    clearUserLogged();
    clearSession();
    navigate("/login");
  };

  return (
    <AppBarMUI
      position="fixed"
      sx={{
        width: `calc(100% - ${matches ? drawerWidth : 0}px)`,
        backgroundColor: "#fff",
        boxShadow: "0px -10px 20px 4px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar>
        <Stack
          flexDirection="row"
          justifyContent="end"
          width="100%"
          p={0}
          m={0}
        >
          <Button onClick={handleClickButtonUser}>
            <Stack flexDirection="row" alignItems="center">
              <Avatar
                {...stringAvatar(user ?? "")}
                sx={{
                  bgcolor: theme.palette.yellow.main,
                  color: theme.palette.grey[800],
                }}
              />

              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", paddingX: 1 }}
              >
                {user}
              </Typography>

              <ArrowDropDownIcon />
            </Stack>
          </Button>
        </Stack>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          onClick={handleDrawerToggle}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            sx: {
              minWidth: 200,
            },
          }}
        >
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBarMUI>
  );
};

export default AppBar;
