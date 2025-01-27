import React from "react";
import PropTypes from 'prop-types';
import "./Statistics.css";

function Statistics({ coupons }) {
  const totalCoupons = coupons.length;
  const categories = coupons.reduce((acc, { category }) => {
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
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
