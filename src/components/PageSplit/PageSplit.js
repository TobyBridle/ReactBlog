import React, { useState, useEffect } from 'react'
import "./PageSplit.css";

function PageSplit({size="narrow", pos="bottom", thickness="slim", transform={at: null, axis: null, pos: null, size: null}}) {

    const [t, setTransform] = useState(Infinity);

    useEffect(() => {

        const handleSplitResize = ({target}) => {
            let c = transform.axis.toLowerCase() === "x" ? target.innerWidth : target.innerHeight;
            setTransform(c);
        }

        // Make sure transform is valid
        if(Math.max(window.innerHeight, window.innerWidth) && Object.entries(transform).length === Object.entries(transform).filter(val => (val[1] > 0 || val[1].length > 0) && val[1] !== null).length)
        {
            window.addEventListener("resize", handleSplitResize);
        }

        return () => {
            window.removeEventListener("resize", handleSplitResize);
        }

    }, []);

    return (
        <>
        {
            t <= transform.at
            ? <hr className={`pageSplit ${transform.pos} ${transform.size} ${thickness}`}/>
            : <hr className={`pageSplit ${pos} ${size} ${thickness}`}/>
        }
        </>
    )
}

export default PageSplit
