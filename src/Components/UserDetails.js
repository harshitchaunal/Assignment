import React from 'react';
import '../Styles/UserDetails.css';
const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>{user.user_name}</h2>
      <div className="user-info">
        <div>
          <p>Position: {user.user_details.position}</p>
          <p>Location: {user.user_details.location}</p>
        </div>
        <div>
          <p>Website: {user.profile_details.website}</p>
          <p>Github: {user.profile_details.github}</p>
          <p>Twitter: {user.profile_details.twitter}</p>
          <p>Instagram: {user.profile_details.instagramid}</p>
          <p>Facebook: {user.profile_details.facebookid}</p>
        </div>
      </div>
      <div className="full-name">
        {user.full_name.map((name, index) => (
          <p key={index}>Full Name: {name.name}</p>
        ))}
      </div>
      <div className="email-details">
        {user.email_details.map((email, index) => (
          <p key={index}>Email: {email.details.id}</p>
        ))}
      </div>
      <div className="contact-details">
        <p>Phone: {user.phone[0].num}</p>
        <p>Mobile: {user.mobile[0].num}</p>
        <p>Address: {user.address[0].adr}</p>
      </div>
      <div className="assignments">
        {user.assignments.map((assignment, index) => (
          <div key={index}>
            <p>Web Design: {assignment.web_design}</p>
            <p>Web Mark: {assignment.web_mark}</p>
            <p>One Page: {assignment.one_page}</p>
            <p>Mobile Template: {assignment.mobile_template}</p>
            <p>Backend: {assignment.backend}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
