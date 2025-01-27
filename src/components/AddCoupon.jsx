import React, { useState } from "react";
import "./AddCoupon.css";
import PropTypes from 'prop-types';

function AddCoupon({ addCoupon }) {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCoupon({ couponCode, discount, expiryDate, category });
    setCouponCode("");
    setDiscount("");
    setExpiryDate("");
    setCategory("");
  };

  return (
    <div className="add-coupon">
      <h2>Add Coupon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Discount (e.g., 20%)"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add Coupon</button>
      </form>
    </div>
  );
}

AddCoupon.propTypes = {
  addCoupon: PropTypes.func.isRequired,
};

export default AddCoupon;
