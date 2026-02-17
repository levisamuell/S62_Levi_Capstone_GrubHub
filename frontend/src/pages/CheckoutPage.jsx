import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cart = state?.cart || [];

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You need to be logged in to place an order.');
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('https://s62-levi-capstone-grubhub-4.onrender.com/user/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart, total }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Order placed successfully!');
        navigate('/');
      } else {
        alert(data.message || 'Failed to place order');
      }
    } catch (err) {
      alert('Network error while placing order');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/LandingImage4.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Checkout card */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex justify-center">
        <div className="bg-white bg-opacity-95 w-full max-w-2xl rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-black">Checkout</h1>

          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item, idx) => (
                <div key={idx} className="border-b pb-4">
                  <h2 className="text-lg font-semibold text-black">{item.name}</h2>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <p className="text-gray-700">
                    Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

              <div className="mt-6 text-xl font-bold text-black">
                Total: ₹{total}
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 bg-red-600 text-white w-full py-3 rounded hover:bg-red-700 transition"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
