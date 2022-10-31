import { useState } from 'react';
import CurrencyForm from './../CurrencyForm/CurrencyForm';
import ResultBox from './../ResultBox/ResultBox';

const CurrencyBox = () => {
  const [data, setData] = useState({
    amount: undefined,
    from: 'PLN',
    to: 'PLN'
  });

  console.log('data.amount:', data.amount);

  const handleDataChange = data => {
    setData(data);
  }

  return (
    <main>
      <CurrencyForm action={handleDataChange} />
      {data.amount !== undefined ? <ResultBox {...data} /> : null}
    </main>
  );
};

export default CurrencyBox;