export const formatAmountInCurrency = (amount, currency) => {
  console.log(currency);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  return formatter.format(amount).replace(/\u00a0/g, ' ');
};