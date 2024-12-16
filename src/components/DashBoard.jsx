import React from 'react';

const Dashboard = ({ userData }) => {
  return (
    <div className="dashboard">
      <h1>Личный кабинет</h1>
      <div className="user-info">
        <p><strong>Имя:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Возраст:</strong> {userData.age}</p>
        <p><strong>Пароль:</strong> {userData.password}</p>
      </div>
    </div>
  );
};

export default Dashboard;
