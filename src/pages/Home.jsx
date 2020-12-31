import {Category, Sort} from "../components";

const Home = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Category selectCategory={(category) => console.log(category)}
                          categories={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
                <Sort types={["популярности", "цене", "алфавиту"]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
        </div>
    );
}

export default Home;
