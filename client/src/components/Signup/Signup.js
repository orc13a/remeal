import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Container, Button, Grid, Typography, TextField } from '@material-ui/core/';
import { Link } from 'react-router-dom';

import { createUser } from '../../actions/users';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: 500,
        marginBottom: 25,
        textAlign: 'center'
    }
});

function Signup() {
    const classes = useStyles();

    //const [userCreated, setUserCreated] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    //const res = useSelector((state) => state.users);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(userData));
       // setUserCreated(true);
    }

    // if(userCreated){
    //     return <Redirect to="/login" />
    // }

    return (
        <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Container maxWidth="xs">
                <Grid item xl={true}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography className={ classes.title }>
                                Opret bruger
                            </Typography>
                            <form onSubmit={ handleSubmit }>
                                <TextField onChange={ (e) => setUserData({ ...userData, firstName: e.target.value }) } value={ userData.firstName } name="signupFirstName" required type="text" fullWidth autoFocus id="outlined-basic-firstname" label="Fornavn" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField onChange={ (e) => setUserData({ ...userData, lastName: e.target.value }) } value={ userData.lastName } name="signupLastName" required type="text" fullWidth id="outlined-basic-lastname" label="Efternavn" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField onChange={ (e) => setUserData({ ...userData, email: e.target.value }) } value={ userData.email } name="signupEmail" required type="email" fullWidth id="outlined-basic-email" label="E-mail" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField onChange={ (e) => setUserData({ ...userData, password: e.target.value }) } value={ userData.password } name="signupPassword" required type="password" fullWidth id="outlined-basic-password" label="Adgangskode" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField name="signupPasswordRepeat" required type="password" fullWidth id="outlined-basic-password-repeat" label="Gentag adgangskode" color="secondary" variant="outlined" />
                                <br/><br/>
                                <Button type="submit" size="large" fullWidth variant="contained" color="primary">Opret</Button>
                                <br/><br/>
                                <Link to="/login">
                                    <Button color="secondary" ize="large" fullWidth>Log ind</Button>
                                </Link>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Signup;