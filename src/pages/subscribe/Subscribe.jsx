import './subscribe.css';
import useFetch from "../../hooks/useFetch";
import solscription from '../../solscription.json';
import { useLocation } from 'react-router-dom';
import { useContractRead } from 'wagmi';



function Subscribe() {

  const location = useLocation();

  const contractAddress = location.pathname.split("/")[2];
  
  const {data, loading, reFetch} = useFetch(`https://solscription-deployer-api.onrender.com/api/subscriptions/${contractAddress}`)
  
  console.log(data)

  const contractReadName = useContractRead({
    address: contractAddress,
    abi: solscription.output.abi,
    functionName: '_name',
    chainId: data.chainID
  })

  const contractReadSymbol = useContractRead({
    address: contractAddress,
    abi: solscription.output.abi,
    functionName: '_symbol',
    chainId: data.chainID
})
  
  return (
    <div className="subscribe">
      <div className="subscribeContainer">
        {loading ? (
          "loading"
        ) : (
          <div>
            <p>{contractReadName.data}</p>
            <p>{contractReadSymbol.data}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Subscribe;