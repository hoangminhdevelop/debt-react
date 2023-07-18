import React from 'react';

// -- Components --
import Tabs, { TabItem } from '@/components/ui-kits/Tabs/Tabs';
import { mock } from './mock';
import DebtItem from '@/components/debt/DebtItem';

const tabs: TabItem[] = [
  {
    label: 'Debt list',
    value: 0,
  },
  {
    label: 'History',
    value: 1,
  },
];

const Home = () => {
  const [tabActive, setTabActive] = React.useState(tabs[0]);

  return (
    <div className="p-2 mt-2 flex gap-1 flex-wrap">
      {mock.map((debt, index) => {
        return <DebtItem key={index} {...debt} />;
      })}
    </div>
  );
};

export default Home;
