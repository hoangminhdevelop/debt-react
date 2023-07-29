import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SelectCustom from '@/components/ui/select-custom';

import { CreateDebtSchema, createDebtSchema } from './CreateDebt.schema';
import debtService, { CreateDebtInput } from '@/services/debtService';
import { iconOptions } from '@/constants/icons';

const CreateDebt = () => {
  const form = useForm<CreateDebtSchema>({
    resolver: zodResolver(createDebtSchema),
    defaultValues: {
      debtName: '',
      icon: iconOptions[0].value,
    },
  });

  const { mutate } = useMutation({
    mutationKey: ['create-debt'],
    mutationFn: (input: CreateDebtInput) => debtService.createDebt(input),
  });

  const onSubmit = (data: CreateDebtSchema) => {
    console.log('data :>> ', data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create debt</Button>
      </DialogTrigger>

      <DialogContent className="top-[30%]">
        <DialogHeader>
          <DialogTitle>Create the new debt</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="debtName"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <Label>debtName</Label>
                  <FormControl>
                    <Input
                      placeholder="Enter your username or email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <Label>Debt icon</Label>
                  <SelectCustom
                    onChange={field.onChange}
                    defaultValue={field.value}
                    options={iconOptions}
                    placeholder="Select the icon for debt"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDebt;
