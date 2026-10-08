import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

function Home(){
return(
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
)
}

export default Home;