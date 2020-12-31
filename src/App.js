import {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import axios from "axios";

import {Header} from "./components";
import {Cart, Home} from "./pages";

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(response => setPizzas(response.data.pizzas))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/" render={() => <Home pizzas={pizzas}/>}/>
                <Route exact path="/cart" component={Cart}/>
            </div>
        </div>
    );
}

export default App;
