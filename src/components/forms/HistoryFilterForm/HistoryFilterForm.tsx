import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

import {
  HistoryFilterDataForm,
  historyFilterFormSchema,
} from './HistoryFilterForm.schema';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { HISTORY_TYPE_ALL_OPTIONS, ORDER_OPTIONS } from '@/constants/options';
import { FilterHistory } from '@/services/historyService';

export type HistoryFilterFormProps = {
  onSubmit: (data: HistoryFilterDataForm) => void;
  defaultValue: FilterHistory;
};

const HistoryFilterForm = ({
  onSubmit,
  defaultValue,
}: HistoryFilterFormProps) => {
  const form = useForm<HistoryFilterDataForm>({
    resolver: zodResolver(historyFilterFormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex">
          <FormField
            control={form.control}
            name="order"
            defaultValue={defaultValue.order}
            render={({ field }) => {
              return (
                <FormItem className="mb-common w-1/2 md:w-1/3 mr-common">
                  <Label>Order:</Label>
                  <FormControl>
                    <SelectCustom
                      defaultValue={field.value}
                      options={ORDER_OPTIONS}
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
            name="type"
            defaultValue={defaultValue.type}
            render={({ field }) => {
              return (
                <FormItem className="mb-common w-1/2 md:w-1/3">
                  <Label>type:</Label>
                  <FormControl>
                    <SelectCustom
                      placeholder="Select type"
                      defaultValue={field.value}
                      options={HISTORY_TYPE_ALL_OPTIONS}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>

        <FormField
          control={form.control}
          name="range"
          defaultValue={{
            from: defaultValue.start,
            to: defaultValue.end,
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

        <Button type="submit">Submit filter</Button>
      </form>
    </Form>
  );
};

export default HistoryFilterForm;
