import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HistoryAmount } from './HistoryAmount';
import SelectCustom from '@/components/ui/select-custom';

import {
  CreateHistorySchema,
  createHistorySchema,
} from './CreateHistory.schema';
import { historyTypeOptions } from '@/constants/history';
import { HistoryType } from '@/types/history';
import { CreateHistoryInput, historyService } from '@/services/historyService';
import { CREATE_HISTORY_SUCCESSFULLY } from '@/constants/message';

const CreateHistory = () => {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<CreateHistorySchema>({
    resolver: zodResolver(createHistorySchema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['create-history'],
    mutationFn: historyService.createHistory,
  });

  const onSubmit = async (dataForm: CreateHistorySchema) => {
    if (!id) return;
    try {
      const input: CreateHistoryInput = { ...dataForm, debtId: +id };
      await mutateAsync(input);
      toast(CREATE_HISTORY_SUCCESSFULLY, { type: 'success' });
    } catch (error) {
      toast(CREATE_HISTORY_SUCCESSFULLY, { type: 'error' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create new history</Button>
      </DialogTrigger>

      <DialogContent className="top-[30%]">
        <DialogHeader>
          <DialogTitle>Create the new History</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="type"
              defaultValue={HistoryType.Increment}
              render={({ field }) => {
                return (
                  <FormItem className="mb-common">
                    <Label>Amount:</Label>
                    <FormControl>
                      <SelectCustom
                        defaultValue={field.value}
                        options={historyTypeOptions}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="amount"
              defaultValue={0}
              render={({ field }) => (
                <FormItem className="mb-common">
                  <Label>Amount:</Label>
                  <FormControl>
                    <HistoryAmount
                      value={String(field.value)}
                      onChange={(v) => field.onChange(+v)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem className="mb-common">
                  <Label>Reason:</Label>
                  <FormControl>
                    <Textarea placeholder="Enter the debt name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateHistory;
