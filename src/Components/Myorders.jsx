import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ecommerce/order/",
          {
            headers: {
              projectId: "bng7dtu7whwk", // Your project ID
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setOrders(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order.order._id}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            {order.order.items.map((item) => (
              <div
                key={item.product._id}
                className="flex items-center border-b pb-4 mb-4 last:border-none"
              >
                <img
                  src={item.product.displayImage}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-700">Price: ₹{item.product.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-yellow-500">
                    Rating: {item.product.ratings} / 5
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;
