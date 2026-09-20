import SignIn from "../components/auth/SignIn";

function LoginPage({ onLogin }) {
  return <SignIn onLogin={onLogin} />;
}

export default LoginPage;
