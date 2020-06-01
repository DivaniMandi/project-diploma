import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';


import { sendEmail } from '../redux/actions/userActions';
import { connect } from 'react-redux';


const styles = {

}

class Contacts extends Component {

    constructor() {
        super()

        this.state = {

            name: '',
            email: '',
            message: '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
         const emailDetails={
            name:this.state.name,
            userEmail:this.state.email,
            message:this.state.message
        }

        this.props.sendEmail(emailDetails);
        
    }

    render() {

        //const { classes } = this.props;

        return (
            <MuiThemeProvider>
                <div className="container" style={{ textAlign: 'center' }}>
                    <header>
                        <h1>Contact us</h1>
                    </header>

                    <Form onSubmit={this.handleSubmit} style={{ width: '600px', paddingLeft: '50px', paddingTop: '50px' }}>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input type="text" name="name" id="name" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" name="email" id="email" placeholder="example@provider.com" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="message">Message:</Label>
                            <Input type="textarea" name="message" id="message" onChange={this.handleChange} />
                        </FormGroup>

                        <Button color="primary">Send</Button>
                    </Form>


                </div>
            </MuiThemeProvider>

        );
    }
}

Contacts.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    sendEmail: PropTypes.func.isRequired
};



const mapStateToProps = (state) => ({
    user: state.user,
});

const mapActionsToProps = { sendEmail };


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Contacts));