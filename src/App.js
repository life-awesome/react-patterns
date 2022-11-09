import React, {useEffect, useState} from 'react';
import {global} from "./global";
import List from "./CompoudComponents/List";
import RenderProps from "./RenderProps/RenderProps";
import ReactElementClone from "./ReactElementCloneWithChildren/ReactElementClone";
const App = () => {

    useEffect(() => {
        document.querySelector('style').innerHTML = global
    }, [])
    return (
        <div style={{width: 100, height: 50}} className={'box1'}>
            <div>
                {/*<RenderProps url={'https://jsonplaceholder.typicode.com/todos'}>*/}
                {/*    {({loading, error, data, component}) => {*/}
                {/*        if(loading) return <span>загрузка</span>*/}
                {/*        if(error) return <span>error</span>*/}
                {/*        return <>*/}
                {/*            <List.Title>*/}
                {/*                <List list={data} renderItemList={(todo, key) => <div key={key}>{todo.title}</div>}/>*/}
                {/*            </List.Title>*/}
                {/*        </>*/}
                {/*    }}*/}
                {/*</RenderProps>*/}
                <ReactElementClone.Parent>
                    <ReactElementClone.Child>
                        first child
                    </ReactElementClone.Child>
                    <ReactElementClone.Child>
                        second child
                    </ReactElementClone.Child>
                </ReactElementClone.Parent>
            </div>
        </div>
    );
};


export default App;
