"use client";

import React, { useState, useEffect } from "react";
import { Drawer, Grid, IconButton, Typography } from "@mui/material";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import Loader from "../components/Loader";
import { IoMdClose } from "react-icons/io";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setUsers([]);
        setLoading(false);
      });
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    if (isMobile) setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (error || users.length === 0) {
    return (
      <Typography variant="h6" sx={{ marginTop: "100px", textAlign: "center" }}>
        No data to show
      </Typography>
    );
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <UserList users={users} onSelectUser={handleUserSelect} />
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          backgroundColor: "#E7F0DC",
          padding: "10px",
          position: "sticky",
          top: "0",
          maxHeight: "100vh",
        }}
        display={{ xs: "none", sm: "block" }}
      >
        <UserDetails user={selectedUser} />
      </Grid>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div
          style={{
            width: "400",
            height: "100vh",
            padding: 5,
            backgroundColor: "#E7F0DC",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <IoMdClose />
          </IconButton>
          <UserDetails user={selectedUser} />
        </div>
      </Drawer>
    </Grid>
  );
};

export default HomePage;
