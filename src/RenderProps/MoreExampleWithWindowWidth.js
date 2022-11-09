import React, {useEffect, useState} from 'react';

const MoreExampleWithWindowWidth = ({children}) => {
    const [widthWindow, setWidthWindow] = useState(0)
    useEffect(() => {
        window.addEventListener('resize', resize)

        function resize({target}) {
            setWidthWindow(target.innerWidth)
        }

        return () => window.removeEventListener('resize', resize)
    }, [])
    return (
        <div>
            {children(widthWindow)}
        </div>
    );
};

export default MoreExampleWithWindowWidth;