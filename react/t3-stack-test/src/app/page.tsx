import React from "react";
import UserCard from "./components/UserCard";
import userData from "./data/userData";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f4f4f4" }}>
      <UserCard user={userData} />
    </div>
  );
};

export default App;
