import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LatestOrders.css';

const OrderListPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://brandpull-1.onrender.com/api/billing');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="order-list-page">
            <h2>Order List</h2>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Payment Method</th>
                        <th>Transaction ID</th>
                        <th>Payment Status</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.firstName}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.streetAddress}</td>
                            <td>{order.townCity}</td>
                            <td>{order.state}</td>
                            <td>{order.pinCode}</td>
                            <td>{order.paymentMethod}</td>
                            <td>{order.transactionId || 'N/A'}</td>
                            <td>{order.paymentStatus}</td>
                            <td>₹{order.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderListPage;
