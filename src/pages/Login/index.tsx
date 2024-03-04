import { Box, Container, Stack, Typography, useTheme } from "@mui/material"
import { images } from "../../assets/images";
import useLogin from "./useLogin";
import { Person } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import TextFieldPassword from "../../components/form/TextFieldPassword";
import TextField from "../../components/form/TextField";
import Button from "../../components/form/Button";

const Login = () => {
  const theme = useTheme();

  const {
    control,
    errors,
    isSubmitting,
    onSubmitLogin,
    handleSubmit,
  } = useLogin();
  
  return (
    <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          backgroundImage: `url(${images.backgroundLoginPage})`,
          backgroundPositionX: "right",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Container>
          <Stack
            spacing={4}
            alignItems="end"
            height="100vh"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              [theme.breakpoints.down("md")]: {
                justifyContent: "flex-start",
                flexDirection: "column",
                pt: "1rem",
              },
            }}
          >
            <Stack width="100vw" alignItems="center" p="1rem">
              <Stack
                component="form"
                spacing={4}
                p={4}
                boxShadow="2"
                maxWidth="26rem"
                width="100%"
                minHeight="32rem"
                borderRadius={8}
                bgcolor="white"
                onSubmit={handleSubmit(onSubmitLogin)}
                sx={{
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "26rem",
                  },
                  [theme.breakpoints.up("md")]: {
                    maxWidth: "26rem",
                  },
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  pt="2rem"
                  sx={{
                    [theme.breakpoints.down("lg")]: {
                      width: "14rem",
                    },
                    [theme.breakpoints.down("sm")]: {
                      width: "12rem",
                    },
                  }}
                >
                  <Person fontSize="large" />
                  <Typography
                    variant="h4"
                    fontSize={32}
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    Login
                  </Typography>
                </Box>
                <Stack spacing={4}>
                    
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            id="control"
                            label="E-Mail"
                            variant="outlined"
                            {...field}
                          />
                        )}
                      />

                      <Controller
                        name="senha"
                        control={control}
                        render={({ field }) => (
                          <TextFieldPassword
                            id="senha"
                            error={!!errors.senha}
                            helperText={errors.senha?.message}
                            variant="outlined"
                            {...field}
                          />
                        )}
                      />
                    
                  <Stack>
                    <Button
                      isLoading={isSubmitting}
                      sx={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        bgcolor: theme.palette.yellow.main,
                        color: theme.palette.primary.main,
                        ":hover": {
                          bgcolor: theme.palette.yellow[200],
                        },
                      }}
                      fullWidth
                      type="submit"
                      id="button-login"
                      size="large"
                    >
                        login
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
          
      </Box>
  );
}

export default Login;