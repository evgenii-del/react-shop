import {memo} from "react";

const Category = memo(props => {
    const {categories, activeCategory, selectCategory} = props;

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => <li onClick={() => selectCategory(index)}
                                                            className={activeCategory === index ? "active" : undefined}
                                                            key={`${category}_${index}`}>{category}</li>)
                }
            </ul>
        </div>
    )
})

export default Category;
