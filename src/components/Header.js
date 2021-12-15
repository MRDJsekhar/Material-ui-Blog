import React from "react";
import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Menu, Notifications } from "@material-ui/icons";
import TemporaryDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <TemporaryDrawer>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
        </TemporaryDrawer>

        <Typography variant="h6" className={classes.title}>
          Blogging Website
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
