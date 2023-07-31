import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { convertToVND } from '@/utils/currency';
import React, { useState } from 'react';

type HistoryAmountProps = {
  value: string;
  onChange: (v: string) => void;
};

const timesOption = [1000, 10000, 100000, 1000000] as const;

export const HistoryAmount = (props: HistoryAmountProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(props.value);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
  };

  const handleTime = (option: (typeof timesOption)[number]) => {
    setValue(String(+value * option));
    props.onChange(String(+value * option));
  };

  return (
    <div>
      {isEditing ? (
        <Input
          type="number"
          value={value}
          onChange={_onChange}
          placeholder="Enter amount"
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <Input
          value={convertToVND(+value)}
          type="text"
          onFocus={() => setIsEditing(true)}
          readOnly
        />
      )}

      <div className="mt-common">
        {timesOption.map((option) => {
          return (
            <Button
              type="button"
              onClick={() => handleTime(option)}
              className="mr-2"
              size="sm"
              key={option}
            >
              {convertToVND(option)}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
