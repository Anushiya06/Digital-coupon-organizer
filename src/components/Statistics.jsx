import PropTypes from 'prop-types'; 
import "./Statistics.css";

function Statistics({ coupons }) {
  const defaultCoupons = [
    { couponCode: "SAVE20", discount: "20%", expiryDate: "2025-12-31", category: "Food" },
    { couponCode: "TECH10", discount: "10%", expiryDate: "2025-11-30", category: "Electronics" },
    { couponCode: "FASHION15", discount: "15%", expiryDate: "2025-10-15", category: "Clothing" },
    { couponCode: "WELCOME5", discount: "5%", expiryDate: "2025-09-01", category: "Other" }
  ];
  const allCoupons = coupons.length > 0 ? coupons : defaultCoupons;
  const totalCoupons = allCoupons.length;
  const categories = allCoupons.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Coupons: {totalCoupons}</p>
      {Object.entries(categories).map(([category, count]) => (
        <p key={category}>
          {category}: {count}
        </p>
      ))}
    </div>
  );
}
Statistics.propTypes = {
  coupons: PropTypes.arrayOf(
    PropTypes.shape({
      couponCode: PropTypes.string.isRequired,
      discount: PropTypes.string.isRequired,
      expiryDate: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
