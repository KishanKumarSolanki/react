import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// softToys, educationalToys, rcToys, boardGames (इन्हें उपयोग नहीं किया गया है, लेकिन इम्पोर्ट रहने दें)

// --- 2. ऑर्डर सारांश कॉम्पोनेन्ट (Order Summary Component) ---
/**
 * बेहतर UI के साथ ऑर्डर सारांश दिखाता है।
 * @param {{id: number, title: string, price: number, quantity: number}[]} items कार्ट आइटम्स
 */
const OrderSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const shipping = 50.00; // Fixed shipping charge
  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <div className="lg:col-span-1 bg-white p-6 md:p-8 shadow-2xl rounded-xl h-fit sticky top-6 border border-gray-100 transform hover:shadow-indigo-300/50 transition duration-300">
      <h3 className="text-2xl font-extrabold mb-6 text-gray-900 border-b pb-3">🛒 Order Summary</h3>

      {/* Item List */}
      <div className="border-b border-gray-200 pb-4 mb-4 text-sm text-gray-700 space-y-2">
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center hover:bg-indigo-50/50 p-1 -mx-1 rounded-md transition duration-150">
            <span className="truncate pr-2">{item.title || item.name}</span>
            <span className="font-medium text-gray-800 whitespace-nowrap">
              (x{item.quantity || 1}) ₹{(item.price * (item.quantity || 1)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Price Calculation */}
      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between"><span>Subtotal</span> <span className="font-medium">₹{subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Shipping</span> <span className="text-green-600 font-semibold">₹{shipping.toFixed(2)}</span></div>
        <div className="flex justify-between border-b pb-3 border-gray-200"><span>Taxes (5%)</span> <span className="font-medium">₹{tax.toFixed(2)}</span></div>

        <div className="flex justify-between pt-3 font-extrabold text-2xl text-indigo-700">
          <span>Total Payable</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

// --- 3. चेकआउट फॉर्म कॉम्पोनेन्ट (Checkout Form Component) ---
/**
 * शिपिंग और पेमेंट जानकारी के लिए फॉर्म UI।
 */
const CheckoutFormUI = ({ onFinalSubmit }) => {
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
    
  // फिक्स किया गया InputField फंक्शन
  const InputField = ({ label, name, type = 'text', required = true, pattern = null, isFullWidth = false }) => (
    <div className={`form-group ${isFullWidth ? 'col-span-full' : ''}`}>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        required={required}
        pattern={pattern}
        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-150"
        placeholder={`Enter your ${label.toLowerCase().replace('*', '')}`}
      />
    </div>
  );


  return (
    <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-6 md:p-8 shadow-2xl rounded-xl border border-gray-100">
      
      {/* --- सेक्शन 1: शिपिंग जानकारी --- */}
      <h3 className="text-2xl font-extrabold mb-6 text-indigo-700 border-b pb-3">1. 📦 Shipping Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <InputField label="Full Name*" name="fullName" />
        <InputField label="Email*" name="email" type="email" />

        <InputField label="Address Line 1*" name="addressLine1" isFullWidth={true} />
        
        <InputField label="City*" name="city" />
        <InputField 
          label="Zip/Postal Code*" 
          name="zipCode" 
          pattern="[0-9]*"
        />
      </div>

      {/* --- सेक्शन 2: पेमेंट मेथड --- */}
      <h3 className="text-2xl font-extrabold mb-6 text-indigo-700 border-t pt-6">2. 💳 Select Payment Method</h3>

      <div className="space-y-4 mb-10">
        {/* COD Option */}
        <label 
          className={`flex items-center p-5 rounded-xl cursor-pointer transition duration-200 
                      ${selectedMethod === 'cod' ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-gray-300 border hover:border-indigo-400'}`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={selectedMethod === 'cod'}
            onChange={() => setSelectedMethod('cod')}
            className="h-5 w-5 text-green-600 border-gray-400 focus:ring-green-500 checked:ring-2 checked:ring-offset-2"
          />
          <span className="ml-4 text-lg text-gray-800 font-bold">Cash on Delivery (COD)</span>
          <span className="ml-auto text-sm text-gray-500">Pay on delivery</span>
        </label>

        {/* Online Payment Option */}
        <label 
          className={`flex items-center p-5 rounded-xl cursor-pointer transition duration-200 
                      ${selectedMethod === 'online' ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-gray-300 border hover:border-indigo-400'}`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={selectedMethod === 'online'}
            onChange={() => setSelectedMethod('online')}
            className="h-5 w-5 text-indigo-600 border-gray-400 focus:ring-indigo-500 checked:ring-2 checked:ring-offset-2"
          />
          <span className="ml-4 text-lg text-gray-800 font-bold">Credit/Debit Card or UPI (Online Payment)</span>
          <span className="ml-auto text-sm text-indigo-600 font-semibold">Instant Secure Payment</span>
        </label>
      </div>

      {/* --- अंतिम बटन --- */}
      <button
        type="submit"
        className={`w-full py-4 text-xl font-extrabold rounded-xl text-white transition duration-300 shadow-xl transform hover:scale-[1.01]
                    ${selectedMethod === 'cod' 
                        ? 'bg-green-600 hover:bg-green-700 shadow-green-400/50' 
                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-400/50'}
                    `}
      >
        {selectedMethod === 'cod' ? '✅ Place Order (Cash on Delivery)' : '➡️ Proceed to Secure Payment'}
      </button>

    </form>
  );
};


// --- 4. मुख्य चेकआउट पेज कॉम्पोनेन्ट (Main Page) ---
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  // ⭐ गार्ड क्लॉज़: यदि कार्ट खाली है, तो वापस /cart पर रीडायरेक्ट करें
  if (cart.length === 0) {
    navigate('/cart', { replace: true });
    return (
      <div className="text-center p-10 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="p-8 bg-white shadow-xl rounded-lg">
            <p className="text-2xl text-red-600 font-bold">No items found in cart.</p>
            <p className="text-gray-600 mt-2">Redirecting to Cart page...</p>
        </div>
      </div>
    );
  }

  const handleFinalSubmission = (data) => {
    // यहाँ आप टोटल वैल्यू को भी लॉग कर सकते हैं यदि आवश्यक हो
    console.log("Checkout Data Submitted:", data);

    if (data.paymentMethod === 'cod') {
      console.log("COD Order Placed with:", data.formData);
      // सफलता संदेश के साथ success page पर नेविगेट करें
      navigate('/order-success', { state: { orderStatus: 'success', paymentType: 'COD', items: cart } });
    } else {
      console.log("Ready for Online Payment with Data:", data.formData);
      // वास्तविक एप्लीकेशन में: पेमेंट गेटवे पर रीडायरेक्ट करें
      alert('Simulating redirect to Payment Gateway...');
      // navigate('/payment-gateway', { state: { orderData: data } });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900 tracking-tight">
            Checkout <span className="text-indigo-600">Securely</span>
        </h1>
      <div className="container mx-auto p-4 max-w-7xl">

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