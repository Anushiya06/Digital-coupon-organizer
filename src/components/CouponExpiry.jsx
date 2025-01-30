import PropTypes from "prop-types";
import "./CouponExpiry.css";

function CouponExpiry({ coupons }) {
  const today = new Date();

  const expiredCoupons = coupons.filter((coupon) => new Date(coupon.expiryDate) < today);
  const soonExpiringCoupons = coupons.filter((coupon) => {
    const expiry = new Date(coupon.expiryDate);
    const daysLeft = (expiry - today) / (1000 * 60 * 60 * 24);
    return daysLeft > 0 && daysLeft <= 7;
  });

  return (
    <div className="coupon-expiry">
      <h2>Coupon Expiry</h2>

      <h3>Expired Coupons</h3>
      {expiredCoupons.length > 0 ? (
        <ul>
          {expiredCoupons.map((coupon, index) => (
            <li key={index}>
              <strong>{coupon.couponCode}</strong> - Expired on {coupon.expiryDate}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expired coupons.</p>
      )}

      <h3>Expiring Soon (Next 7 Days)</h3>
      {soonExpiringCoupons.length > 0 ? (
        <ul>
          {soonExpiringCoupons.map((coupon, index) => (
            <li key={index}>
              <strong>{coupon.couponCode}</strong> - Expires on {coupon.expiryDate}
            </li>
          ))}
        </ul>
      ) : (
        <p>No coupons expiring soon.</p>
      )}
    </div>
  );
}

CouponExpiry.propTypes = {
  coupons: PropTypes.arrayOf(
    PropTypes.shape({
      couponCode: PropTypes.string.isRequired,
      expiryDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CouponExpiry;
