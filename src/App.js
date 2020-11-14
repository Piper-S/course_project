import './App.css';

function App() {

  function handleRStudioOnClick(port) {
    // e.preventDefault();
    console.log(port);
    window.location.href="http://localhost:"+port;
  }


  return (
    <div>
      <div>
        <button onClick={() => handleRStudioOnClick(10001)}> RStudio 
        </button>
        <button onClick={() => handleRStudioOnClick(6080)}> Spyder </button>
        <button > IBM SAS </button>
        <button> Git </button>
        <button onClick={() => handleRStudioOnClick(10000)}> Jupyter Notebook </button>
        <button> Orange </button>
        <button> Visual Studio Code IDE </button>
      </div>
      
      <div>
          <button> Apache Hadoop </button>
          <button> Apache Spark </button>
          <button> Tableau </button>
          <button> SonarQube & SonarScanner </button>
          <button> TensorFlow </button>
          <button> Markdown </button>
      </div>
      
    </div>
  );
}

export default App;
