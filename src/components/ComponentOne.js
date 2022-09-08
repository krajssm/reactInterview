import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // '& .MuiTextField-root': {
        margin: 'auto',
        width: '50%',
        border: '1px solid grey',
        padding: '10px'
    // },
  },

}));

const ComponentOne = (props) => {

    const navigate = useNavigate();
    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameHelperText, setNameHelperText] = React.useState('');

    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [emailHelperText, setEmailHelperText] = React.useState('');

    const [gender, setGender] = React.useState('male');
    const [genderError, setGenderError] = React.useState(false);
    const [genderHelperText, setGenderHelperText] = React.useState('');

    const [dob, setDob] = React.useState('');
    const [dobError, setDobError] = React.useState(false);
    const [dobHelperText, setDobHelperText] = React.useState('');

    const [phone, setPhone] = React.useState('');
    const [phoneError, setPhoneError] = React.useState(false);
    const [phoneHelperText, setPhoneHelperText] = React.useState('');

  
  /* const handleRadioChange = (event) => {
    setGender(event.target.value);
    setHelperText(' ');
    setError(false);
  }; */

  const handleNext = (event) => {
    event.preventDefault();
    let error = false;
    if(name == "") {
        error = true;
        setNameError(true);
        setNameHelperText("Please enter name")
    } else {
        setNameError(false);
        setNameHelperText("")
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailHelperText("");
        setEmailError(false);
      } else {
        setEmailHelperText("Invalid Email");
        setEmailError(true);
        error = true;
      }
      if (dob == '') {
        error = true;
        setDobHelperText('Please enter dob');
        setDobError(true);
    } else {
        setDobHelperText('');
        setDobError(false);
    }
    if (phone == '') {
        error = true;
        setPhoneHelperText('Please enter phone number');
        setPhoneError(true);
    } else {
        setPhoneHelperText('');
        setPhoneError(false);
    }

   
    if(!error) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender);
        localStorage.setItem("dob", dob);
        localStorage.setItem("phone", phone);
        navigate("next")
    }
  };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  return (
    <Grid container spacing={3} className={classes.root}>

        <FormControl component="fieldset">
            <FormLabel component="legend">User Details Page</FormLabel>
        <Grid container spacing={3}>
        
            <Grid item xs={12}>
                <TextField required id="fullName" label="Full Name"  error={nameError} value={name} onChange={(e)=>setName(e.target.value)} helperText={nameHelperText} />
            </Grid>

            <Grid item xs={12}>
                <TextField required id="email" value={email} label="Email" error={emailError} helperText={emailHelperText} onChange={(e)=>setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="legend">Gender</FormLabel>

                <RadioGroup aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="date"
                    label="DoB"
                    type="date"
                    onChange={(e)=>setDob(e.target.value)}
                    helperText={dobHelperText}
                    error={dobError}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField type="tel" required id="phone" label="Phone Number" inputProps={{maxLength: 10}} value={phone} onChange={(e)=>setPhone(e.target.value)} helperText={phoneHelperText} error={phoneError} />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="secondary">
                    Reset
                </Button>
            </Grid>

      </Grid>
    </FormControl>
    </Grid>
  );
        }
  export default ComponentOne;