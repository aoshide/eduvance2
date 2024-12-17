import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Здесь можно добавить логику отправки данных на сервер
    };

    return (
        <div className="registration-modal">
            <div className="modal-content">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Возраст:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;