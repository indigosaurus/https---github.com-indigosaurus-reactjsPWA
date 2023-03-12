import logo from './logo.svg';
import './index.css';

function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Abi's App, {subject}!</p>
      </header>
    </div>
  );
}

export default App;
