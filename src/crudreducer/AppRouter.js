import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import CrudReducer from "./CrudReducer";
import Login from "./Login";
const AppRouter = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={CrudReducer} />
            </Switch>
        </Router>
    )
}

export default AppRouter;