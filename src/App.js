import './App.css';

function App() {

  function handleOnClick(port) {
    // e.preventDefault();
    console.log(port);
    window.location.href="http://localhost:"+port;
  }

  function openSasCloud(){
    window.location.href="https://www.pdesas.org/Profile/Account/Login"
  }

  function openTableauCloud(){
    window.location.href="https://www.tableau.com/products/linux"
  }
  var windowFeatures = "menubar=yes,toolbar=yes, location=yes,resizable=yes,scrollbars=yes,status=yes";
  function openTerminal(port, terminal_port){
    window.open("http://localhost:"+port+"/terminals/"+terminal_port, "_windowname", windowFeatures)
  }
  

  return (
    <div>
      <div>
        <button onClick={() => handleOnClick(10001)}> RStudio 
        </button>
        <button onClick={() => handleOnClick(6080)}> Spyder </button>
        <button onClick={openSasCloud}> IBM SAS </button>
        <button onClick={() => handleOnClick(10000)}>  Git </button>
        <button onClick={() => handleOnClick(10000)}> Jupyter Notebook </button>
        <button onClick={() => handleOnClick(6901)}>  Orange </button>
        <button onClick={() => handleOnClick(8443)}> Visual Studio Code IDE </button>
      </div>
      
      <div>
          <button onClick={() => openTerminal(9433, 1)}> Apache Hadoop </button>
          <button onClick={() => openTerminal(9433, 2)}> Apache Spark </button>
          <button onClick={openTableauCloud}> Tableau </button>
          <button onClick={() => handleOnClick(9000)}> SonarQube & SonarScanner </button>
          <button onClick={() => handleOnClick(9432)}> TensorFlow </button>
          <button onClick={() => handleOnClick(9090)}> Markdown </button>
      </div>
      
    </div>
  );
}

export default App;
