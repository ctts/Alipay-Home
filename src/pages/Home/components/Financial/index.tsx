import FinancialCard from './components/FinancialCard';
import GiveHimCredit from './components/GiveHimCredit';

export default function Financial() {
  return (
    <>
      <h3>数字金融</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FinancialCard />
        <GiveHimCredit />
      </div>
    </>
  );
}
