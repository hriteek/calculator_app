const ToggleButton = ({
  position,
  setPosition,
}: {
  position: number;
  setPosition: Function;
}) => {
  return (
    <>
      <div className='w-20 h-8 flex justify-between leading-8 rounded-full px-2'>
        {[1, 2, 3].map((i) => (
          <span key={i} className='inline-block'>
            {i}
          </span>
        ))}
      </div>
      <div className='w-20 h-8 bg-toggle flex justify-between items-center mx-1 px-1 leading-8 rounded-full'>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`${
              position !== i ? 'bg-toggle' : 'bg-key-accent-background'
            } cursor-pointer w-4 h-4 inline-block rounded-full`}
            onClick={() => setPosition(i)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ToggleButton;
