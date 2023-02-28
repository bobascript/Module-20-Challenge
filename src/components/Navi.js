import React from "react"
import '../index.css'

    function Navi(props) {
        const {
            categories = [],
            setCurrentCategory,
            currentCategory,
        } = props;
    
        return (
            <nav id="navigation">
                {categories.map((category) => (
                    <button id="buttons" key={category.name}
                        className={`${currentCategory.name === category.name && 'navActive'
                            }`} >
                        <span onClick={() => setCurrentCategory(category)}>
                            {category.name}
                        </span>
                    </button>
                ))}
            </nav>
        );
    }
    
export default Navi