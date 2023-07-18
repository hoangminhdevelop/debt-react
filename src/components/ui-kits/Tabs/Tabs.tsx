import clsx from 'clsx';
import React, { useState } from 'react';

export type TabItem = {
  label: string;
  value: string | number;
};

export type TabItems = TabItem[];

type TabsProps = {
  items: TabItems;
  onChange: (tab: TabItem, index: number, preTab: TabItem) => void;
};

const Tabs = ({ items, onChange }: TabsProps) => {
  const [active, setActive] = useState<number>(0);

  const _onChange = (tab: TabItem, index: number) => {
    onChange(tab, index, items[active]);
    setActive(index);
  };

  return (
    <ul className="flex border-[1px] border-disable border-solid rounded-md w-fit">
      {items.map((item, index) => {
        return (
          <li
            onClick={() => _onChange(item, index)}
            className={clsx(
              { 'bg-primary text-white': active === index },
              'px-2 py-1 cursor-pointer',
            )}
            key={index}
          >
            <a className="text-base">{item.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
