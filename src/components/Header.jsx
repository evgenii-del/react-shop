import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {Button} from "./../components";
import logoSvg from "./../assets/img/donut.svg";

const Header = () => {
    const {totalPrice, totalCount} = useSelector(({carts}) => carts);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo"/>
                        <div>
                            <h1>Donut</h1>
                            <p>самые вкусные пончики</p>
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
