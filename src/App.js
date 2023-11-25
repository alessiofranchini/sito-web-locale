import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './components/CustomNavbar';
import MyCard from './components/MyCard';
import Foto from './components/Foto';
import BarFooter from './components/BarFooter.jsx';
import ReservationForm from './components/ReservationForm.jsx';

function App() {
  return (
    <div>
      <CustomNavbar />
      <MyCard />
      <Foto />
      <ReservationForm />
      <BarFooter />
    </div>
  );
}

export default App;
