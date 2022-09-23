import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard Component
      <div class="fixed-action-btn">
        <Link class="btn-floating btn-large red" to="/surveys/new">
          <i class="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;