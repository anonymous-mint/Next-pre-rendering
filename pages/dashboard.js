import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/dashboard")
      .then((res) => res.json())
      .then((data) => setUser(data));
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {console.log(user)}
          User Dashboard for {user.name}
          <p>likes :{user.likes}</p>
          <p>followers :{user.followers}</p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
