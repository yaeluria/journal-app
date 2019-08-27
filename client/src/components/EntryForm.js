
import React, {useEffect} from "react";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import { saveEntry, editEntry } from "../actions/entryActions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import { set } from "mongoose";

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
  // const editMode = () => {
  //   if(props.editMode === "false"){
  //     return "editmode is false"
  //   }
  // } 
  // useEffect(() => {
  //   dispatch(saveEntry());
  // }, []);

  const [values, setValues] = React.useState({
    // if (editMode){
    //   title: "edit mode",
    //   content: "",
    // }
    // else{
      title: "",
      content: "",
       errors: {},
    // }
    
   
  });
 
  const disabled = values.title.length <= 0 || values.content.length <= 0;
  //const errorText = (values.title.length <= 0 || values.content.length <= 0) ? "Please fill "
 
  const entryArray = useSelector(state => state.entries);
  let authorId = useSelector(state => state.auth.user.id);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  

  // const clearState= () =>{
  //   setValues(
  //     {
  //       title: "",
  //       content: ""
  //     }
  //   )
  // }

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
      // .then(clearState())
    
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
       // helperText={errorText}
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
        //helperText={errorText}
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