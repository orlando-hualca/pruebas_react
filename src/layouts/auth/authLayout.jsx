import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/ace.png";
import { Toaster } from "sonner"

export const AuthLayout = () => {
  return (
    <div>
        <Toaster
            position="top-center"
            closeButton
        />
      <section>
        <div >
          <img src={Logo} alt="Gesty"/>
          <div>
            <h1>GESTY</h1>
            <p>Gestiona tu inventario</p>
          </div>
        </div>
        <Outlet />
      </section>
    </div>
  );
};
