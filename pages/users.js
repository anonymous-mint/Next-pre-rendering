import React from "react";
import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <>
      <h1>Users List</h1>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserList;

const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return { props: { users: data } };
};

export { getStaticProps };
