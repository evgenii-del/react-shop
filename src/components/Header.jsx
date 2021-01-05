import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {Button} from "./../components";
import logoSvg from "./../assets/img/pizza-logo.svg";

const Header = () => {
    const {totalPrice, totalCount} = useSelector(({carts}) => carts);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Link to="/cart">
                    <Button totalPrice={totalPrice} totalCount={totalCount}/>
                </Link>
            </div>
        </div>
    )
}

export default Header;
