import clsx from 'clsx';
import { FormControl } from './form';
import { ScrollArea } from './scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

type SelectOption<V = any> = {
  label: string;
  value: V;
};

type SelectCustomProps<V = any> = {
  options: SelectOption<V>[];
  placeholder?: string;
  onChange: (value: V) => void;
  defaultValue?: V;
  className?: string;
};

const SelectCustom = ({
  options,
  placeholder,
  defaultValue,
  className,
  onChange,
}: SelectCustomProps) => {
  return (
    <div className={className}>
      <Select onValueChange={onChange} defaultValue={defaultValue}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <ScrollArea
            className={clsx('w-full', {
              'h-[200px]': options.length > 5,
            })}
          >
            {options.map((option) => {
              return (
                <SelectItem key={option.label} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            })}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCustom;
