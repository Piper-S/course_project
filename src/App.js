import './App.css';

function App() {
  var windowFeatures = "menubar=yes,toolbar=yes, location=yes,resizable=yes,scrollbars=yes,status=yes";

  function handleOnClick(port) {
    // e.preventDefault();
    console.log(port);
    window.open("http://localhost:"+port, "_blank");
  }

  function openSasCloud(){
    // window.location.href="https://www.pdesas.org/Profile/Account/Login"
    window.open("https://www.pdesas.org/Profile/Account/Login", "_blank",windowFeatures)
  }

  function openTableauCloud(){
    window.open("https://www.tableau.com/products/linux", "_blank",windowFeatures)
  }
  
  function openTerminal(port, terminal_port){
    window.open("http://localhost:"+port+"/terminals/"+terminal_port, "_windowname", windowFeatures)
  }
  

  return (
    <div>
      <h1> CS1660 Data Science Toolbox </h1>
      <ul>
        <li><button onClick={() => handleOnClick(10001)}> RStudio </button></li>
        {/* <li><button onClick={() => handleOnClick(6080)}> Spyder - deleted </button></li> */}
        <li><button onClick={openSasCloud}> IBM SAS </button></li>
        <li><button onClick={() => openTerminal(10000, 3)}>  Git </button></li>
        <li><button onClick={() => handleOnClick(10000)}> Jupyter Notebook </button></li>
        <li><button onClick={() => handleOnClick(6901)}>  Orange </button></li>
        <li><button onClick={() => handleOnClick(8443)}> Visual Studio Code IDE </button></li>
      </ul>
      <ul>
        <li><button onClick={() => handleOnClick(10009)}> Apache Hadoop </button></li>
        <li><button onClick={() => openTerminal(9433, 2)}> Apache Spark </button></li>
        <li><button onClick={openTableauCloud}> Tableau </button></li>
        <li><button onClick={() => handleOnClick(10010)}> SonarQube & SonarScanner* </button></li>
        <li><button onClick={() => openTerminal(9432, 1)}> TensorFlow </button></li>
        <li><button onClick={() => handleOnClick(9090)}> Markdown </button></li>
      </ul>
      
    </div>
  );
}

export default App;
