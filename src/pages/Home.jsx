import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";

import {Category, PizzaBlock, PizzaBlockLoader, Sort} from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoriesArr = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const typesArr = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"}
];

const Home = () => {
    const dispatch = useDispatch();
    const {pizzas, isLoaded} = useSelector(({pizzas}) => pizzas);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = useCallback(type => {
        dispatch(setSortBy(type))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Category activeCategory={category}
                          selectCategory={onSelectCategory}
                          categories={categoriesArr}/>
                <Sort activeSortType={sortBy.type} selectSortBy={onSelectSortBy} types={typesArr}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>) :
                        Array(12).fill(0).map((_, index) => <PizzaBlockLoader key={index}/>)
                }
            </div>
        </div>
    );
}

export default Home;
