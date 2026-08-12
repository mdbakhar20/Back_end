

const SignIn = ({ onBack }) => {
  return (
    <div className="Auth-container">
      <h2 className="auth-title">Sign In</h2>
      <div className="auth-form">
        <input className="auth-input" type="email" placeholder="Enter email" />
        <input className="auth-input" type="password" placeholder="Enter password" />
        <button className="auth-button">Sign In</button>
      </div>
      {/* {onBack && (
        <button type="button" className="auth-secondary-button" onClick={onBack}>
          Back to Sign Up
        </button>
      )} */}
    </div>
  );
};

export default SignIn;