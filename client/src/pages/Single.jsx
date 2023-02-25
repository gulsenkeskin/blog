import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Gülsen</span>
            <p>2 gün önce paylaşıldı</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit}></img>
            </Link>{" "}
            <img src={Delete}></img>
          </div>
        </div>
        <h1>
          pdfkojhsdfsjdfhksdjhfhsdıjfhbauhdhıdsjfjdsjgfhmgsdfgsdıgfdsgfjhmdfhsdjfhsdgfjdsg
        </h1>
        <p>
          fsdjhufjlsdjkfhjnsdıjfhknkjdsfnjsdjnfjmndmfnjkdfıouoeırjtjfdlşasşlfknhdklsnfıknsdkfnkkoksdfokdfkdslkmfplkmdsllkfsdk,
          fsdjhufjlsdjkfhjnsdıjfhknkjdsfnjsdjnfjmndmfnjkdfıouoeırjtjfdlşasşlfknhdklsnfıknsdkfnkkoksdfokdfkdslkmfplkmdsllkfsdk
        </p>
      </div>
      <div className="menu"> ö </div>
    </div>
  );
};

export default Single;
