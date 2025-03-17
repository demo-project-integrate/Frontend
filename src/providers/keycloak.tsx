import Keycloak from "keycloak-js";
import { ReactNode } from "react";
import router from "../routes";

const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  };
export const keycloak = new Keycloak(keycloakConfig);

const KeycloakProvider = ({ children }: { children: ReactNode }) => {
  let isInitialized = false;

  const initializeKeycloak = () => {
    if (!isInitialized) {
      isInitialized = true;
      return keycloak.init({
        onLoad: "check-sso", // Silent session check without redirection
        checkLoginIframe: false, // Disables iframe-based auto-login
        enableLogging: true,
      });
    }
    return Promise.resolve(keycloak.authenticated);
  };

  initializeKeycloak()
    .then((authenticated) => {
      console.log("authenticated: ", authenticated);
      console.log("token: ", keycloak.token);
      if(!authenticated){
        router.navigate("/");
      }
    })
    .catch((error) => {
      console.error("Keycloak initialization failed", error);
    });

  console.log("Children: ", children);

  return children ;
};

export default KeycloakProvider;
