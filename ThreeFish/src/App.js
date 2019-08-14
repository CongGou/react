import React from 'react';
import './App.css';
import RouterIndex from "./routers";
import Header from "./component/heard";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <main className={'main'}>
            <RouterIndex/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
