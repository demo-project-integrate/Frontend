import React from "react";
import {keycloak} from "./providers/keycloak";


const App: React.FC = () => {
    return (
        <button onClick={() => keycloak.logout({redirectUri: "http://localhost:5173"})}>
            Welcome
        </button>
    );
};

export default App;
