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

            if (response.ok) {
                setMessage(`? ${result.message}`);
            } else {
                setMessage(`? ${result.message}`);
            }

        } catch (error) {
            console.error("Login error:", error);
            setMessage("An error occurred during login.");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Student Login</h2>
            <input type="text" placeholder="Initial" value={initial} onChange={(e) => setInitial(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default StudentInfo;
