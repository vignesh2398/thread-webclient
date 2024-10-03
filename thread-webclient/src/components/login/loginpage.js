import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setValue] = useState(" ");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${process.env.backendUrl}/authorizationUrl`);
    const data = await axios.get(
      `http://localhost:4200/api/authorizationUrl?email=${inputValue}`
    );
    if (data.data.message) window.location.href = data.data.message;

  };
  useEffect(()=>{
    const fetchToken=async()=>{
        try {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');
            const scope = params.get('scope');
            console.log({scope})
            const data = await axios.post(
                `http://localhost:4200/api/token`,{code}
            );
            if(data)
                navigate('/home');

        } catch (error) {
            console.log("error in axios")
        }

    }
    fetchToken()

 
  },[navigate])
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Login Page</h2>
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
