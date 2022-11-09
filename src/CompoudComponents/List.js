import React from "react";

function List({list, renderItemList, loadingHeader}) {
    return (
        <div>
            <div>
                {loadingHeader}
            </div>
            {list.length && list.map((todo, index) => renderItemList(todo, index))}
        </div>
    )
}
List.Title = function ({children}) {
    return <div>
        title
        <div>
            {children}
        </div>
    </div>
}
export default List
