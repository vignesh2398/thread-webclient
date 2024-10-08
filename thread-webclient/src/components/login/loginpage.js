import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { config } from "../../config";
import { asset } from "../../asset/login";
import "./loginPage.css"


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
  let code
  const fetchToken=async()=>{
    try {
        const params = new URLSearchParams(location.search);
         code = params.get('code');
        const scope = params.get('scope');
        const data = await axios.post(
            `${config.backendUrl}/token`,{code}
        );

navigate("/home")
    } catch (error) {
        console.log("error in axios")
    }

}
useEffect(()=>{
  const code = searchParams.get('code'); // Extract 'code' from URL params
  console.log("useefffect")
  fetchToken()
  if (code) {

    return;
  }
},[code])
  return (
    <div className="container">

        <form onSubmit={handleSubmit}>
          <div className="left-half">
          <img src={asset.login} alt="login image" />
          </div>

        </form>

    </div>
  );
};
export default LoginPage;
