import './App.css';

const App = () => {
  const handleClick = event => {
    console.log(event.currentTarget.id);
  };
  return (
    <div>
      <button id="my-btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default App;
