import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';
import {any} from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10)
        }

    }),
);

export default function Login() {
    let isLogged = true;
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password]);

    const handleLogin = async () => {
            let response = await axios.post(
                "https://reqres.in/api/login",
                {email: username, password: password},
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.status === 200) {
                isLogged = true;
                setHelperText('correct username or password')

            } else {
                setHelperText('Incorrect username or password')
            }
        };

    const handleKeyPress = (e:any) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };
    if (!isLogged) {
    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="Login App" />
                    <CardContent>
                        <div>
                            <TextField
                                error={error}
                                fullWidth
                                id="username"
                                type="email"
                                label="Username"
                                placeholder="Username"
                                margin="normal"
                                onChange={(e)=>setUsername(e.target.value)}
                                onKeyPress={(e)=>handleKeyPress(e)}
                            />
                            <TextField
                                error={error}
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                                helperText={helperText}
                                onChange={(e)=>setPassword(e.target.value)}
                                onKeyPress={(e)=>handleKeyPress(e)}
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.loginBtn}
                            onClick={()=>handleLogin()}
                            disabled={isButtonDisabled}>
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </React.Fragment>
    );
    }
    else{
            return (
                <div>
                    <h2>your already logged</h2>
                </div>
            );
        }

}


