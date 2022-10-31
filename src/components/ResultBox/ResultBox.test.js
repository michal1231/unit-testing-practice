import ResultBox from "./ResultBox";
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testPLNToUSD = [
  { amount: 100, result: 'PLN 100.00 = $28.57' },
  { amount: 1, result: 'PLN 1.00 = $0.29' },
  { amount: 123, result: 'PLN 123.00 = $35.14' },
];

const testUSDToPLN = [
  { amount: 1, result: '$1.00 = PLN 3.50' },
  { amount: 100, result: '$100.00 = PLN 350.00' },
  { amount: 123, result: '$123.00 = PLN 430.50' },
];

const testSameCurrency = [
  { amount: 1, from: 'PLN', to: 'PLN', result: 'PLN 1.00 = PLN 1.00' },
  { amount: 50, from: 'PLN', to: 'PLN', result: 'PLN 50.00 = PLN 50.00' },
  { amount: 357, from: 'PLN', to: 'PLN', result: 'PLN 357.00 = PLN 357.00' },
  { amount: 1, from: 'USD', to: 'USD', result: '$1.00 = $1.00' },
  { amount: 50, from: 'USD', to: 'USD', result: '$50.00 = $50.00' },
  { amount: 357, from: 'USD', to: 'USD', result: '$357.00 = $357.00' },
];

const testNegative = [
  { amount: -1, from: 'PLN', to: 'USD' },
  { amount: -123, from: 'PLN', to: 'USD' },
  { amount: -1, from: 'USD', to: 'PLN' },
  { amount: -123, from: 'USD', to: 'PLN' },
  { amount: -123, from: 'PLN', to: 'PLN' },
]

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={100} from={'PLN'} to={'USD'} />);
  });

  for (const testObj of testPLNToUSD) {
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox amount={testObj.amount} from={'PLN'} to={'USD'} />);
      const resultDisplay = screen.getByTestId('result');
      expect(resultDisplay).toHaveTextContent(testObj.result);
      cleanup();
    });
  }

  for (const testObj of testUSDToPLN) {
    it('should render proper info about conversion when USD -> PLN', () => {
      render(<ResultBox amount={testObj.amount} from={'USD'} to={'PLN'} />);
      const resultDisplay = screen.getByTestId('result');
      expect(resultDisplay).toHaveTextContent(testObj.result);
      cleanup();
    });
  }

  for (const testObj of testSameCurrency) {
    it('should render proper info about conversion when converting to the same currency', () => {
      render(<ResultBox amount={testObj.amount} from={testObj.from} to={testObj.to} />);
      const resultDisplay = screen.getByTestId('result');
      expect(resultDisplay).toHaveTextContent(testObj.result);
      cleanup();
    });
  }

  for (const testObj of testNegative) {
    it('should render error when input less than zero', () => {
      render(<ResultBox amount={testObj.amount} from={testObj.from} to={testObj.to} />);
      const resultDisplay = screen.getByTestId('result');
      expect(resultDisplay).toHaveTextContent('Wrong value...');
      cleanup();
    });
  }
});