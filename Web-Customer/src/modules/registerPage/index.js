import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { fetchAuthReferral, getTokenClientAdmin } from "../../functions/effect";
import { configurations } from "../../../config";
import Alert from "@material-ui/lab/Alert";
import { toast } from "react-nextjs-toast";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();
  const [dataRegister, setDataRegister] = useState({
    name: "",
    inviterId: "",
    clientCustomerId: "v2ks",
    email: "",
    phone: "",
    active: true,
    createAccount: true,
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const dataClient = {
      userid: configurations.emailClient,
      password: configurations.pass,
      grantType: "client_account",
    };
    let token;
    const respontoken = await getTokenClientAdmin({
      url: `${configurations.urlApi}/v2/auth/token`,
      method: "POST",
      data: { ...dataClient },
    });
    if (respontoken && respontoken.success) {
      token = respontoken.accessToken;
    } else {
      toast.notify("Không tìm thấy Admin Client", {
        // position: top,
        duration: 5,
        type: "error",
      });
      // <div className={classes.root}>
      //   <Alert severity="error">Không tìm thấy Admin Client</Alert>
      // </div>;
      return;
    }
    const result = await fetchAuthReferral({
      url: `${configurations.urlApi}/v2/customer`,
      method: "POST",
      data: {
        ...dataRegister,
      },
      token: token,
    });
    if (result && result.success) {
      toast.notify("Tạo thành công", {
        // position: top,
        duration: 5,
        type: "success",
      });
      setTimeout(function() {
        router.push("/login");
      }, 2000);

      // <div className={classes.root}>
      //   <Alert severity="success">Đăng kí thành công</Alert>
      // </div>;
    } else {
      const { message, error } = result;
      toast.notify(`${message}`, {
        // position: top,
        duration: 5,
        type: "error",
      });
      // <div className={classes.root}>
      //   <Alert severity="error">{message}</Alert>
      // </div>;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleOnSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                //                 // autoComplete="fname"system
                onChange={handleOnChange}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                onChange={handleOnChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                onChange={handleOnChange}
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleOnChange}
                variant="outlined"
                fullWidth
                id="inviterCode"
                label="Inviter Code"
                name="inviterCode"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleOnChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
