import { useState } from 'react';

import ToggleButton from '../components/ToggleButton';

function returnTheme(value: number): string {
  const ARR = ['theme-one', 'theme-two', 'theme-three'];
  return ARR[value - 1];
}

const Colors = {
  primary: {
    bg: 'bg-key-primary-background',
    text: 'text-primary',
    shadow: 'shadow-key-primary-shadow',
  },
  accent: {
    bg: 'bg-key-accent-background',
    text: 'text-accent',
    shadow: 'shadow-key-accent-shadow',
  },
  secondary: {
    bg: 'bg-key-secondary-background',
    text: 'text-secondary',
    shadow: 'shadow-key-secondary-shadow',
  },
};

const arrKeys = [
  { value: 7, span: 'col-span-1', color: Colors.secondary },
  { value: 8, span: 'col-span-1', color: Colors.secondary },
  { value: 9, span: 'col-span-1', color: Colors.secondary },
  { value: 'DEL', span: 'col-span-1', color: Colors.primary },
  { value: 4, span: 'col-span-1', color: Colors.secondary },
  { value: 5, span: 'col-span-1', color: Colors.secondary },
  { value: 6, span: 'col-span-1', color: Colors.secondary },
  { value: '+', span: 'col-span-1', color: Colors.secondary },
  { value: 1, span: 'col-span-1', color: Colors.secondary },
  { value: 2, span: 'col-span-1', color: Colors.secondary },
  { value: 3, span: 'col-span-1', color: Colors.secondary },
  { value: '-', span: 'col-span-1', color: Colors.secondary },
  { value: '.', span: 'col-span-1', color: Colors.secondary },
  { value: 0, span: 'col-span-1', color: Colors.secondary },
  { value: '/', span: 'col-span-1', color: Colors.secondary },
  { value: '*', span: 'col-span-1', color: Colors.secondary },
  { value: 'RESET', span: 'col-span-2', color: Colors.primary },
  { value: '=', span: 'col-span-2', color: Colors.accent },
];

const HomePage = () => {
  const [position, setPosition] = useState(1);
  const [values, setValues] = useState('');
  function handleClick(value: string | number) {
    if (value === 'RESET') {
      setValues('');
    } else if (value === '=') {
      setValues(eval(values));
    } else if (
      value === '+' ||
      value === '-' ||
      value === '/' ||
      value === 'x'
    ) {
      setValues(`${values} ${value} `);
    } else if (value === 'DEL') {
      setValues(`${values}`.slice(0, -1));
    } else {
      setValues(`${values}${value}`);
    }
  }
  return (
    <div className={returnTheme(position)}>
      <div className='bg-main mx-auto  h-screen flex justify-center items-center'>
        <main className='max-w-[350]'>
          <div className='flex justify-between items-center text-primary mb-8'>
            <h1 className='font-extrabold text-2xl'>calc</h1>
            <div className='flex items-end'>
              <h2 className='uppercase font-bold mr-3'>theme</h2>
              <div className='flex flex-col items-end'>
                <ToggleButton position={position} setPosition={setPosition} />
              </div>
            </div>
          </div>
          <div className='bg-screen px-4 pt-4 pb-6 rounded-lg'>
            <p className='h-6 text-primary font-extrabold text-2xl text-right'>
              {values}
            </p>
          </div>
          <div className='bg-toggle grid grid-rows-5 grid-cols-4 mt-8 rounded-lg gap-4 p-6'>
            {arrKeys.map(({ value, span, color }) => (
              <button
                key={value}
                className={`p-4 text-xl uppercase font-bold text-center ${color.bg} ${color.text} shadow-[0_5px_0px_rgb(0,0,0,0.3)] ${color.shadow} rounded-lg ${span}`}
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
