import './subscribed.css';
import useFetch from "../../hooks/useFetch";



function Subscribed() {
  
  const {data, loading, reFetch} = useFetch(`https://solscription-deployer-api.onrender.com/api/ownners/`)
  
  return (
    <div className="subscribed">
    </div>
  );
}

export default Subscribed;