import React from 'react';
import '../Styles/UserDetails.css';
const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>{user.user_name}</h2>
      <div className="user-info">
        <div>
        <p><strong>Position:</strong> {user.user_details.position}</p>

          <p><strong>Location:</strong> {user.user_details.location}</p>
        </div>
        <div>
          <p><strong>Website:</strong> {user.profile_details.website}</p>
          <p><strong>Github:</strong> {user.profile_details.github}</p>
          <p><strong>Twitter:</strong> {user.profile_details.twitter}</p>
          <p><strong>Instagram:</strong> {user.profile_details.instagramid}</p>
          <p><strong>Facebook:</strong>{user.profile_details.facebookid}</p>
        </div>
      </div>
      <div className="full-name">
        {user.full_name.map((name, index) => (
          <p key={index}><strong>Full Name:</strong> {name.name}</p>
        ))}
      </div>
      <div className="email-details">
        {user.email_details.map((email, index) => (
          <p key={index}><strong>Email: </strong>{email.details.id}</p>
        ))}
      </div>
      <div className="contact-details">
        <p><strong>Phone:</strong> {user.phone[0].num}</p>
        <p><strong>Mobile: </strong>{user.mobile[0].num}</p>
        <p><strong>Address:</strong> {user.address[0].adr}</p>
      </div>
      <div className="assignments">
        {user.assignments.map((assignment, index) => (
          <div key={index}>
            <p><strong>Web Design:</strong> {assignment.web_design}</p>
            <p><strong>Web Mark:</strong> {assignment.web_mark}</p>
            <p><strong>One Page: </strong>{assignment.one_page}</p>
            <p><strong>Mobile Template:</strong> {assignment.mobile_template}</p>
            <p><strong>Backend: </strong>{assignment.backend}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
