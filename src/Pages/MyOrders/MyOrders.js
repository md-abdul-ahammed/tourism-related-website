import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null)
    const { user } = useAuth();
    const email = user.email;
    useEffect(() => {
        fetch(`https://dark-phantom-03023.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, email])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you Sure For Delete?")
        if (confirm) {
            fetch(`https://dark-phantom-03023.herokuapp.com/deleteBooking/${id}`, {
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
        <div className='container my-5 py-5 d-flex justify-content-center align-items-center'>
            {
                orders.length === 0 ? "You Don't Have Ordered Any Product" :
                    <table className="table">
                        <thead>
                            <tr className='text-white'>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Remove Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr key={order._id}>
                                        <th scope="row">
                                            <img
                                                width='120px'
                                                height='50px'
                                                src={order.service.img}
                                                alt="" />
                                        </th>
                                        <td className='primary-c-color fs-2'>${order.service.name}</td>
                                        <td className='primary-c-color fs-2'>${order.service.price}</td>
                                        <td className='px-0'><button onClick={() => handleDelete(order._id)} className='button-design fs-6'>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default MyOrders;