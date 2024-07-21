import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Container,
  Divider,
} from "@mui/material";

const UserDetails = ({ user }) => {
  return user ? (
    <Container>
      <Avatar
        alt={user.name}
        src={user.avatar}
        sx={{ width: 100, height: 100, margin: "auto", marginBottom: "20px" }}
      />
      <Typography variant="h5" textAlign="center">
        {user.profile.firstName} {user.profile.lastName}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {user.profile.username}
      </Typography>
      <Divider sx={{ margin: "10px 0" }} />
      <Typography variant="body1">
        <span style={{ fontWeight: "bold" }}>Email:</span> {user.profile.email}
      </Typography>
      <Typography variant="body1">
        <span style={{ fontWeight: "bold" }}>Job Title:</span> {user.jobTitle}
      </Typography>
      <Typography variant="body1">
        <span style={{ fontWeight: "bold" }}>Bio: </span> {user.Bio}
      </Typography>
    </Container>
  ) : (
    <Typography variant="h6" sx={{ textAlign: "center" }}>
      Select a user to see details
    </Typography>
  );
};

export default UserDetails;
