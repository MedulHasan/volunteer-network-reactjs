import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import EventProvider from './context/EventProvider';

function App() {
  return (
    <div className="App">
      <EventProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </EventProvider>
    </div>
  );
}

export default App;
