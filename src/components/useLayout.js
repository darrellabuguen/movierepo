import { useEffect, useState } from 'react'

const useLayout = () => {
    const [contWidth, setWidth] = useState("");
    const [contHeight, setHeight] = useState("");
    const [item_gap, setGap] = useState("");

    const setWidthAndGap = (width) => {
        let widthh, heightt, gap;
        if (width < 750) {
            widthh = "8rem";
            heightt = "10rem";
            gap = "0.2rem";
        } else {
            widthh = "15rem";
            gap = "1.5rem";
        }
        setWidth(widthh);
        setHeight(heightt);
        setGap(gap);
    };

    const checkScreen = () => {
        const { innerWidth } = window;
        setWidthAndGap(innerWidth);
    };

    useEffect(() => {
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    });

    return { contWidth, contHeight, item_gap };
}

export default useLayout