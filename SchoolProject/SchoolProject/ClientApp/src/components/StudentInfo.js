import React, { useState } from 'react';

const StudentInfo = () => {
    const [initial, setInitial] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        const payload = { initial, username, password };
        const url = '/api/Student/Login/';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            setMessage(result.message || 'Login attempt made');
        } catch (error) {
            console.error("Login error:", error);
            setMessage("An error occurred during login.");
        }
    };

    const styles = {
        container: {
            fontFamily: 'Segoe UI, sans-serif',
            backgroundColor: '#f2f4f8',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center'
        },
        input: {
            width: '100%',
            padding: '12px 15px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            boxSizing: 'border-box'
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#45a049'
        },
        message: {
            marginTop: '20px',
            color: '#333',
            fontWeight: 'bold'
        },
        title: {
            marginBottom: '20px',
            fontSize: '28px',
            color: '#333'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Student Login</h2>
                <input
                    type="text"
                    placeholder="Initial"
                    value={initial}
                    onChange={(e) => setInitial(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button style={styles.button} onClick={handleSubmit}>
                    Login
                </button>
                {message && <p style={styles.message}>{message}</p>}
            </div>
        </div>
    );
};

export default StudentInfo;