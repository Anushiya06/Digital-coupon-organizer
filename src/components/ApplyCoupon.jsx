import React from "react";
import "./ApplyCoupon.css";
import PropTypes from 'prop-types';

function ApplyCoupon({ coupons }) {
  return (
    <div className="apply-coupon">
      <h2>Apply Coupons</h2>
      {coupons.length > 0 ? (
        <p>Select a coupon to apply!</p>
      ) : (
        <p>No coupons available to apply.</p>
      )}
    </div>
  );
  
}
ApplyCoupon.propTypes = {
    coupons: PropTypes.array.isRequired,
  };
  

export default ApplyCoupon;
