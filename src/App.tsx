import React, { useState } from 'react';
import './App.scss';

type Currency = {
  id: number;
  name: string;
  isActive: boolean;
}

const currencies: Currency[] = [
  {
    id: 1,
    name: 'EUR',
    isActive: false,
  },
  {
    id: 2,
    name: 'PLN',
    isActive: false,
  },
  {
    id: 3,
    name: 'GEL',
    isActive: false,
  },
  {
    id: 4,
    name: 'DKK',
    isActive: false,
  },
  {
    id: 5,
    name: 'CZK',
    isActive: false,
  },
  {
    id: 6,
    name: 'GBP',
    isActive: false,
  },
  {
    id: 7,
    name: 'SEK',
    isActive: false,
  },
  {
    id: 8,
    name: 'USD',
    isActive: false,
  },
  {
    id: 9,
    name: 'RUB',
    isActive: false,
  },
];

const App = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>(currencies);

  const activeCurrencies = selectedCurrencies.filter((
    currency,
  ) => ({ ...currency, isActive: true } && currency));

  return (
    <div className="App">
      <div className="container">
        <div className="first__row">
          {activeCurrencies.map((currency) => (
            <div
              key={currency.id}
              className={currency.isActive ? 'note' : 'hidden'}
            >
              {currency?.name.toLowerCase()}
              <div className="border">
                <button
                  className="remove__button"
                  onClick={() => (
                    setSelectedCurrencies(selectedCurrencies.map((curr) => (
                      curr.id === currency.id ? { ...curr, isActive: false } : curr))))}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="second__row">
          {selectedCurrencies.map(({ id, name, isActive }) => (
            <button
              key={id}
              className={!isActive ? 'add__button' : 'isActive'}
              onClick={() => setSelectedCurrencies(selectedCurrencies.map((currency) => (
                currency.id === id ? { ...currency, isActive: !isActive } : currency)))}
            >
              <div className="checkbox">{!isActive ? '' : 'X'}</div>
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
