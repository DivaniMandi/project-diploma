import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link } from "react-router-dom";
//import fire from './Fire';
//import * as firebase from 'firebase';



//REDUX components
import { connect } from 'react-redux';
import { loginUser, signInGoogle } from '../redux/actions/userActions';

const styles = {
    form: {
        textAlign: 'center'
    },
    button: {
        margin: 15,
        width: 240,
        position:'relative'
    },
    spinner:{
        position:'absolute',
        marginLeft:'30px'

    }
};

class Login1 extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signInWithGoogle = this.signInWithGoogle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            value: 0,
            errors: {},

        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData, this.props.history);
    };

    signInWithGoogle(e){
        e.preventDefault();
        this.props.signInGoogle(this.props.history);

    } 

    render() {
        const { classes, UI: { loading } } = this.props;
        return (
            <MuiThemeProvider>
                <Grid container className={classes.form}>
                    <Grid item sm />
                    <Grid item sm>
                        <div className="form-group">
                            <TextField
                                type="email"
                                hintText="Enter your Email"
                                floatingLabelText="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div style={{ color: 'red', fontSize: '0.8rem' }}>{this.state.errors.email}</div>
                        </div>
                        <div className="form-group">
                            <TextField
                                type="password"
                                hintText="Enter your password"
                                floatingLabelText="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                                id="InputPassword1"
                            />
                            <div style={{ color: 'red', fontSize: '0.8rem' }}>{this.state.errors.password}</div>
                            <div style={{ color: 'red', fontSize: '0.8rem' }}>{this.state.errors.general}</div>
                        </div>

                        <RaisedButton className={classes.button} label="Sign In" type="submit" primary={true} onClick={this.login} disabled={loading}>
                        {loading && (
                            <CircularProgress className={classes.spinner} size={40} />
                        )}
                        </RaisedButton>
                        <RaisedButton className={classes.button} label="Sign In with Google" type="submit" primary={false} backgroundColor="#dd4b39" onClick={this.signInWithGoogle} />
                        <RaisedButton className={classes.button} label="Sign In with Facebook" type="submit" primary={false} backgroundColor="#3b5998" />
                        <br/><small>Don't have an account yet?<Link to="/signup"> Register now</Link></small>
                    </Grid>
                    <Grid item sm />
                </Grid>
            </MuiThemeProvider>
        );
    }
}

Login1.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    signInGoogle: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });
  
  const mapActionsToProps = {
    loginUser,
    signInGoogle
  };


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login1));