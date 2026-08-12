const SignUp = ({ onSuccess }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="Auth-container">
      <h2 className="signup-title">Create Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input className="signup-input" type="text" placeholder="Enter username" />
        <input className="signup-input" type="email" placeholder="Enter email" />
        <input className="signup-input" type="password" placeholder="Enter password" />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;