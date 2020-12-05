import React, { Component } from 'react';
import { connect } from 'react-redux'


import Input from '../CustomInput';
import Button from 'react-bootstrap/Button';
import Aux from '../hoc/Aux';

import axios from '../axios';


class Login extends Component {

    state = {
        loading: false,
        showModal: false,
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        console.log(event.target.value);
        
        const updatedLoginForm = {
            ...this.state.loginForm
        }

        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;

        updatedLoginForm[inputIdentifier] = updatedFormElement;

        this.setState({loginForm: updatedLoginForm});

    }

    checkValidity(value, rules) {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    loginHandler = (event) => {
        event.preventDefault();
        console.log('loginHandler')

        const formData = {};

        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }


        

        axios.post("/login.json", formData)
            .then(response => {
                console.log(response)
                const userData = response.data;
                console.log('token!!')
                console.log(userData)

                localStorage.setItem('token', `Bearer ${userData.auth_token}`);

                this.props.login(userData)

                this.props.history.push("/")

            })
            .catch(error => {
                console.log(error);
            });
    }

    
    render () {

        const formElementsArray = [];

        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }


        let form = (
            <form onSumbit={this.loginHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        invalid={!formElement.config.valid}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}>

                    </Input>
                ))}
                <Button btnType="Success" onClick={this.loginHandler}>Sign in</Button>
            </form>
        );


        
        let body = <h2>Your cart is empty!</h2>
        if (!this.state.token) {
            return <Aux>
                <h2>Login</h2>
                {form}
            </Aux>
        }
        

        return (
            <div className="App-cart">
                {body}
            </div>
        );
    }

}
  

const mapStateToProps = state => {
    return {
        userToken: state.token
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
      login: (userData) => dispatch({type: 'SET_AUTH_TOKEN', payload: {userData: userData}})
    };
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Login);
