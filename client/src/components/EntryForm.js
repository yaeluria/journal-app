
import React, {useEffect} from "react";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import { saveEntry } from "../actions/entryActions";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import { SAVE_ENTRY } from "../actions/types";

const useStyles = makeStyles(theme => ({
  container: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    //justifyContent: "flex-end",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

function EntryForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(saveEntry());
  // }, []);
  const [values, setValues] = React.useState({
    title: "",
    content: "",
    errors: {},
   
  });
  const disabled = values.title.length <= 0 || values.content.length <= 0;
  //const errorText = (values.title.length <= 0 || values.content.length <= 0) ? "Please fill "

  const entryArray = useSelector(state => state.entries);
  //const name = useSelector(state => state.auth.user.name);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  // const onSubmit = e => {
  //   e.preventDefault();
  //   const newEntry = {
  //     title: values.title,
  //     content: values.content
  //   };
   
  //   console.log(newEntry);
  //   dispatch({type: SAVE_ENTRY, payload: newEntry});
  //   console.log(entryArray);
  //   props.history.push('/dashboard');
  // };

  return (
  //   onSubmit = e => {
  //     e.preventDefault();
  // const newUser = {
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password,
  //       password2: this.state.password2
  //     };
  // this.props.registerUser(newUser, this.props.history); 
  //   };
    <form
    onSubmit={e => {
      e.preventDefault()
      const newEntry = {
        title: values.title,
        content: values.content
      };
      dispatch(saveEntry(newEntry,props.history))
     // props.history.push('/dashboard');
    }}
     className={classes.container} noValidate autoComplete="off">
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