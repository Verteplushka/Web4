import React from 'react';

const Form = () => {
    return (
      <form>
        <div class="form-group">
          <label for="login">Login</label>
          <input type="text" class="form-control" id="login" placeholder='enter your login here'/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder='enter your password here'/>
        </div>

        <button type="button" class="btn btn-primary">Sign up</button>
        <button type="button" class="btn btn-primary">Log in</button>
      </form>  
    );
};

export default Form;