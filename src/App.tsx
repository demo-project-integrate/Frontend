import React from "react";
import { useKeycloak } from "./providers/keycloak";


const App: React.FC = () => {
    const { keycloak } = useKeycloak();
    return (
        <button onClick={() => keycloak.logout({redirectUri: "http://localhost:5173"})}>
            Welcome
        </button>
    );
};

export default App;
