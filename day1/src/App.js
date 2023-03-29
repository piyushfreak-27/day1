import './App.css';

function App() {
  const language ="C++";
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>
          Let me see the output of {language}
        </h1>
        <button onClick={window['alertMsg1']}>Click to call msgAlert</button>
      </header>
    </div>
  );
}

export default App;
