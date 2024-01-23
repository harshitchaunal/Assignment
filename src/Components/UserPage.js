import React from 'react';
import UserDetails from './UserDetails';
const UserPage = ({ userData }) => {
  return (
    <div className="user-page">
      {userData.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
    </div>
  );
};

export default UserPage;
