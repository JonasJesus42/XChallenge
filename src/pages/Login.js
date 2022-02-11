/* nunca utilizei Matirial UI   */

import React from "react";
import "./login.css"
import logo from './logo_xtrategie.png'

import { Button, Grid, Paper, TextField, Typography, CardMedia, IconButton } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from '@material-ui/icons/Visibility';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function Login() {
    const [values, setValues] = React.useState({
        password: '',
        email: '',
        emailEmpyt: false,
        showPassword: false,
        passwordEmpyt: false,
    });

    function submit() {
         if(values.password ==="" && values.email ===""){
             passwordEmpyt()
            }else{
             passwordEmpyt()
                console.log("senha: "+values.password+'\n', "email: "+values.email)
            }
    }

    function emailEmpyt() {
        if (values.email === '') {
           setValues({ ...values, emailEmpyt: true })
        } else {
            setValues({ ...values, emailEmpyt: false })
        }
    }

    function passwordEmpyt() {
        if (values.password === '') {
            setValues({ ...values, passwordEmpyt: true })
        } else {
            setValues({ ...values, passwordEmpyt: false })
        }

    }
    
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const matches = useMediaQuery('(min-width:800px)');
    const matchesSecond = useMediaQuery('(min-width:500px)');

    const gridStyle = {
        backgroundColor: '#A3BAD9',
        height: '100vh',
        width: '100vw',
    }


    const paperStyle = {
        height: '60vh',
        width: `${matchesSecond? '60vw': '100%'}`,
        margin: `${matchesSecond? 'auto': 'none'}`,
        display: 'flex',
    }

    const btnStyle = {
        width: '60%',
        margin: '40px 0 0 0 ',
        backgroundColor: 'transparent',
        color: '#63BFAE',
        border: '2px solid #63BFAE'
    }

    const textField = {
        height: '3rem',
        width: '90%',
        margin: 10,

    }

    const titleStyle = {
        color: '#585859',
        fontFamily: 'ROBOTO',
        margin: '0 0 30px',
        fontWeight: 500
    }

    const imgStyle = {
        width: '90%'

    }

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            backgroundColor='#A3BAD9'
            style={gridStyle}
        >
            <Paper elevation={10} style={paperStyle}>
                {matches? <Grid container ><CardMedia component="img" src={logo} style={imgStyle} /></Grid>: null}
                {matches? <hr color='#A3BAD9' />: null}
                <Grid direction="column" alignItems="center" justifyContent="center" container>
                    <Typography variant="h5" component="h3" color="#585859" style={titleStyle}>
                        Faça seu Login
                    </Typography>

                    <TextField variant="filled" style={textField} error={values.emailEmpyt} label='E-mail'
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                submit()
                            }
                        }}

                        onChange={(event) => {
                            const valor = event.target.value
                            setValues({ ...values, email: valor })
                        }} />

                    <TextField variant="filled" style={textField} error={values.passwordEmpyt} label='Senha' type={values.showPassword ? 'text' : 'password'}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                submit()
                            }
                        }}

                        onChange={(event) => {
                            const valor = event.target.value
                            setValues({ ...values, password: valor })
                        }}
                        required InputProps={{
                            endAdornment: (
                                <InputAdornment >
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}>
                                        <VisibilityIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }} />
                    <Button type='submit' size="large" style={btnStyle} onClick={submit} onMouseDown={emailEmpyt} onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            submit()
                        }
                    }} >Entre</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

