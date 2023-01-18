const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-200">
      <svg className="spinner-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="spinner-circle" cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
};

export default Spinner;
