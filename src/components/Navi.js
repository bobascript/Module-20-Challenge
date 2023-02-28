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
                    <button key={category.name}
                        className={`${currentCategory.name === category.name && 'navActive'
                            }`} style={{border:"none",backgroundColor:"#445739",color:"#ffecd5",marginLeft:"17%",padding:"20px",borderRadius:"25px"}}>
                        <span onClick={() => setCurrentCategory(category)}>
                            {category.name}
                        </span>
                    </button>
                ))}
            </nav>
        );
    }
    
export default Navi