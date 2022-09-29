// @packages
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React, { useContext, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { green, red } from '@mui/material/colors';

// @scripts
import UsersContext from '../../context/users/UsersContext';

const OnlineUsers = () => {
  const { users, onUpdateStatus } = useContext(UsersContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomUser = Object
        .keys(users)[Math.floor(Math.random() * Object.keys(users).length)];

      onUpdateStatus(randomUser, !users[randomUser]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [users]);

  return (
    <Container maxWidth="sm">
      <List>
        {Object.entries(users).map(([key, value]) => (
          <ListItem
            key={key}
            secondaryAction={(
              <Tooltip title={value ? 'Online' : 'Offline'}>
                <CircleIcon
                  fontSize="small"
                  sx={{ color: value ? green[800] : red[800] }}
                />
              </Tooltip>
            )}
          >
            <ListItemAvatar>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={key} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default OnlineUsers;
