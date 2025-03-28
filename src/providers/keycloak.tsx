import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

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
        // Try to load token from localStorage
        const storedToken = localStorage.getItem("keycloak-token");
        const storedRefreshToken = localStorage.getItem("keycloak-refresh-token");

        const authenticated = await keycloak.init({
          onLoad: "check-sso",
          pkceMethod: "S256",
          checkLoginIframe: false,
          token: storedToken || undefined,
          refreshToken: storedRefreshToken || undefined,
        });

        if (authenticated) {
          console.log("Authenticated with token:", keycloak.token);
          localStorage.setItem("keycloak-token", keycloak.token || "");
          localStorage.setItem("keycloak-refresh-token", keycloak.refreshToken || "");
          // navigate("/dashboard");
        } else {
          console.log("Not authenticated");
          navigate("/");
        }
      } catch (error) {
        console.error("Keycloak initialization failed", error);
        // navigate("/error");
      } finally {
        setIsInitialized(true);
      }
    };

    if (!isInitialized) {
      initialize();
    }
  }, [navigate, isInitialized]);

  useEffect(() => {
    if (keycloak.authenticated) {
      const refreshInterval = setInterval(async () => {
        try {
          const refreshed = await keycloak.updateToken(30); // Refresh token if it's expiring in 30 seconds
          if (refreshed) {
            localStorage.setItem("keycloak-token", keycloak.token || "");
            localStorage.setItem("keycloak-refresh-token", keycloak.refreshToken || "");
            console.log("Token refreshed:", keycloak.token);
          }
        } catch (error) {
          console.error("Failed to refresh token", error);
          keycloak.logout();
        }
      }, 60000); // Check every 60 seconds
  
      return () => clearInterval(refreshInterval);
    }
  }, [keycloak.authenticated]);

  if (!isInitialized) {
    return <div>Loading authentication...</div>;
  }

  return <Outlet />;
};

export default KeycloakProvider;
