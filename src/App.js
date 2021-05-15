import './css/App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'

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
