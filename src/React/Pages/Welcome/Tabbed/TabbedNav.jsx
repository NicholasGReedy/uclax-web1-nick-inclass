import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import TabbedNavItem from './TabbedNavItem.jsx';

const TabbedNav = ({changeTabs, tabItems, chosenTab}) => {

console.log('TabbedNavItem tabItems', tabItems);

    return (
        <TabbedNavStyled className='TabbedNav'>
                {
                    tabItems.map((tabItem, idx) => {
                        return <TabbedNavItem 
                                    key={ idx } 
                                    tabItem={ tabItem } 
                                    changeTabs={ changeTabs }
                                    chosenTab={ chosenTab }
                                />
                    })
                }
        </TabbedNavStyled>
    );
}

export default TabbedNav;

const TabbedNavStyled = styled.div`
    
`;