import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';
import Calculator from './Components/Calculator';
import UserPage from './Components/UserPage';
import { saveUserDataToLocal } from './utils';
import './App.css';

const userData = [
  {
    "user_name": "John Doe",
    "user_details": {
      "position": "Developer",
      "location": "United States"
    },
    "profile_details": {
      "website": "John.com",
      "github": "bootdey",
      "twitter": "bootdey",
      "instagramid": "bootdey",
      "facebookid": "bootdey"
    },
    "full_name": [
      {
        "name": "Kenneth Valdez"
      }
    ],
    "email_details": [
      {
        "details": {
          "id": "fddf@ffd.com"
        }
      }
    ],
    "phone": [
      {
        "num": "00000"
      }
    ],
    "mobile": [
      {
        "num": "1111111"
      }
    ],
    "address": [
      {
        "adr": "Bay Area, San Francisco"
      }
    ],
    "assignments": [
      {
        "web_design": "80",
        "web_mark": "60",
        "one_page": "20",
        "mobile_template": "50",
        "backend": "30"
      },
      {
        "web_design": "30",
        "web_mark": "50",
        "one_page": "10",
        "mobile_template": "90",
        "backend": "20"
      }
    ]
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginForm />;
      case 'calculator':
        return <Calculator />;
      case 'user-page':
        saveUserDataToLocal(userData);

        return <UserPage userData={userData} />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('login')}><a href="#/">Login Page</a></li>
          <li onClick={() => setCurrentPage('calculator')}><a href="#/">Calculator Page</a></li>
          <li onClick={() => setCurrentPage('user-page')}><a href="#/">User Page</a></li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
