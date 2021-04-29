import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import HookComponent from './components/HookComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HookComponent />
    </div>
    </Provider>
  );
}

export default App;
