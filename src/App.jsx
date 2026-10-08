import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>


      <div className="max-w-4/6 justify-self-center">
        <div className="sticky top-0  ">
          <Navbar />

        </div>
        <div className="" >
          <Main />

        </div>
      </div>
    </>
  );
}

export default App;
