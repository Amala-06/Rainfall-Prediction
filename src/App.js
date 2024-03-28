import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState(NaN);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var message = '';

  const predict = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log(inputData);
      const response = await axios.get(`http://127.0.0.1:8000/rainfall/${inputData}`);
      console.log(response);
      setPrediction(response.data.data[0]);
      console.log(prediction);
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
    setLoading(false);
  };
  if(prediction)
  {
    message = "A disaster will occur"
  }
  else
  {
    message = "A disaster will not occur"
  }
 
  return (
    <div className="App">
      
      <header className="App-header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.S_ZTfQyPWy5tI0n4Tf4P3wHaHa&pid=Api&P=0&h=180"></img>
        <p>
          <b>DISASTER MITIGATION BY PREDICTING RAINFALL USING MACHINE LEARNING</b>
        </p>
      </header>

      <br></br><br></br><h1>SELECT A CITY:</h1>
      <div className="App-body">
        <select value={inputData} onChange={e => setInputData(e.target.value)}>
          <option value="None">None</option>
          <option value="Chennai">Chennai</option>
          <option value="Mayiladuthurai">Mayiladuthurai</option>
          <option value="Thoothukudi">Thoothukudi</option>
          <option value="Nagercoil">Nagercoil</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Kollam">Kollam</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Kannur">Kannur</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Nellore">Nellore</option>
          <option value="Mangaluru">Mangaluru</option>
          <option value="Udupi">Udupi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Daman">Daman</option>
          <option value="Alappuzha">Alappuzha</option>
          <option value="Kakinada">Kakinada</option>
        </select><br></br><br></br>


        <button onClick={predict}>Predict</button>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isNaN(prediction) ? <p className="prediction">Prediction: {message}</p> : <p></p>}
      </div><br></br><br></br><br></br><br></br><br></br>
      <marquee behavior="scroll" direction="left"><b>NATIONAL EMERGENCY NUMBER:112&nbsp;&nbsp;&nbsp;&nbsp;DISASTER MANAGEMENT:1078,01126701728&nbsp;&nbsp;&nbsp;&nbsp;NDRF HELPLINE NUMBER:9711077372,011-24363260&nbsp;&nbsp;&nbsp;&nbsp;AIDS HELPLINE:1097&nbsp;&nbsp;&nbsp;&nbsp;NATIONAL EMERGENCY NUMBER:112&nbsp;&nbsp;&nbsp;&nbsp;DISASTER MANAGEMENT:1078,01126701728&nbsp;&nbsp;&nbsp;&nbsp;NDRF HELPLINE NUMBER:9711077372,011-24363260&nbsp;&nbsp;&nbsp;&nbsp;AIDS HELPLINE:1097</b></marquee>
      <footer className="App-footer">
        <p>
          Copyright &copy; 2024 <br></br>
          Made By : Abhinav Sharma,Amala Shrivastava,Aman Tomar,Bhavika Santhosh
          
        </p>
      </footer>
    </div>
  );
}

export default App;
