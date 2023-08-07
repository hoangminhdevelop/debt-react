import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { Routers } from '@/routes';
import { register, login } from '@/services/authService';
import { REGISTER_FAILED, REGISTER_SUCCESSFULLY } from '@/constants/message';
import { RegisterFormData, registerFormSchema } from './register-form-schema';

const RegisterForm = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: register,
  });

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      const data = await mutateAsync(formData);
      if (data.success) {
        toast(REGISTER_SUCCESSFULLY, { type: 'success' });
        await login({
          username: formData.username,
          password: formData.password,
        });
      }
      navigate(Routers.Home);
    } catch (error) {
      toast(REGISTER_FAILED, { type: 'error' });
    }
  };

  return (
    <Form {...form}>
      <h1 className="mb-common">Register</h1>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          defaultValue=""
          render={({ field }) => {
            return (
              <FormItem className="mb-common">
                <Label>Full name:</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="username"
          defaultValue=""
          render={({ field }) => {
            return (
              <FormItem className="mb-common">
                <Label>Username:</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          defaultValue=""
          render={({ field }) => {
            return (
              <FormItem className="mb-common">
                <Label>Password:</Label>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          defaultValue=""
          render={({ field }) => {
            return (
              <FormItem className="mb-common">
                <Label>Email:</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button className="mb-common" type="submit">
          Register
        </Button>

        <p className="text-base">
          You haven an account.&nbsp;
          <Link className="text-blue-500" to={Routers.Login}>
            Login now
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
