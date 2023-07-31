import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import SelectCustom from '@/components/ui/select-custom';

import { historyTypeFullOptions } from '@/constants/history';
import { CREATE_HISTORY_SUCCESSFULLY } from '@/constants/message';

import {
  HistoryFilterDataForm,
  historyFilterFormSchema,
} from './HistoryFilterForm.schema';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { endOfMonth, startOfMonth } from 'date-fns';

export type HistoryFilterFormProps = {
  onSubmit: (data?: HistoryFilterDataForm) => void;
};

const HistoryFilterForm = ({ onSubmit }: HistoryFilterFormProps) => {
  const { id } = useParams();

  const form = useForm<HistoryFilterDataForm>({
    resolver: zodResolver(historyFilterFormSchema),
  });

  const _onSubmit = async (dataForm: HistoryFilterDataForm) => {
    try {
      if (!id) return;
      onSubmit(dataForm);
    } catch (error) {
      toast(CREATE_HISTORY_SUCCESSFULLY, { type: 'error' });
      onSubmit();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(_onSubmit)}>
        <FormField
          control={form.control}
          name="type"
          defaultValue={historyTypeFullOptions[0].value}
          render={({ field }) => {
            return (
              <FormItem className="mb-common">
                <Label>type:</Label>
                <FormControl>
                  <SelectCustom
                    defaultValue={field.value}
                    options={historyTypeFullOptions}
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
          name="range"
          defaultValue={{
            from: startOfMonth(new Date()),
            to: endOfMonth(new Date()),
          }}
          render={({ field }) => {
            return (
              <FormItem className="mb-common">
                <Label>Start - End:</Label>
                <FormControl>
                  <DatePickerWithRange
                    date={field.value}
                    onChangeDate={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button disabled={false} type="submit">
          Submit filter
        </Button>
      </form>
    </Form>
  );
};

export default HistoryFilterForm;
