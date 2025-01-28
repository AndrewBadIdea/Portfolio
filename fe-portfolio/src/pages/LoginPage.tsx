import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        const hardcodedUsername = process.env.REACT_APP_USERNAME;
        const hardcodedPassword = process.env.REACT_APP_PASSWORD;

        if (username === hardcodedUsername && password === hardcodedPassword) {
            setIsLoggedIn(true);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            {!isLoggedIn ? (
                <>
                    <h1>Login</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ padding: '10px', margin: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '10px', margin: '10px', borderRadius: '5px' }}
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        style={{
                            backgroundColor: '#ffd700',
                            color: '#121212',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Login
                    </button>
                </>
            ) : (
                <h2>Welcome, {username}!</h2>
            )}
        </div>
    );
};

export default LoginPage;
