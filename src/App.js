import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/loginpage';
import Indexpage from './components/Indexpage';
import Suggestionpage from './components/suggestionpage';
import Protected from './components/Protected';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={ <Loginpage /> } />
     <Route exact path="/indexpage" element={ <Protected Component={Indexpage}/> } /> 
     <Route exact path="/suggestion" element={ <Suggestionpage/> } />
     <Route exact path="/protected" element={<Protected  />} />
     
      </Routes>
      </BrowserRouter>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
