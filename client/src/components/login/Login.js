import { Box, CardContent, Card, Container, Button, Grid, Typography, TextField, Divider } from '@material-ui/core/';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

import { signupUser } from '../../actions/signupUser';
import { loginUser } from '../../actions/loginUser';

const userloginDataDefault = {
    email: '',
    password: '',
}

const userSignupDataDefault = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepat: ''
}

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cookies = new Cookies();

    const [formType, setformType] = useState(false);
    const [inProgress, setInProgress] = useState(false);
    const [userLoginData, setUserLoginData] = useState(userloginDataDefault);
    const [userSignupData, setUserSignupData] = useState(userSignupDataDefault);
    let changeFormBtn;

    if (formType === false) { // False = login
        changeFormBtn = <Button onClick={ () => setformType(true) } fullWidth>Opret bruger</Button>;
    } else {
        changeFormBtn = <Button onClick={ () => setformType(false) } fullWidth>Login</Button>;
    }

    const handleChange = (e) => {
        if (e.target.name === 'email' || e.target.name === 'password') {
            setUserSignupData({ ...userSignupData, [e.target.name]: e.target.value });
        }

        if (formType === false) {
            setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
        } else {
            if (e.target.name === 'balance') {
                let balance = e.target.value;
                balance = balance.replace('.', '');
                balance = balance.replace(',', '.');
                console.log(balance);
                setUserSignupData({ ...userSignupData, [e.target.name]: Number(balance) });
            } else {
                setUserSignupData({ ...userSignupData, [e.target.name]: e.target.value });
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (formType === false) {
            setInProgress(true);
            dispatch(loginUser(userLoginData));
        } else {
            setInProgress(true);
            dispatch(signupUser(userSignupData));
        }

        if (cookies.get('userLoggedIn') !== undefined) {
            history.push('/myFridge');
            setInProgress(false);
        }
    };

    return (
        <Box>
            <Grid container alignItems="center" justify="center" spacing={0} style={{ minHeight: '86vh' }}>
                <Container maxWidth="xs">
                    <Grid item xs={true}>
                        <Card variant="outlined">
                        <Box hidden={ !inProgress }>
                            <LinearProgress />
                        </Box>
                            <CardContent>
                                <Typography style={{ fontSize: '30px', textAlign: 'center', fontWeight: 500 }} gutterBottom>
                                    { formType ? 'Opret profil' : 'Log ind' }
                                </Typography>
                                <Divider />
                                <br />
                                <form onSubmit={ onSubmit }>
                                    <Box hidden={ !formType }>
                                        <TextField type="text" onChange={ handleChange } name="firstName" label="Fornavn *" variant="outlined" fullWidth />
                                        <br /><br />
                                        <TextField type="text" onChange={ handleChange } name="lastName" label="Efternavn *" variant="outlined" fullWidth />
                                        <br /><br />
                                    </Box>
                                    <TextField type="email" onChange={ handleChange } autoFocus name="email" label="E-mail *" variant="outlined" fullWidth />
                                    <br /><br />
                                    <TextField type="password" onChange={ handleChange } name="password" label="Adgangskode *" variant="outlined" fullWidth />
                                    <br /><br />
                                    <Box hidden={ !formType }>
                                        <TextField type="password" onChange={ handleChange } name="passwordRepat" label="Gentag adgangskode *" variant="outlined" fullWidth />
                                    </Box>
                                    <br />
                                    <Button type="submit" size="large" fullWidth variant="contained" color="primary">
                                        { formType ? 'Opret profil' : 'Log ind' }
                                    </Button>
                                </form>
                                <br />
                                <Box style={{ textAlign: 'center' }}>
                                    { changeFormBtn }
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </Grid>
        </Box>
    );
}

export default Login;