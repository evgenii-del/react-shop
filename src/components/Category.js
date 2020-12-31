import {useState} from "react";

const Category = (props) => {
    const {categories} = props;
    const [selectedCategory, setSelectedCategory] = useState(0);

    const onSelectCategory = (index) => {
        setSelectedCategory(index);
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => <li onClick={() => onSelectCategory(index)}
                                                            className={selectedCategory === index ? "active" : undefined}
                                                            key={`${category}_${index}`}>{category}</li>)
                }
            </ul>
        </div>
    )
}

export default Category;
