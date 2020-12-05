import React, { Component } from 'react';

import CustomModal from '../CustomModal'
import Aux from './Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null,
            errorMessage: ''
        }

        componentWillMount () {

            this.reqInterceptor = axios.interceptors.request.use(req => {
                console.log('axios request withErrorHandler')
                console.log(req)

                const token = localStorage.getItem('token');
                req.headers.Authorization =  token;

                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log('axios response withErrorHandler')
                console.log("")
                console.log('axios error withErrorHandler')
                console.log(error)

                const errMessage = error.response.data.message;

                this.setState({error: error, errorMessage: errMessage})
            });
        }

        componentWillUnmount () {
            console.log('will unmount!!!!!!!!!!', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({error: false})
        }

        
        render () {
            console.log('this.state.error')
            console.log(this.state.error)

            const fullError = `${this.state.error}. Details: ${this.state.errorMessage}`
            return (
                <Aux>
                    <CustomModal 
                        show={this.state.error}
                        handleCancel={this.errorConfirmHandler}
                        handleOk={this.errorConfirmHandler}
                        cancelLabel="Close"
                        okLabel="Ok">
                        {this.state.error ? fullError : null}
                    </CustomModal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Aux>
            )
            
        }
    }
    
}


export default withErrorHandler;