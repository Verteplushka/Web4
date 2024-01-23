import Header from "./Header";
import Form from "./Form";

const LoginPage = () => {
  return (
    <div className="login-container">
      <Header name="Колбасин Влад" group="P3216" variant="81873" />
      <div className="container">
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
