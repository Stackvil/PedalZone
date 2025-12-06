import { Link } from 'react-router-dom';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message with user details and cart items
    let message = `*New Enquiry from Website*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Mobile: ${formData.mobile}\n`;
    message += `Email: ${formData.email}\n\n`;
    
    if (formData.message) {
      message += `*Additional Message:*\n${formData.message}\n\n`;
    }
    
    message += `*Products Interested In:*\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n\n`;
    });
    
    message += "Please provide pricing and availability details.\n\nThank you!";
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your actual WhatsApp number (include country code without + sign)
    const whatsappNumber = "1234567890"; // Change this to your WhatsApp number
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Close modal and reset form
    setShowEnquiryForm(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12 bg-slate-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center bg-white rounded-2xl shadow-2xl p-12 animate-fade-in">
            {/* Empty Cart Icon */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-amber-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-amber-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-1/4 w-3 h-3 bg-amber-200 rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Looks like you haven't added any products yet. <br />
              Start exploring our amazing collection!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bicycles"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold text-lg px-8 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Browse Bicycles
              </Link>
              <Link
                to="/accessories"
                className="inline-block bg-white hover:bg-slate-50 text-stone-900 font-semibold text-lg px-8 py-3 rounded-lg border-2 border-stone-300 transition duration-300"
              >
                View Accessories
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Need help finding something?</p>
              <Link
                to="/contact"
                className="text-amber-700 hover:text-amber-800 font-medium transition"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Shopping Cart" subtitle="Review your items" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6 animate-fade-in"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-1">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-stone-300 hover:bg-stone-100 transition flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-stone-300 hover:bg-stone-100 transition flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 transition text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>

          {/* WhatsApp Enquiry */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-6">
                Request Quote
              </h2>
              <div className="space-y-4 mb-6">
                <div className="text-center py-4 text-slate-600">
                  <p className="text-lg font-semibold text-stone-900 mb-2">
                    {cartItems.length} item(s) selected
                  </p>
                  <p className="text-sm">Contact us for pricing and availability</p>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <button
                onClick={() => setShowEnquiryForm(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-3 mb-4 shadow-md hover:shadow-lg"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Enquiry
              </button>

              <Link
                to="/bicycles"
                className="block text-center text-amber-700 hover:text-amber-800 transition font-medium"
              >
                Continue Shopping
              </Link>
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free shipping available</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600 mt-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600 mt-3">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Lifetime warranty on frames</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-stone-900">
                  Enquiry Form
                </h2>
                <button
                  onClick={() => setShowEnquiryForm(false)}
                  className="text-slate-400 hover:text-stone-900 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                    placeholder="Enter your mobile number"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition resize-none"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                {/* Cart Summary */}
                <div className="bg-slate-50 rounded-lg p-4 mt-4">
                  <h3 className="text-sm font-semibold text-stone-900 mb-2">
                    Selected Products:
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {cartItems.map((item, index) => (
                      <li key={item.id}>
                        {index + 1}. {item.name} (Qty: {item.quantity})
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg mt-6"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Send WhatsApp Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

