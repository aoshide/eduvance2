import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import './Dashboard.css'


const Registration = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        bio: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(formData);
    };

    return (
        <div className="register">
            <h1 className="register-title">Регистрация</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label className="register-label" htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="register-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label className="register-label" htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="register-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label className="register-label" htmlFor="age">Возраст:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="register-input"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label className="register-label" htmlFor="bio">О себе:</label>
                <textarea
                    id="bio"
                    name="bio"
                    className="register-textarea"
                    value={formData.bio}
                    onChange={handleChange}
                />
                <button type="submit" className="register-button">Зарегистрироваться</button>
            </form>
        </div>
    );
};


const Dashboard = ({ userData }) => {
    const [userInfo, setUserInfo] = useState({
        name: userData?.name || 'Баргыбаев Нуртилек',
        email: userData?.email || 'nurti@example.com',
        age: userData?.age || 18,
        bio: userData?.bio || 'Программист с 5-летним опытом работы. Специализируюсь на React и Node.js.', // bio берется из userData
    });
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/main');
    };

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({ ...userInfo });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setUserInfo({ ...formData });
        setEditMode(false);
    };

    const handleEdit = () => {
        setFormData({ ...userInfo });
        setEditMode(true);
    };

    return (
        <main>
            <div className="dashboard">
                <h1>Личный кабинет</h1>
                {editMode ? (
                    <div className="edit-form">
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="age">Возраст:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                        <label htmlFor="bio">О себе:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                        />
                        <button onClick={handleSave}>Сохранить</button>
                    </div>
                ) : (
                    <div className="user-info">
                        <p><strong>Имя:</strong> {userInfo.name}</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>Возраст:</strong> {userInfo.age}</p>
                        <p><strong>О себе:</strong> {userInfo.bio}</p>
                        <button onClick={handleEdit}>Редактировать</button>
                    </div>
                )}
            </div>
            <button className="navigation-button" onClick={handleNavigation}>
                Перейти на Главную страницу
            </button>
        </main>
    );
};



const App = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleRegister = (data) => {
        setUserData(data);
        setIsRegistered(true);
    };

    return (
        <div className="app">
            {isRegistered ? (
                <Dashboard userData={userData} />
            ) : (
                <Registration onRegister={handleRegister} />
            )}
        </div>
    );
};

export default App;
