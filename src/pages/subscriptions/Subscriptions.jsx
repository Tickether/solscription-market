import './subscriptions.css';
import useFetch from "../../hooks/useFetch";
import Navbar from '../../components/navbar/Navbar';



function Subscriptions() {
  
  const {data, loading, reFetch} = useFetch(`https://solscription-deployer-api.onrender.com/api/ownners/`)
  
  return (
    <div className="subscriptions">
      <Navbar />
      <div className="subscriptionsWrapper">
      </div>
    </div>
  );
}

export default Subscriptions;