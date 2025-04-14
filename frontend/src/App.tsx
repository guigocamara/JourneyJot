import { Provider } from "./components/ui/provider";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function App() {
  return (
    <Provider>
      <div
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D")`,
          height: "100vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <div id="page1" className="text-9xl text-black-500">
          Welcome to Journey Jot!
        </div>
        <div className="card">
          <Link id="page1" className="link" to="/landing-page">
            Click Here to Explore Your Ultimate Vacation City
          </Link>
        </div>
        <Button className="button">Register</Button>
        <Button className="button">Sign In</Button>
      </div>
    </Provider>
  );
}

export default App;
