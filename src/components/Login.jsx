import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <div className="auth-page">
      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="auth-logo">
          <img src="./img/logo.jpg" alt="Logo" />
        </div>

        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Sign in to your account to continue</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <div className="input-wrapper">
              <i className="fa-regular fa-envelope input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <div className="input-wrapper">
              <i className="fa-solid fa-lock input-icon" />
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPass(!showPass)}
              >
                <i className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="auth-submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>

      </motion.div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fcb5e571;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
          padding: 2rem 1rem;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          pointer-events: none;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: #e8b4b8;
          top: -120px; right: -100px;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: #b8d4e8;
          bottom: -100px; left: -80px;
        }

        .auth-card {
          background: #fff;
          border-radius: 24px;
          padding: 3rem 2.5rem;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          position: relative;
          z-index: 10;
        }

        .auth-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 1.8rem;
        }
        .auth-logo img {
          height: 52px;
          border-radius: 12px;
          object-fit: contain;
        }

        .auth-title {
          text-align: center;
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 0.4rem;
        }
        .auth-subtitle {
          text-align: center;
          color: #888;
          font-size: 0.95rem;
          margin: 0 0 2rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #444;
        }
        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .forgot-link {
          font-size: 0.82rem;
          color: #059980;
          text-decoration: none;
          font-weight: 500;
        }
        .forgot-link:hover { text-decoration: underline; }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: #aaa;
          font-size: 0.9rem;
          pointer-events: none;
        }
        .input-wrapper input {
          width: 100%;
          padding: 0.72rem 2.8rem 0.72rem 2.6rem;
          border: 1.5px solid #e8e8e8;
          border-radius: 12px;
          font-size: 0.95rem;
          color: #1a1a2e;
          background: #fafafa;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .input-wrapper input:focus {
          border-color: #059980;
          box-shadow: 0 0 0 3px rgba(201,149,106,0.12);
          background: #fff;
        }
        .input-wrapper input::placeholder { color: #bbb; }

        .toggle-pass {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          padding: 4px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }
        .toggle-pass:hover { color: #666; }

        .auth-submit-btn {
          margin-top: 0.4rem;
          padding: 0.85rem;
          background: #059980;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: opacity 0.2s;
        }
        .auth-submit-btn:hover { opacity: 0.92; }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 1.6rem 0 1.2rem;
          color: #ccc;
          font-size: 0.82rem;
        }
        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #eee;
        }
        .auth-divider span { white-space: nowrap; color: #aaa; }

        .social-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 1.6rem;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.7rem;
          border: 1.5px solid #eee;
          border-radius: 12px;
          background: #fff;
          font-size: 0.88rem;
          font-weight: 500;
          color: #444;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .social-btn:hover { border-color: #ddd; background: #fafafa; }
        .social-btn .fa-google { color: #ea4335; }
        .social-btn .fa-facebook-f { color: #1877f2; }

        .auth-switch {
          text-align: center;
          font-size: 0.88rem;
          color: #888;
          margin: 0;
        }
        .auth-switch a {
          color: #059980;
          font-weight: 600;
          text-decoration: none;
        }
        .auth-switch a:hover { text-decoration: underline; }

        @media (max-width: 480px) {
          .auth-card { padding: 2rem 1.5rem; }
        }
      `}</style>
    </div>
  );
}

export default Login;