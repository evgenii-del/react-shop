import {useState} from "react";
import classNames from "classnames";


const PizzaBlock = props => {
    const {id, imageUrl, name, sizes, price, addPizzaToCart, countOfAddedPizza} = props;
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const sizesArrTitles = ["маленький", "средний", "большой"];
    const sizesArr = [0, 1, 2];

    const handleSelectSize = index => {
        setSelectedSize(index);
    }

    const handleAddPizzaToCart = () => {
        const pizzaObj = {
            id,
            name,
            imageUrl,
            price,
            size: selectedSize,
        }
        addPizzaToCart(pizzaObj);
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        sizesArr.map((size) =>
                            <li onClick={() => handleSelectSize(size)}
                                className={classNames({
                                    "active": selectedSize === size,
                                    "disabled": !sizes.includes(size)
                                })} key={size}>{sizesArrTitles[size]}</li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} грн.</div>
                <div className="button button--outline button--add"
                     onClick={handleAddPizzaToCart}>
                    <span>Добавить</span>
                    {countOfAddedPizza && <i>{countOfAddedPizza}</i>}
                </div>
            </div>
        </div>
    );
}

export default PizzaBlock;
