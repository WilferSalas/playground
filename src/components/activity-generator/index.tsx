// @packages
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';
import axios from 'axios';

// @data
import initialActivity from '../../config/data/initial-activity.json';

interface IActivity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

const ActivityGenerator = () => {
  const [activities, setActivities] = useState<IActivity[]>([initialActivity]);
  const [isExpanded, setIsExpanded] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnFetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://www.boredapi.com/api/activity/');

      setActivities([...activities, response.data]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnExpand = (id: string) => {
    setIsExpanded([...isExpanded, id]);
  };

  const handleOnCollapse = (id: string) => {
    setIsExpanded(isExpanded.filter((item) => item !== id));
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <LoadingButton
        loading={isLoading}
        onClick={handleOnFetchData}
        sx={{ my: 4 }}
        variant="contained"
      >
        Generate Activity
      </LoadingButton>
      {activities.map((activity) => (
        <List key={activity.key}>
          <ListItem
            divider
            disableGutters
            secondaryAction={(isExpanded.includes(activity.key))
              ? <Button variant="outlined" onClick={() => handleOnCollapse(activity.key)}>Collapse</Button>
              : <Button variant="outlined" onClick={() => handleOnExpand(activity.key)}>Expand</Button>}
          >
            <ListItemText primary={activity.activity} />
          </ListItem>
          {(isExpanded.includes(activity.key)) && (
            <List>
              <ListItem divider>
                <ListItemText primary={`Type: ${activity.type}`} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary={`Price: ${activity.price}`} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary={`Participants: ${activity.participants}`} />
              </ListItem>
              <ListItem divider>
                <ListItemText primary={`Accessibility: ${activity.accessibility}`} />
              </ListItem>
            </List>
          )}
        </List>
      ))}
    </Container>
  );
};

export default ActivityGenerator;
