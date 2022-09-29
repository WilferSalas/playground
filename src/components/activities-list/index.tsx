// @packages
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Typography from '@mui/material/Typography';
import UnpublishedIcon from '@mui/icons-material/Unpublished';

// @scripts
import AcitivitiesListData from '../../config/data/activities-list.json';

const ActivitiesList = () => {
  const [activitiesData, setActivitiesData] = useState(AcitivitiesListData);

  const handleOnCompleteTask = (task, subtask) => {
    setActivitiesData({
      ...activitiesData,
      [task]: activitiesData[task].map((item) => {
        if (Object.keys(item)[0] === subtask) {
          return { [subtask]: !item[subtask] };
        }
        return item;
      }),
    });
  };

  return (
    <Container maxWidth="md">
      {Object.entries(activitiesData).map(([key, value]) => (
        <List key={`task ${key}`}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            {key}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h6">
                Not yet completed
              </Typography>
              <List>
                {value.map((activity) => (
                  Object.values(activity).includes(false) && (
                    <ListItem
                      key={Object.keys(activity)[0]}
                      secondaryAction={(
                        <IconButton
                          onClick={() => handleOnCompleteTask(key, Object.keys(activity)[0])}
                        >
                          <TaskAltIcon />
                        </IconButton>
                      )}
                    >
                      <ListItemText primary={Object.keys(activity)} />
                    </ListItem>
                  )
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h6">
                Completed
              </Typography>
              <List>
                {value.map((activity) => (
                  Object.values(activity).includes(true) && (
                    <ListItem
                      key={Object.keys(activity)[0]}
                      secondaryAction={(
                        <IconButton
                          onClick={() => handleOnCompleteTask(key, Object.keys(activity)[0])}
                        >
                          <UnpublishedIcon />
                        </IconButton>
                      )}
                    >
                      <ListItemText primary={Object.keys(activity)} />
                    </ListItem>
                  )
                ))}
              </List>
            </Grid>
          </Grid>
        </List>
      ))}
    </Container>
  );
};

export default ActivitiesList;
