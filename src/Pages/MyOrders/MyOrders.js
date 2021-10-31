import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null)
    const { user } = useAuth();
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders, isDeleted])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you the boss?")
        if (confirm) {
            fetch(`http://localhost:5000/deleteBooking/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsDeleted(true)
                    } else {
                        setIsDeleted(false)
                    }
                })
        }

    }

    return (
        <div className='container'>
            <CardGroup>
                {
                    orders.length === 0 ? <h1>You don't have any Order</h1>
                        :
                        orders.map(order =>
                            <Card key={order._id}>
                                <Card.Img variant="top" src={order.service.img} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <button onClick={() => handleDelete(order._id)}>Cancel Booking</button>
                                </Card.Footer>
                            </Card>
                        )
                }
            </CardGroup>
        </div>
    );
};

export default MyOrders;