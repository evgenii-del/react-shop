import {useState} from "react";
import classNames from "classnames";

const PizzaBlock = (props) => {
    const {id, imageUrl, name, types, sizes, price, addPizzaToCart, countOfAddedPizza} = props;
    const [selectedType, setSelectedType] = useState(types[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const typesArr = ["тонкое", "традиционное"];
    const sizesArr = [26, 30, 40];

    const handleSelectType = index => {
        setSelectedType(index);
    }

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
            type: typesArr[selectedType]
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
                        typesArr.map((type, index) =>
                            <li onClick={() => handleSelectType(index)}
                                className={classNames({
                                    "active": selectedType === index,
                                    "disabled": !types.includes(index)
                                })} key={index}>{type}</li>)
                    }
                </ul>
                <ul>
                    {
                        sizesArr.map((size) =>
                            <li onClick={() => handleSelectSize(size)}
                                className={classNames({
                                    "active": selectedSize === size,
                                    "disabled": !sizes.includes(size)
                                })} key={size}>{size} см.</li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
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
