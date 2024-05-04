import reactDOM from "react-dom/client";
import "../src/index.css"
import App from "../src/App";
import { AuthContext} from "./Components/Context/AuthContext/AuthContext";
import { AccountContext } from "./Components/Context/AccountContext/AccountContext";
import { TransactionsContext } from "./Components/Context/TransactionContext/TransactionsContext";


const createRoot = reactDOM.createRoot(document.getElementById("root"));


createRoot.render(
  <>
    <AuthContext>
      <AccountContext>
        <TransactionsContext>
          <App/>
        </TransactionsContext>
      </AccountContext>
    </AuthContext>  
  </>
)