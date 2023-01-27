import './App.css';
import Web3 from 'web3';
import Eth from 'web3-eth';

function App() {
  let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  let arr1;
  function test(){
    if (typeof window.ethereum !== 'undefined') {
      // Instance web3 with the provided information
      web3 = new Web3(window.ethereum);
    try {
      // Request account access
      web3.eth.getAccounts()
      .then(res=>{
        arr1 = res;
      })
      return true
    } catch(e) {
      // User denied access
      return false
    }
  }
  }
  function test2(){
    web3.eth.getBalance(arr1[0])
    .then(res => console.log(res));
  }
  function test3(){
    web3.utils.fromWei('1', 'ether');
    // First parameter is the quantity, the second is to type to convert into.
  }
  return (
    <div className="App">
      <button onClick={test}>Balance</button>
      <button onClick={test2}>See Accounts</button>
      <button onClick={test3}>Convert</button>
    </div>
  );
}

export default App;
