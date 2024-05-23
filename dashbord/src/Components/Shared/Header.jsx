import React, { useEffect, useState } from "react";
import { getcondidatbynotification } from "../../Services/CondidatService";
import { updatenotification } from "../../Services/NotificationService";
import { Link, useNavigate } from "react-router-dom";
import Image from "./Image";
import { Badge } from "@mui/material";
const baseUrl = process.env.REACT_APP_API;

function Header() {
  const [condidats, setCondidat] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getcondidatbynotification();
        // Vérifiez que la réponse est au bon format
        if (response && response.condidats) {
          setCondidat(response.condidats);
        } else {
          setCondidat([]); // Définir comme tableau vide si la réponse n'est pas au bon format
        }
      } catch (error) {
        console.error("Error fetching condidat:", error);
        setCondidat([]); // Définir comme tableau vide en cas d'erreur
      }
    };

    fetchData();
  }, []);
  const handleMarkAllAsRead = async () => {
    navigate("/postcondidat");

    try {
      const response = await updatenotification();
      if (response.success) {
        // Re-fetch the data to update the list
        const updatedResponse = await getcondidatbynotification();
        if (updatedResponse && updatedResponse.condidats) {
          setCondidat(updatedResponse.condidats);
        }
      }
    } catch (error) {
      console.error("Error updating notifications:", error);
    }
  };
  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <a className="d-flex" 
              >
                <img style={{height:"40px"}} alt="Boite des emplois" src="assets/imgs/page/dashboard/cat.png" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="block-signin">
              <Link to="/post" className="btn btn-default icon-edit hover-up">
                Poster une offre
              </Link>

              <div className="dropdown d-inline-block">
                <a
                  id="dropdownNotify"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-display="static"
                >
                  <Badge
                    className=" cursor-pointer"
                    color="secondary"
                    badgeContent={condidats.length}
                    max={999}
                  >
                    <div className="btn btn-notify"></div>
                  </Badge>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                  aria-labelledby="dropdownNotify"
                >
                  {condidats.map((condidat) => (
                    <div
                      className="dropdown-item"
                      key={condidat._id}
                      onClick={() => {
                        handleMarkAllAsRead();
                      }}
                    >
                      {condidat.notifications.map((notification) => (
                        <div key={notification?._id}>
                          <p>{notification?.message}</p>
                        </div>
                      ))}
                      <p>
                        {condidat.userID?.name} {condidat.userID?.lastname}
                      </p>
                      <p>{condidat?.titrePoste}</p>
                    </div>
                  ))}
                </ul>
              </div>

              <Image />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
