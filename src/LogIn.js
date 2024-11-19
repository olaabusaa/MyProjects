import React, { useState } from 'react';

const LogIn = () => {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const GITHUB_CLIENT_ID = 'your_client_id';
    const handleGitHubSignUp = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { username, email, password };

        try {
            const response = await fetch('https://yourapi.com/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Sign-up failed');
            }

            const data = await response.json();
            console.log('Success:', data);
            // Handle success, maybe redirect to another page or show success message
        } catch (error) {
            setErrorMessage('Error: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{background:"red"}}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div style={{background:"red"}}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div style={{background:"red"}}>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {errorMessage && <p>{errorMessage}</p>}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default LogIn;
