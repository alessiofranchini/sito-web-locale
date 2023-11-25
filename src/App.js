import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './components/CustomNavbar';
import MyCard from './components/MyCard';
import Foto from './components/Foto';
import BarFooter from './components/BarFooter.jsx';

function App() {
  return (
    <div>
      <CustomNavbar />
      <MyCard />
      <Foto />
      <BarFooter />
    </div>
  );
}

export default App;
