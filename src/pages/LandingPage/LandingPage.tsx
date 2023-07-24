import LoginForm from '@/components/forms/LoginForm';

const LandingPage = () => {
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
        <LoginForm />
      </div>
    </div>
  );
};

export default LandingPage;
