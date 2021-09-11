import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./Login";
const AppRouter = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default AppRouter;

