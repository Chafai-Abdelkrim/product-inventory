import React from 'react';
import { MdOutlineInventory2 } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Home.scss';
import heroImg from '../../assets/inv-img.png';
import { ShowOnLogout, ShowOnLogin } from '../../components/protect/HiddenLink';

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <MdOutlineInventory2 size={40} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>

      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {'&'} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real time and integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial for 1 month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="6k" text="Brand Owners" />
            <NumberText num="18k" text="Active Users" />
            <NumberText num="100+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory app" />
        </div>
      </section>
    </div>
  );
};

export default Home;
