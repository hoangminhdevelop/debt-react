import DebtItem from '@/components/debt/DebtItem';
import CreateDebt from '@/components/forms/CreateDebt';

// -- Components --

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Debt list</h1>
        <CreateDebt />
      </div>
      <div></div>
      <div>
        <div>
          <div>
            <h3>Debts</h3>
            <span>You have 10 debts</span>
          </div>
          <div>
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
            <DebtItem />
          </div>
        </div>
        <div>History</div>
      </div>
    </div>
  );
};

export default Home;
