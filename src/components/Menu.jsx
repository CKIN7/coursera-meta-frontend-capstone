import Swal from 'sweetalert2';
import plates from '../plates';
import { createRef } from 'react';
export const Menu = () => {
    const targetSectionRef = createRef();

    const handleScrollDown = () => {
        targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleOrder = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Place Order?',
            text: 'Please confirm your order details.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, order it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Order Successful!',
                    text: 'Your order has been placed successfully.',
                    icon: 'success',
                });
            }
        });
    };
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Specials of the Week</h2>{' '}
                <button onClick={handleScrollDown}>Scroll Down</button>
            </div>

            <div
                className="cards"
                ref={targetSectionRef}>
                {plates.map((plate) => (
                    <div
                        key={plate.id}
                        className="menu-items">
                        <img src={plate.image} />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{plate.title}</h5>
                                <p>{plate.price}</p>
                            </div>
                        </div>
                        <p>{plate.description}</p>
                        <button
                            className="orderBtn"
                            onClick={() => handleOrder(plate.id)}>
                            Order Now!
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
