import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { config } from "../../config";

const LoginPage = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setValue] = useState(" ");
  const [searchParams] = useSearchParams();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await axios.get(
        `${config.backendUrl}/authorizationUrl?email=${inputValue}`
      );
      if (data.data.message) window.location.href = data.data.message;
      
    } catch (error) {
      console.log("error")
    }


  };
  
  useEffect(()=>{
    const code = searchParams.get('code'); // Extract 'code' from URL params
    console.log("useefffect")
    fetchToken()
    if (!code) {

      return;
    }
  })
  const fetchToken=async()=>{
    try {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const scope = params.get('scope');
        console.log({scope})
        const data = await axios.post(
            `http://localhost:4200/api/token`,{code}
        );
navigate("/home")
    } catch (error) {
        console.log("error in axios")
    }

}
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <img src="" alt="login image"/>
          <input
            type="email"
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
