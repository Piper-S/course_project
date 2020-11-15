import './App.css';

function App() {

  function handleRStudioOnClick(port) {
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
  

  return (
    <div>
      <div>
        <button onClick={() => handleRStudioOnClick(10001)}> RStudio 
        </button>
        <button onClick={() => handleRStudioOnClick(6080)}> Spyder </button>
        <button onClick={openSasCloud}> IBM SAS </button>
        <button> Git </button>
        <button onClick={() => handleRStudioOnClick(10000)}> Jupyter Notebook </button>
        <button onClick={() => handleRStudioOnClick(6901)}>  Orange </button>
        <button> Visual Studio Code IDE </button>
      </div>
      
      <div>
          <button> Apache Hadoop </button>
          <button> Apache Spark </button>
          <button onClick={openTableauCloud}> Tableau </button>
          <button> SonarQube & SonarScanner </button>
          <button onClick={() => handleRStudioOnClick(10003)}> TensorFlow </button>
          <button onClick={() => handleRStudioOnClick(9090)}> Markdown </button>
      </div>
      
    </div>
  );
}

export default App;
