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
import moment from 'moment';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const [name, setName] = React.useState(localStorage.getItem('name'));

    const [email, setEmail] = React.useState(localStorage.getItem('email'));

    const [gender, setGender] = React.useState('male');

    const [dob, setDob] = React.useState(localStorage.getItem('dob'));

    const [phone, setPhone] = React.useState(localStorage.getItem('phone'));

    const [sundays, setSundays] = React.useState(0);

    const [openDialog, setOpenDialog] = React.useState(false);


    const [startDate, setStartDate] = React.useState('');
    const [startDateError, setStartDateError] = React.useState(false);
    const [startDateHelperText, setStartDateHelperText] = React.useState('');

    const [endDate, setEndDate] = React.useState('');
    const [endDateError, setEndDateError] = React.useState(false);
    const [endDateHelperText, setEndDateHelperText] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = false;
    
    if (startDate == '') {
        error = true;
        setStartDateHelperText('Please enter start date');
        setStartDateError(true);
    } else {
        setStartDateHelperText('');
        setStartDateError(false);
    }

    if (endDate == '') {
        error = true;
        setEndDateHelperText('Please end start date');
        setEndDateError(true);
    } else {
        setEndDateHelperText('');
        setEndDateError(false);
    }

    if(!error) {



        var start = moment(startDate);
        var end   = moment(endDate);
        var day   = 0;
    
        var result = [];
        var current = start.clone();
        
        while (current.day(7 + day).isBefore(end)) {
        result.push(current.clone());
        }
        
        setSundays(result.length);
        setOpenDialog(true)

    }
  };

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  return (
    <React.Fragment>
        <Grid container spacing={3} className={classes.root}>

            <FormControl component="fieldset">
                <FormLabel component="legend">Date Component</FormLabel>
                <Grid container spacing={3}>
                
                <Grid item xs={12}></Grid>
               
                    <Grid item xs={12}>
                        <TextField
                        id="startDate"
                        label="Start Date"
                        type="date"
                        onChange={(e)=>setStartDate(e.target.value)}
                        helperText={startDateHelperText}
                        error={startDateError}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="endDate"
                        label="End Date"
                        type="date"
                        onChange={(e)=>setEndDate(e.target.value)}
                        helperText={endDateHelperText}
                        error={endDateError}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                

            </Grid>
            </FormControl>
        </Grid>

        <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <Grid container>
                <Grid item xs={12}>
                    <Grid>Name: {(name!="")? name :"N/A" }</Grid>
                    <Grid>Email: {(email!="")? email :"N/A" }</Grid>
                    <Grid>Gender: {(gender!="")? gender :"N/A" }</Grid>
                    <Grid>Dob: {(dob!="")? dob :"N/A" }</Grid>
                    <Grid>Phone: {(phone!="")? phone :"N/A" }</Grid>
                    <Grid>Total Sunday(s): { sundays}</Grid>
        
                </Grid>
            </Grid>
            

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */}
          <Button onClick={(e)=>{setOpenDialog(false)}} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
        
    </React.Fragment>
  );
        }
  export default ComponentOne;