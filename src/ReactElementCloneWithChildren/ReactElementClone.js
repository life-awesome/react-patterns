import React, {Children, cloneElement} from 'react';

const ReactElementClone = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

ReactElementClone.Parent = function ({children}) {
    const childrens = Children.toArray(children)
    return <div>
        {Children.map(childrens, (child, index) => cloneElement(child, {id: index}))}
    </div>
}

ReactElementClone.Child = function ({children, id}) {
    return <div>
        {children}  {id}
    </div>
}

export default ReactElementClone;