import './subscribe.css';
import useFetch from "../../hooks/useFetch";



function Subscribe() {
  
  const {data, loading, reFetch} = useFetch(`https://solscription-deployer-api.onrender.com/api/ownners/`)
  
  return (
    <div className="subscribe">
    </div>
  );
}

export default Subscribe;