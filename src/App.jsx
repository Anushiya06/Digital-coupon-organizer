import { useState } from "react";
import AddCoupon from "./components/AddCoupon";
import ViewCoupons from "./components/ViewCoupons";
import Statistics from "./components/Statistics";
import CouponExpiry from "./components/CouponExpiry"; 

function App() {
  const [coupons, setCoupons] = useState([]);
  const [page, setPage] = useState("add");

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
        <button onClick={() => setPage("stats")}>Statistics</button>
        <button onClick={() => setPage("expiry")}>Coupon Expiry</button> 
      </nav>
      <main>
        {page === "add" && <AddCoupon addCoupon={addCoupon} />}
        {page === "view" && <ViewCoupons coupons={coupons} />}
        {page === "stats" && <Statistics coupons={coupons} />}
        {page === "expiry" && <CouponExpiry coupons={coupons} />} 
      </main>
    </div>
  );
}

export default App;
