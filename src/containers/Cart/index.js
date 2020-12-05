import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import withErrorHandler from '../../hoc/withErrorHandler';

import Product from '../../components/Product';
import CustomTable from '../../components/UI/CustomTable';
import Input from '../../components/UI/CustomInput';
import Button from 'react-bootstrap/Button';
import Spinner from '../../components/UI/Spinner';
import AlertModal from '../../components/UI/AlertModal';
import Aux from '../../hoc/Aux';

import axios from '../../axios';


class Cart extends Component {

    state = {
        transactionId: null,
        loading: false,
        showModal: false,
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            credit_card_number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your credit card number'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            credit_card_code: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your credit card code'
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
        
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        console.log('updatedFormElement')
        console.log(updatedFormElement)

        this.setState({orderForm: updatedOrderForm});

    }

    checkValidity(value, rules) {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log('orderHandler')
        console.log(this.props.ingredients)

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }


        const order = {
            orderData: formData,
            userId: this.props.userId,
            products: this.props.prdsCart.map(prd => prd.id)
        }

        

        axios.post("/orders.json", order)
            .then(response => {
                console.log(response)
                const transactionId = response.data.transaction_id
                this.setState({showModal: true, transactionId: transactionId})

            })
            .catch(error => {
                console.log(error);
            });
    }

    handleCancel = () => {
        this.setState({showModal: false})
    }
    


    componentDidMount = () => {
        // const productsGrouped = this.props.prdsCart.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
        // console.log('productsGrouped')
        // console.log(productsGrouped)
        // this.setState({productsInCart: productsGrouped})
    }

    render () {

        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        let form = (
            <form onSumbit={this.orderHandler}>
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
                <Button btnType="Success" onClick={this.orderHandler}>Order</Button>
            </form>
        );


        let modal = null;
        if (this.state.transactionId) {
            modal = <AlertModal show={this.state.showModal}
                        title="Payment info"
                        handleCancel={this.handleCancel}
                        okLabel="OK">
                            Payment successful! Transaction id: {this.state.transactionId}

                    </AlertModal>
        }

        let body = <h2>Your cart is empty!</h2>
        if (this.props.prdsCart.length > 0) {
            return <Aux>
                <h2>Your cart!</h2>
                {modal}
                <CustomTable 
                    records={this.props.prdsCart}
                    attributes={['name', 'price']}>

                </CustomTable>
                {form}
            </Aux>
        }
        

        return (
            <div className="App-cart">
                {this.props.isAuthenticated ? null : <Redirect to={"/login"}/>}
                {body}
            </div>
        );
    }

}
  
const mapStateToProps = state => {
    return {
        prdsCart: state.productsCart,
        userId: state.userId,
        isAuthenticated: state.isAuthenticated
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
      emptyCart: () => dispatch({type: 'EMPTY_CART'})
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
