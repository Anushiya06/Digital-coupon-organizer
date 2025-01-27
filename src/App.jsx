import React, { useState } from "react";
import AddCoupon from "./components/AddCoupon";
import ViewCoupons from "./components/ViewCoupons";
import ApplyCoupon from "./components/ApplyCoupon";
import Statistics from "./components/Statistics";

function App() {
  const [coupons, setCoupons] = useState([]);
  const [page, setPage] = useState("add"); // Added this line

  const addCoupon = (newCoupon) => {
    setCoupons((prev) => [...prev, newCoupon]);
  };

  return (
    <div className="app">
      <header>
        <h1>Digital Coupon Organizer</h1>
      </header>
      <nav>
        <button onClick={() => setPage("add")}>Add Coupon</button>
        <button onClick={() => setPage("view")}>View Coupons</button>
        <button onClick={() => setPage("apply")}>Apply Coupons</button>
        <button onClick={() => setPage("stats")}>Statistics</button>
      </nav>
      <main>
        {page === "add" && <AddCoupon addCoupon={addCoupon} />}
        {page === "view" && <ViewCoupons coupons={coupons} />}
        {page === "apply" && <ApplyCoupon coupons={coupons} />}
        {page === "stats" && <Statistics coupons={coupons} />}
      </main>
    </div>
  );
}

export default App;
