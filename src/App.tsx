import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsConfig from "./aws-exports";
import AppRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <AppRoutes user={user} signOut={signOut} />
            <ToastContainer />
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
