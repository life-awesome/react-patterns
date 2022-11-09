import React from "react";

function DefaultProps({name}) {
    console.log(name)
    return <div>
        DefaultProps
    </div>
}
DefaultProps.defaultProps = {
    name: "Roma"
}
export default DefaultProps