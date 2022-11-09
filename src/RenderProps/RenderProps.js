import React, {useEffect, useState} from "react";

function RenderProps({children, url}) {
    const [{loading, error, data}, setData] = useState({loading: false, error: false, data: []})
    useEffect(() => {
        (async () => {
            if(!url) return <span>hui</span>;
            setData(p => ({...p, loading: true}))
            const todos = await fetch(url).then(data => data.json())
            setData(p => ({...p, data: todos, loading: false}))
        })()
    },[])

    return (
        <div>
            {children({loading, data, error, component: <div>huy</div>})}
        </div>
    )

}
export default RenderProps