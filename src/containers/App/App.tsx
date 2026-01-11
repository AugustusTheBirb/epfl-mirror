import Navbar from '../../components/Navbar/Navbar'
import '../../index.css'
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"  
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Outlet />        
        </main>
        <Footer />         
      </div>
          </>
  );
};
export default App;