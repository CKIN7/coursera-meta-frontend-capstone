import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ConfirmedBooking = () => {
    const navigate = useNavigate();

    Swal.fire({
        title: 'Booking Successful!',
        text: 'Your order has been received successfully.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
    }).then(() => {
        navigate('/', { replace: true });
    });

    return (
        <div className="confirm">
            <div>
                <h1>
                    Booking <span>Successful!</span>
                </h1>
            </div>
        </div>
    );
};
