import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);


  const handleRegister = async () => {
    try {
      const response = await fetch('https://urlshortenerapplication.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      });
  
      if (response.ok) {
        // Registration successful
        setRegistrationStatus('success');
      } else {
        const data = await response.json();
  
        if (response.status === 400 && data.message === 'Email is already registered') {
          // Handle email already registered
          setRegistrationStatus('error-email-exists');
        } else {
          // Other registration errors
          console.error('Registration failed:', data.message);
          setRegistrationStatus('error');
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationStatus('error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="mt-2 btn btn-primary btn-block"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <div className="mt-3 text-center">
                Don't have an account? <Link to="/Login">Login here</Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
