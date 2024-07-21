import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  styled,
} from "@mui/material";

const UserList = ({ users, onSelectUser }) => {
  const StyledListItem = styled(ListItem)(({}) => ({
    "&:hover": {
      backgroundColor: "#E7F0DC",
      cursor: "pointer",
    },
  }));

  return (
    <List>
      {users.map((user) => (
        <StyledListItem
          key={crypto.randomUUID()}
          onClick={() => onSelectUser(user)}
          sx={{ borderBottom: "1px solid #E7F0DC", padding: "10px" }}
        >
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={`${user.profile.firstName} ${user.profile.lastName}`}
          />
        </StyledListItem>
      ))}
    </List>
  );
};

export default UserList;
