import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup:", form);
  };

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColor = ["", "#e74c3c", "#f39c12", "#3498db", "#27ae60"];

  return (
    <div className="auth-page">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="auth-logo">
          <img src="./img/logo.jpg" alt="Logo" />
        </div>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-subtitle">Join us today and start shopping</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <div className="input-wrapper">
              <i className="fa-regular fa-user input-icon" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <i className="fa-solid fa-lock input-icon" />
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPass(!showPass)}
              >
                <i className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>

            {form.password && (
              <div className="strength-bar-wrapper">
                <div className="strength-bars">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="strength-bar"
                      style={{
                        background: i <= strength ? strengthColor[strength] : "#eee",
                      }}
                    />
                  ))}
                </div>
                <span className="strength-label" style={{ color: strengthColor[strength] }}>
                  {strengthLabel[strength]}
                </span>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirm">Confirm password</label>
            <div className="input-wrapper">
              <i className="fa-solid fa-shield-halved input-icon" />
              <input
                type={showPass ? "text" : "password"}
                id="confirm"
                name="confirm"
                placeholder="Repeat your password"
                value={form.confirm}
                onChange={handleChange}
                required
              />
              {form.confirm && (
                <span className="match-icon">
                  {form.confirm === form.password ? (
                    <i className="fa-solid fa-check" style={{ color: "#27ae60" }} />
                  ) : (
                    <i className="fa-solid fa-xmark" style={{ color: "#e74c3c" }} />
                  )}
                </span>
              )}
            </div>
          </div>

          <p className="terms-text">
            By signing up, you agree to our{" "}
            <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>

          <motion.button
            type="submit"
            className="auth-submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Create Account
          </motion.button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>
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
          background: #b8d4e8;
          top: -120px; left: -100px;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: #e8b4b8;
          bottom: -100px; right: -80px;
        }

        .auth-card {
          background: #fff;
          border-radius: 24px;
          padding: 2.8rem 2.5rem;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          position: relative;
          z-index: 10;
        }

        .auth-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
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
          margin: 0 0 1.8rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #444;
        }

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

        .toggle-pass, .match-icon {
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

        .strength-bar-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }
        .strength-bars {
          display: flex;
          gap: 4px;
          flex: 1;
        }
        .strength-bar {
          height: 4px;
          flex: 1;
          border-radius: 4px;
          transition: background 0.3s;
        }
        .strength-label {
          font-size: 0.78rem;
          font-weight: 600;
          min-width: 36px;
          text-align: right;
          transition: color 0.3s;
        }

        .terms-text {
          font-size: 0.82rem;
          color: #999;
          text-align: center;
          margin: 0;
          line-height: 1.5;
        }
        .terms-text a {
          color: #059980;
          text-decoration: none;
          font-weight: 500;
        }
        .terms-text a:hover { text-decoration: underline; }

        .auth-submit-btn {
          margin-top: 0.2rem;
          padding: 0.85rem;
          background:#059980;
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
          margin: 1.4rem 0 1.1rem;
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
          margin-bottom: 1.4rem;
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

export default Signup;