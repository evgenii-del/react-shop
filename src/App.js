import {useEffect} from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux';

import {Header} from "./components";
import {Cart, Home} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();

    window.test = () => {
        axios.get("http://localhost:3001/pizzas").then(({data}) => {
            dispatch(setPizzas(data));
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/pizzas").then(({data}) => {
            dispatch(setPizzas(data));
        })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
            </div>
        </div>
    );
}

export default App;
