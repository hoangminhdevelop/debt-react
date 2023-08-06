import LoginForm from '@/components/forms/LoginForm';
import RegisterForm from '@/components/forms/RegisterForm';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { Routers } from '@/routes';
import { Navigate, useMatch } from 'react-router-dom';

const LandingPage = () => {
  const isMatchLoginPath = useMatch(Routers.Login);
  const isMatchRegisterPath = useMatch(Routers.Register);

  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={Routers.Home} />;
  }

  return (
    <div className="relative">
      <div className="w-full h-[100vh] md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/images/login-image.jpg"
          alt="login-image"
        />
      </div>
      <div className="absolute w-4/5 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-2/5 md:left-[75%]">
        {isMatchLoginPath && <LoginForm />}
        {isMatchRegisterPath && <RegisterForm />}
      </div>
    </div>
  );
};

export default LandingPage;
