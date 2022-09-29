import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export interface Data {
  id: string,
  title: string,
}

interface ListItemsProps {
  data: Data[],
}

const ListItems = ({ data }: ListItemsProps) => (
  <List>
    {data.map((todo) => (
      <ListItem button key={todo.id}>
        <ListItemText primary={todo.title} />
      </ListItem>
    ))}
  </List>
);

export default ListItems;
