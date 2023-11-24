import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './components/CustomNavbar';
import MyCard from './components/MyCard';
import Foto from './components/Foto';

function App() {
  return (
    <div>
      <CustomNavbar />
      <MyCard />
      <Foto />
    </div>
  );
}

export default App;
