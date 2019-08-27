import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";
import { saveEntry, editEntry } from "../actions/entryActions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
 
}));

function EntryForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();


  const state = { title: "",
            content: "",
            errors: {},
        };
  

  const [values, setValues] = React.useState(state);
 
  const disabled = values.title.length <= 0 || values.content.length <= 0;
  
  const errorTextTitle =  (values.title.length <= 0) ? "Please fill in the title field" : "";
  const errorTextContent =  (values.content.length <= 0) ? "Please fill in the content field" : "";
 
  let authorId = useSelector(state => state.auth.user.id);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  


  return (
 
    <form
    onSubmit={e => {
      e.preventDefault()
      const newEntry = {
        title: values.title,
        content: values.content,
        author: authorId
      }
      dispatch(saveEntry(newEntry,props.history))
     
    
    }}
     className={classes.container} noValidate autoComplete="off">
     <h2>{props.editMode}</h2>
      <TextField
        id="title"
        label="Title"
        className={classes.textField}
        required
        // value= ""
        onChange={handleChange("title")}
        margin="normal"
        variant="outlined"
        helperText={errorTextTitle}
      />
      <TextField
        id="filled-multiline-static"
        label="Content"
        multiline
        rows="4"
        required
        onChange={handleChange("content")}
        className={classes.textField}
        margin="normal"
        variant="filled"
        helperText={errorTextContent}
      />
      <Button variant="outlined"
       color="inherit"
        type= "submit"
        disabled= {disabled}>
        Submit
      </Button>
    </form>
  );
}
export default withRouter(EntryForm);