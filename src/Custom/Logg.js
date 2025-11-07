import React, { Component } from 'react'

export default class Logg extends Component {
  render() {
    return (
      <div>import React, { useState } from 'react';

      function RegistrationForm() {
          const [formData, setFormData] = useState({
              username: '',
              password: '',
              confirmPassword: '',
          });
      
          const handleChange = (e) => {
              const { name, value } = e.target;
              setFormData({
                  ...formData,
                  [name]: value,
              });
          };
      
          const handleSubmit = async (e) => {
              e.preventDefault();
      
              if (formData.password !== formData.confirmPassword) {
                  alert('Passwords do not match');
                  return;
              }
      
              try {
                  const response = await fetch('/api/register', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                          username: formData.username,
                          password: formData.password,
                      }),
                  });
      
                  if (response.ok) {
                      alert('Registration successful');
                  } else {
                      const data = await response.json();
                      alert('Registration failed: ' + data.message);
                  }
              } catch (error) {
                  console.error('Error:', error);
              }
          };
      
          return (
              <div>
                  <h2>Registration</h2>
                  <form onSubmit={handleSubmit}>
                      <div>
                          <label>Username:</label>
                          <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <div>
                          <label>Password:</label>
                          <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <div>
                          <label>Confirm Password:</label>
                          <input
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <button type="submit">Register</button>
                  </form>
              </div>
          );
      }
      
      export default RegistrationForm;
      import React, { useState } from 'react';

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                alert('Login successful');
                // You can handle the successful login, such as redirecting the user to another page
            } else {
                const data = await response.json();
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;

      </div>
    )
  }
}
