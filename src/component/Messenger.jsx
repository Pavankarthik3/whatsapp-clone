import LoginDialog from "./account/LoginDilog";

import React from "react";

import { AppBar, Toolbar } from "@mui/material";

import styled from "@emotion/styled";

import styled from "@emotion/styled";

const Header =styled(AppBar)`

 height: 125px;

 background-color: #00bfa5;

`;

const Messenger = () => {

return (

<React.Fragment>

<Header>

<Toolbar></Toolbar>

</Header>

<LoginDialog />

</React.Fragment>

 );

};

export default Messenger;




