import './css/App.css';
import './components/Sidebar'
import './components/Main'

function App() {
  return (
    <div className="App">
      <div className="sidebar-div">
        <Sidebar />
      </div>
      <div className="main-div">
        <Main />
      </div>
    </div>
  );
}

export default App;
