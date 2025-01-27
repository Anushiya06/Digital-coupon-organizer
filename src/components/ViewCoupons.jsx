import React from "react";
import PropTypes from 'prop-types';
import "./ViewCoupons.css";

function ViewCoupons({ coupons }) {
  return (
    <div className="view-coupons">
      <h2>View Coupons</h2>
      {coupons.length > 0 ? (
        coupons.map((coupon, index) => (
          <div key={index}>
            <p>Code: {coupon.couponCode}</p>
            <p>Discount: {coupon.discount}</p>
            <p>Expiry: {coupon.expiryDate}</p>
            <p>Category: {coupon.category}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No coupons added yet.</p>
      )}
    </div>
  );
}

ViewCoupons.propTypes = {
  coupons: PropTypes.arrayOf(
    PropTypes.shape({
      couponCode: PropTypes.string.isRequired,
      discount: PropTypes.string.isRequired,
      expiryDate: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ViewCoupons;
