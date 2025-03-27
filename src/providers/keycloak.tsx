import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

// Initialize Keycloak instance
const keycloak = new Keycloak(keycloakConfig);

export const useKeycloak = () => {
  return {
    keycloak,
    isAuthenticated: keycloak.authenticated || false,
    token: keycloak.token || "",
  };
};

const KeycloakProvider = () => {
  const navigate = useNavigate();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        const authenticated = await keycloak.init({
          onLoad: "check-sso",
          pkceMethod: "S256",
          checkLoginIframe: false,
        });

        if (authenticated) {
          console.log("Authenticated with token:", keycloak.token);
          navigate("/dashboard");
        } else {
          console.log("Not authenticated");
          navigate("/");
        }
      } catch (error) {
        console.error("Keycloak initialization failed", error);
        navigate("/error");
      } finally {
        setIsInitialized(true);
      }
    };

    if (!isInitialized) {
      initialize();
    }
  }, [navigate, isInitialized]);

  if (!isInitialized) {
    return <div>Loading authentication...</div>;
  }

  return <Outlet />;
};

export default KeycloakProvider;