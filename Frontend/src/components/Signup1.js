import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link } from "react-router-dom";



//REDUX components
import { connect } from 'react-redux';
import { signupUser, signUpGoogle } from '../redux/actions/userActions';

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

class Signup1 extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.signUpWithGoogle = this.signUpWithGoogle.bind(this);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}

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

    signup(e) {
        e.preventDefault();
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.signupUser(newUserData, this.props.history)
    };

    signUpWithGoogle(e){
        e.preventDefault();
        this.props.signUpGoogle(this.props.history)

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
                            <div style={{paddingTop:'10px', color: 'red', fontSize: '0.8rem' }}>{this.state.errors.email}</div>
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
                        <div className="form-group">
                        <TextField
                            type="password"
                            hintText="Confirm your password"
                            floatingLabelText="Confirm Password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            name="confirmPassword"
                            id="ConfirmPassword"
                        />
                        <div style={{ color: 'red', fontSize: '0.8rem' }}>{this.state.errors.confirmPassword}</div>
                        <div style={{ color: 'red', fontSize: '0.8rem' }}>{this.state.errors.general}</div>
                    </div>

                        <RaisedButton className={classes.button} label="Sign up" type="submit" primary={true} onClick={this.signup} disabled={loading}>
                        {loading && (
                            <CircularProgress className={classes.spinner} size={40} />
                        )}
                        </RaisedButton>
                        <RaisedButton className={classes.button} label="Sign up with Google" type="submit" primary={false} onClick={this.signUpWithGoogle} backgroundColor="#dd4b39" />
                        <RaisedButton className={classes.button} label="Sign up with Facebook" type="submit" primary={false} backgroundColor="#3b5998" />
                        <br/><small>Already have an account?<Link to="/login"> Sign in</Link></small>
                    </Grid>
                    <Grid item sm />
                </Grid>
            </MuiThemeProvider>
        );
    }
}

Signup1.propTypes = {
    classes: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired,
    signUpGoogle:PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });

  const mapActionsToProps = {
    signupUser,
    signUpGoogle
  };
  
  
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Signup1));