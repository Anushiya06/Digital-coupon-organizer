import PropTypes from "prop-types";
import "./ViewCoupons.css";

function ViewCoupons({ coupons }) {
  const defaultCoupons = [
    { couponCode: "SAVE20", discount: "20%", expiryDate: "2025-12-31", category: "Food" },
    { couponCode: "TECH10", discount: "10%", expiryDate: "2025-11-30", category: "Electronics" },
    { couponCode: "FASHION15", discount: "15%", expiryDate: "2025-10-15", category: "Clothing" },
  ];
  const allCoupons = coupons.length > 0 ? coupons : defaultCoupons;

  return (
    <div className="view-coupons">
      <h2>View Coupons</h2>
      <div className="coupon-container">
        {allCoupons.map((coupon, index) => (
          <div key={index}>
            <p><strong>Code:</strong> {coupon.couponCode}</p>
            <p><strong>Discount:</strong> {coupon.discount}</p>
            <p><strong>Expiry:</strong> {coupon.expiryDate}</p>
            <p><strong>Category:</strong> {coupon.category}</p>
            {index !== allCoupons.length - 1 && <hr />}
          </div>
        ))}
      </div>
      <button onClick={() => window.location.reload()}>Refresh Coupons</button>
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
