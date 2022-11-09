import React from 'react';

const ConditionalRendering = ({condition = null}) => {
    return (
        <div>
        {/*    if*/}
            {condition && <div>if</div>}
        {/*    unless*/}
            {condition || <div>unless</div>}
        {/*    if-else*/}
            {condition ? <div>if</div> : <div>else</div>}
        </div>
    );
};

export default ConditionalRendering;