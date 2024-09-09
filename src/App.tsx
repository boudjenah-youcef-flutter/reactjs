import "./App.css";
import Navbar from "./componenet/navbar";
import { useState } from "react";
import LoginForm from "./componenet/login/loginform";
import Userdatails from "./componenet/userditals";

function App() {
  const companyName = "Youcef Code";
  const [isLoggedIn, setLogin] = useState(false);
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
    name: "",
  });

  return (
    <>
      <Navbar
        companynam={companyName}
        islogdin={isLoggedIn}
        setlogin={setLogin}
      />
      {isLoggedIn ? (
        <Userdatails user={userdata} />
      ) : (
        <LoginForm
          islogdin={isLoggedIn}
          setlogin={setLogin}
          userdata={userdata}
          setuserdata={setuserdata}
        />
      )}
    </>
  );
}

export default App;
