import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import MyProps from "../src/types/MyProps";
import MyState from "../src/types/MyState";

class MyBreadcrumb extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            {this.props.message}
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
    );
  }
}
export default MyBreadcrumb;