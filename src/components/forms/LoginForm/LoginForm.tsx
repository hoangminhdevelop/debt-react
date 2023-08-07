import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Routers } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, loginSchema } from './LoginForm.schema';
import { login } from '@/services/authService';

const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess() {
      navigate(Routers.Home);
    },
  });

  const onSubmit = (formValues: LoginFormSchema) => {
    mutate(formValues);
  };

  return (
    <Form {...form}>
      <h1 className="mb-common">Login</h1>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-2">
              <Label>Username</Label>
              <FormControl>
                <Input placeholder="Enter your username or email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-2">
              <Label>Password</Label>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mb-common">Submit</Button>
        <p className="text-base">
          You haven't an account.&nbsp;
          <Link className="text-blue-500" to={Routers.Register}>
            Register now
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
