import { useState, useEffect } from 'react';

/* Scripts ---------------------------*/
import { mq } from './media_queries.js';

const useMediaQuery = () => {

    const [isSmall, isSmallUpdate] = useState(true);
    const [isTablet, isTabletUpdate] = useState(false);
    const [isDesktop, isDesktopUpdate] = useState(false);
    const [isUltrawide, isUltrawideUpdate] = useState(false);

    useEffect(() => {

        const checkWindowSize = () => {

            let isGtSmall = window.matchMedia(mq.tablet).matches;
            let isGtTablet = window.matchMedia(mq.desktop).matches;
            let isGtDesktop = window.matchMedia(mq.ultrawide).matches;

            isSmallUpdate(!isGtSmall);
            isTabletUpdate(isGtSmall && !isGtTablet);
            isDesktopUpdate(isGtTablet && !isGtDesktop);
            isUltrawideUpdate(isGtDesktop);
        }

        // When page first loads
        checkWindowSize();

        // Listen for Window Resize
        window.addEventListener('resize', checkWindowSize);
        
        // clean up function
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    }, []);

    return {
        isSmall: isSmall,
        isTablet: isTablet,
        isDesktop: isDesktop,
        isUltrawide: isUltrawide,
    }
}

export default useMediaQuery;