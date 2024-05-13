import React, { useEffect, useState,useRef } from "react";
import {
  getUserById,
  updateUserImage,
  updateUserById,
  
} from "../../Services/userApi";
import { Link } from 'react-router-dom';
import { useUser } from "../../auth/useUser";
export default function Image() {
    const [user, setUser] = useState({
        _id: "",
        name: "",
        lastname: "",
        image: "",
   
      });
      const userid = useUser();
      
      const baseUrl = process.env.REACT_APP_API;
    
    
      useEffect(() => {
        try {
          getUserById(userid._id).then((res) => {
            setUser(res);
          });
        } catch (error) {
          // Gérer les erreurs
          console.log(error);
        }
      }, []);
    
      
     
    
  return (
    <>
        <div className="member-login">
        {user && user.image && (
     <img
     src={baseUrl + user.image}
     alt="User Image"
   />
  )}
              <div className="info-member">
                {" "}
                <strong className="color-brand-1"> { user.name}   { user.lastname}</strong>
               
              </div>
            </div>
    </>
  )
}
