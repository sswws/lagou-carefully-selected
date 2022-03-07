import { Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Shop from './core/Shop'
import Signin from "./core/Signin"
import Signup from "./core/Signup"

function Routes() {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
        </Switch>
    )
}

export default Routes