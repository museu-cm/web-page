import { Stack, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles";

type Option = {
  location: string;
  label: string;
};

type Props = {
  title: string;
  options?: Option[];
  onNavigate?: () => void;
  as?: "accordion" | "button";
  locationPath?: string;
  icon: ReactNode;
};

const Accordion = ({
  title,
  options = [],
  onNavigate = undefined,
  as = "accordion",
  locationPath = "",
  icon,
}: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    onNavigate?.();
  };

  const isActive = (path: string) => {
    return path.split("/")[1] === location.pathname.split("/")[1];
  };

  if (as === "accordion") {
    return (
      <S.Accordion defaultExpanded={false}>
        <S.AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          {icon}

          <Typography alignSelf="center" marginLeft={1}>
            {title}
          </Typography>
        </S.AccordionSummary>
        <S.AccordionDetails>
          <Stack
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {options.map((o) => (
              <S.AccordionButton
                id={o.label}
                key={o.label}
                variant="contained"
                onClick={() => handleNavigate(o.location)}
                sx={{
                  textTransform: "unset",
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.common.white,
                }}
              >
                {o.label}
              </S.AccordionButton>
            ))}
          </Stack>
        </S.AccordionDetails>
      </S.Accordion>
    );
  }

  if (as === "button") {
    return (
      <S.Button
        variant="contained"
        onClick={() => handleNavigate(locationPath)}
        sx={{
          textTransform: "unset",
          backgroundColor: isActive(locationPath)
            ? "background.paper"
            : "background.paper",
          color: isActive(locationPath) ? "primary.main" : "primary.main",
          ":hover": {
            backgroundColor: "background.default",
            color: "primary.main",
          },
        }}
      >
        {icon}
        <Typography marginLeft={1}>{title}</Typography>
      </S.Button>
    );
  }

  return null;
};

export default Accordion;
