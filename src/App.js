import './App.css'; 
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Componants/NavBar';
import SendContract from './Componants/SendContract';
import ContractAccpeted from './Componants/ContractAccpeted';

function App() {
  return (<>
  <BrowserRouter>
  <NavBar/>
    <Routes>
          <Route exact path="/" element={<SendContract/>}/>
          <Route exact path="/contractaccpeted" element={<ContractAccpeted/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
