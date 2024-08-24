const ResetPassword = ({ FaUnlock, Button }) => {
  return (
    <>
      <div className="signin-form">
        <h3 className="form-title">Create a new Password</h3>
        <p className="forgot-p">
          Please choose a password that hasn't been used before. Must be at
          least 8 characters
        </p>
        <form className="register-form" id="login-form">
          <div className="form-group">
            <label htmlFor="newpassword">
              <FaUnlock />
            </label>
            <input
              required
              type="password"
              name="newpassword"
              id="newpassword"
              placeholder="Set new password *"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmnewpassword">
              <FaUnlock />
            </label>
            <input
              required
              type="password"
              name="confirmnewpassword"
              id="confirmnewpassword"
              placeholder="Confirm new password *"
            />
          </div>

          <div className="form-group form-button">
            <Button name="Reset password" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
