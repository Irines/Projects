// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Header from "./Header.js"
import MainContent from "./MainContent.js"
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
