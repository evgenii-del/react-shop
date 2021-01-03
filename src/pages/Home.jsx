import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";

import {Category, PizzaBlock, PizzaBlockLoader, Sort} from "../components";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoriesArr = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const typesArr =
    [{name: "популярности", type: "popular"}, {name: "цене", type: "price"}, {name: "алфавиту", type: "alphabet"}];

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.pizzas);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

    useEffect(() => {
        dispatch(fetchPizzas());
    }, [dispatch])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Category selectCategory={onSelectCategory}
                          categories={categoriesArr}/>
                <Sort types={typesArr}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? pizzas.map(pizza => <PizzaBlock key={pizza.id}
                                                               pizza={pizza}/>) : Array(12).fill(<PizzaBlockLoader/>)
                }
            </div>
        </div>
    );
}

export default Home;
