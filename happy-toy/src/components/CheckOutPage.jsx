import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// softToys, educationalToys, rcToys, boardGames (इन्हें उपयोग नहीं किया गया है, लेकिन इम्पोर्ट रहने दें)

// --- 2. ऑर्डर सारांश कॉम्पोनेन्ट (Order Summary Component) ---
const OrderSummary = ({ items }) => {
  // ... (OrderSummary Component का कोड वही रहेगा) ...
  const subtotal = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const shipping = 50.00; // Fixed shipping charge
  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <div className="lg:col-span-1 bg-gray-50 p-6 shadow-lg rounded-lg h-fit sticky top-4 border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h3>

      {/* Item List */}
      <div className="border-b pb-3 mb-3 text-sm text-gray-600 space-y-1">
        {items.map(item => (
          // सुनिश्चित करें कि 'name' या 'title' प्रॉपर्टी का उपयोग करें, जैसा आपके कार्ट डेटा में है
          <div key={item.id} className="flex justify-between">
            <span>{item.title || item.name} (x{item.quantity || 1})</span>
            <span>₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Price Calculation */}
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between"><span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Shipping</span> <span>₹{shipping.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Taxes (5%)</span> <span>₹{tax.toFixed(2)}</span></div>

        <div className="flex justify-between border-t pt-2 font-bold text-lg text-gray-900">
          <span>Order Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

// --- 3. चेकआउट फॉर्म कॉम्पोनेन्ट (Checkout Form Component) ---
const CheckoutFormUI = ({ onFinalSubmit }) => {
  // ... (CheckoutFormUI Component का कोड वही रहेगा) ...
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    city: '',
    zipCode: '',
    email: '',
  });
  const [selectedMethod, setSelectedMethod] = useState('cod');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      formData,
      paymentMethod: selectedMethod
    };

    onFinalSubmit(submissionData);
  };

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-6 shadow-xl rounded-lg border border-gray-200">
      {/* --- सेक्शन 1: शिपिंग जानकारी --- */}
      <h3 className="text-2xl font-bold mb-4 text-indigo-700">1. Shipping Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Address Line 1 */}
        <div className="form-group col-span-full">
          <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1*</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* City */}
        <div className="form-group">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Zip Code */}
        <div className="form-group">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip/Postal Code*</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
            pattern="[0-9]*" // केवल अंक
            className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* --- सेक्शन 2: पेमेंट मेथड --- */}
      <h3 className="text-2xl font-bold mb-4 text-indigo-700 border-t pt-6">2. Select Payment Method</h3>

      <div className="space-y-3 mb-8">
        {/* COD Option */}
        <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition duration-150">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={selectedMethod === 'cod'}
            onChange={() => setSelectedMethod('cod')}
            className="h-5 w-5 text-green-600 border-gray-300 focus:ring-green-500"
          />
          <span className="ml-4 text-lg text-gray-800 font-semibold">Cash on Delivery (COD)</span>
        </label>

        {/* Online Payment Option (Placeholder) */}
        <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition duration-150">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={selectedMethod === 'online'}
            onChange={() => setSelectedMethod('online')}
            className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <span className="ml-4 text-lg text-gray-800 font-semibold">Credit/Debit Card or UPI (Online Payment)</span>
        </label>
      </div>

      {/* --- अंतिम बटन --- */}
      <button
        type="submit"
        className={`w-full py-3 text-xl font-bold rounded-lg text-white transition duration-300 shadow-lg 
                    ${selectedMethod === 'cod' ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'}
                `}
      >
        {selectedMethod === 'cod' ? 'Place Order (COD)' : 'Proceed to Secure Payment'}
      </button>

    </form>
  );
};


// --- 4. मुख्य चेकआउट पेज कॉम्पोनेन्ट (Main Page) ---
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Cart data ko fetch karein. यदि यह undefined है, तो एक खाली array लें।
  const cart = location.state?.cart || [];

  // ⭐ गार्ड क्लॉज़: यदि कार्ट खाली है, तो वापस /cart पर रीडायरेक्ट करें
  if (cart.length === 0) {
    // 'replace: true' का उपयोग करने से ब्राउज़र हिस्ट्री में Checkout पेज नहीं जुड़ता
    navigate('/cart', { replace: true });

    // रीडायरेक्ट के बाद कुछ भी रेंडर न करें
    return (
      <div className="text-center p-10">
        <p className="text-xl text-red-600">No items found in cart. Redirecting to Cart page...</p>
      </div>
    );
  }

  const handleFinalSubmission = (data) => {
    if (data.paymentMethod === 'cod') {
      console.log("COD Order Placed with:", data.formData);
      // यहाँ आप success page पर नेविगेट कर सकते हैं
      // navigate('/order-success', { state: { order: data } });
    } else {
      console.log("Ready for Online Payment with Data:", data.formData);
      // यहाँ ऑनलाइन पेमेंट गेटवे को कॉल करने का लॉजिक आएगा
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Finalize Your Purchase</h1>
      <div className="container mx-auto p-4 max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            <CheckoutFormUI onFinalSubmit={handleFinalSubmission} />
          </div>

          {/* Right Column: Order Summary */}
          <OrderSummary items={cart} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;