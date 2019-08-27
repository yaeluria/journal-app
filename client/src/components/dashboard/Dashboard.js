import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {useSelector, useDispatch} from 'react-redux';
import { logoutUser } from "../../actions/authActions";
import {getEntries, deleteEntry} from "../../actions/entryActions";
import EntryForm from "../EntryForm";





const useStyles = makeStyles(theme => ({
  
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 6, 2),
  },
  
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
 
  cardContent: {
    flexGrow: 1,
  },
  
}));


export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authorId = useSelector(state => state.auth.user.id);
  const entries = useSelector(state => state.entries.items);
  useEffect(() => {
      if(authorId){
        dispatch(getEntries(authorId));
      }
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[entries.length]);
  
  const onLogoutClick = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  // const [editMode, setEditMode] = useState(
  //   false
  // );
 
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
      
          <Button onClick={onLogoutClick} variant="outlined" color="inherit">
          logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Digital Journal
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Create A Note
            </Typography>
            
            <EntryForm /* editMode= {editMode} *//>
          </Container>
         

        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {entries.map((entry, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
             
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {entry.title}
                    </Typography>
                    <Typography>
                     {entry.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                { /*  <Button size="small" color="primary" onClick={() => setEditMode(true)}>
                       Edit
            </Button> */}
                    <Button 
                    onClick= {() => dispatch(deleteEntry(entry._id))}
                    size="small" 
                    color="primary">
                    Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}