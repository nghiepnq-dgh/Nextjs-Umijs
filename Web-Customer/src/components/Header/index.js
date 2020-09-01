import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { MODULE_NAME as MODULE_LOGIN } from "../../modules/login/models";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import storeAccessible from "../../functions/storeAccessible";
import { Logout } from "../../modules/login/actions";
import { redirectTo } from "./../../functions/helpers";
import { getCookie } from "../../common/utils/cookies";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  text: {
    fontSize: "12px",
  },
}));

const MenuHeader = (props) => {
  const { customer } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleGotoDashboard = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    redirectTo("/dashboard");
    setOpen(false);
  };

  const handleLogout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    storeAccessible.dispatch(Logout());
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (customer && customer.accessToken && customer.accessToken.token) {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
      prevOpen.current = open;
    } else {
    }
  }, [open]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "10%" }}>
        <Link href="/">
          <a>
            <img height={50} width={100} src="/digitech-smart.png" />
          </a>
        </Link>
      </div>
      <div style={{ width: "100%" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            paddingLeft: 0,
          }}
        >
          <li style={{ listStyleType: "none", marginRight: 20 }}>
            <Link href="/">
              <a
                style={{
                  textDecoration: "none",
                  color: "#666",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Home
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ width: "35%", lineHeight: 3, textAlign: "center" }}>
        {getCookie("email") ? (
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <MenuList>
                {/* <MenuItem>Profile</MenuItem> */}
                {/* <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem> */}
              </MenuList>
            </Paper>
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <AccountCircleIcon /> {getCookie("email")}
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleGotoDashboard}>
                            Dashboard
                          </MenuItem>
                          {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Link href="/login">
              <a
                style={{
                  marginRight: "10px",
                  textDecoration: "none",
                  color: "#666",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {" "}
                Đăng nhập
              </a>
            </Link>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              // className={classes.margin}
            >
              <Link href="/register">
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D497C",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  Đăng kí
                </a>
              </Link>
            </Button>
          </>
        )}
        {/* <Link href="/login">
          <a
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "#666",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            {" "}
            Đăng nhập
          </a>
        </Link>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          // className={classes.margin}
        >
          <Link href="/register">
            <a
              style={{
                textDecoration: "none",
                color: "#0D497C",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {" "}
              Đăng kí
            </a>
          </Link>
        </Button> */}
      </div>
    </div>
  );
};
const mapsStateToProps = (state) => ({ [MODULE_LOGIN]: state[MODULE_LOGIN] });
export default connect(mapsStateToProps, null)(MenuHeader);
// export default ;
