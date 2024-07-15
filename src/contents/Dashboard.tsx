import React from "react";
import DashCard from "../components/DashCard";
import GridChart from "../components/charts";
import TableComponent from "../components/TablesComponent";
import TransactionTable from "../components/TransactionComplete";

function Dashboard() {
  return (
    <div className="px-8 py-4 h-[90vh]">
      <h1>Dashboard</h1>

      <div className="flex ">
        <div className="w-[60%] flex flex-wrap">
          {[1, 2, 3, 4]?.map((data) => (
            <DashCard />
          ))}
        </div>
        <div className="w-[40%]">
          <GridChart />
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between "> 
        <TableComponent />
        <TransactionTable />
      </div>
    </div>
  );
}

export default Dashboard;
