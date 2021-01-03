import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";

import {Category, PizzaBlock, Sort} from "../components";
import {setCategory} from "../redux/actions/filters";

const categoriesArr = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const typesArr =
    [{name: "популярности", type: "popular"}, {name: "цене", type: "price"}, {name: "алфавиту", type: "alphabet"}];

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.pizzas);

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

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
                    pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>)
                }
            </div>
        </div>
    );
}

export default Home;
