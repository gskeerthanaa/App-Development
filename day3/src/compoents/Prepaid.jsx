import React from "react";
import Card from "./Card";

const Prepaid = () => {
  // Sample data for prepaid plans
  const prepaidPlans = [
    {
      id: 1,
      title: "Airtel Plan 1",
      description: "Description for Airtel Plan 1",
      price: "$10",
    },
    {
      id: 2,
      title: "Airtel Plan 2",
      description: "Description for Airtel Plan 2",
      price: "$20",
    },
    {
      id: 3,
      title: "Jio Plan 1",
      description: "Description for Jio Plan 1",
      price: "$15",
    },
    // Add more plans here...
  ];

  return (
    <div>
      <h2>Prepaid Plans</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {prepaidPlans.map((plan) => (
          <Card
            key={plan.id}
            title={plan.title}
            description={plan.description}
            price={plan.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Prepaid;
