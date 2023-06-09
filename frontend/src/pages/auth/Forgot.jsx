import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../../components/Card/Card';
import { forgotPassword, validateEmail } from '../../services/authService';
import { AiOutlineMail } from 'react-icons/ai';
import styles from './auth.module.scss';
import { Link } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const forgot = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter an email');
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }

    const userData = { email };

    await forgotPassword(userData);
    setEmail('');
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>

          <form onSubmit={forgot}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="--btn --btn-primary --btn-block" type="submit">
              Get Reset Email
            </button>

            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
