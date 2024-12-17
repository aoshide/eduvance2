import React from 'react';
import './styles.css'; // Убедитесь, что стили подключены

const Dashboard = ({ userData }) => {
    const [userInfo, setUserInfo] = React.useState({
        name: userData?.name || 'Баргыбаев Нуртилек',
        email: userData?.email || 'nurti@example.com',
        age: userData?.age || 18, // Добавлено поле возраста
        bio: 'Программист с 5-летним опытом работы. Специализируюсь на React и Node.js.'
    });

    const [editMode, setEditMode] = React.useState(false);
    const [formData, setFormData] = React.useState({ ...userInfo });

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
        <div className="dashboard">
            <h1>Личный кабинет </h1>
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
                    <p><strong>Возраст:</strong> {userInfo.age}</p> {/* Отображение возраста */}
                    <p><strong>О себе:</strong> {userInfo.bio}</p>
                    <button onClick={handleEdit}>Редактировать</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
