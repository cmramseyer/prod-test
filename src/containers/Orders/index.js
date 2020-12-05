import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import CustomTable from '../../components/UI/CustomTable';
import Spinner from '../../components/UI/Spinner';
import CustomModal from '../../components/UI/CustomModal';
import Aux from '../../hoc/Aux';
import Order from '../../components/Order';
import AlertModal from '../../components/UI/AlertModal';

import axios from '../../axios';


class Orders extends Component {

    state = {
        orders: null,
        selectedOrder: null,
        loading: false,
        showModal: false
    }

    
    handleCancel = () => {
        this.setState({showModal: false})
    }

    handleSelectedOrder = (orderId) => {
        const order = this.state.orders.find(or => or.id === orderId)
        this.setState({selectedOrder: order, showModal: true})
    }
    


    componentDidMount = () => {
        console.log('componentDidMount')
        axios.get("/orders.json")
        .then(res => {
            this.setState({orders: res.data})
        })
        .catch(error => console.log(error))
    }

    render () {

        let modal = null;
        if (this.state.selectedOrder) {
            modal = <AlertModal show={this.state.showModal}
                        title="Order"
                        handleCancel={this.handleCancel}
                        okLabel="OK">
                            <Order 
                                order={this.state.selectedOrder}
                                showFullDetails></Order>
                    </AlertModal>
        }

        
        

        let body = <h2>Empty</h2>
        if (this.state.orders) {

            const orders = this.state.orders.map(order => {
                return <Order 
                    handleSelectedOrder={this.handleSelectedOrder}
                    order={order}
                    colsm3>

                    </Order>
            })


            body = <div className="container">
                        <div className="row">
                           {orders}    
                        </div>
                    </div>

        }

        console.log(this.props.isAuthenticated)

        return (
            <div className="App-cart">
                {this.props.isAuthenticated ? null : <Redirect to="/login"/>}
                {modal}
                {body}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        userId: state.auth.userId
    };
}
  


export default connect(mapStateToProps, null)(Orders);
