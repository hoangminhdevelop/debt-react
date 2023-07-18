import Button from '@/components/ui-kits/Button/Button';

const LandingPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Lorem Ipsum</h1>
        <h2 className="text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <div>
          <Button className="mt-2" size="lg">
            Register now 🤌
          </Button>
          <Button color="secondary" className="mt-2 ml-2" size="lg">
            Login now 👌
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
