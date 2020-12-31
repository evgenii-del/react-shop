import {Category, PizzaBlock, Sort} from "../components";

const Home = (props) => {
    const {pizzas} = props;

    return (
        <div className="container">
            <div className="content__top">
                <Category selectCategory={(category) => console.log(category)}
                          categories={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
                <Sort types={["популярности", "цене", "алфавиту"]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>)
                }
            </div>
        </div>
    );
}

export default Home;
