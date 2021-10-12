import React from "react";
import CoffeeMeContext from "./CoffeeMeContext";

const CoffeeMeContextWrapper:React.FC = ({children}) => {
    return (
        <div>
            <CoffeeMeContext.Provider>
                {children}
            </CoffeeMeContext.Provider>
        </div>
    )
}

export default CoffeeMeContextWrapper