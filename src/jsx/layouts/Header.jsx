import React from 'react';

import HomeAnchor from '../components/homeAnchor';
import ThanksgivingAnchor from '../components/thanksgivingAnchor';
import RankAnchor from '../components/rankAnchor';
import LuxuryHallAnchor from '../components/luxuryHallAnchor';
import SpecialPriceAnchor from '../components/specialPriceAnchor';
import SsgTvAnchor from '../components/ssgTvAnchor';
import BrandAnchor from '../components/brandAnchor';

function Header() {
    return ( 
        <header>
            <div>
            </div>
            <nav>
               <HomeAnchor />
               <ThanksgivingAnchor />
               <SpecialPriceAnchor />
               <RankAnchor />
               <SsgTvAnchor />
               <LuxuryHallAnchor />
               <BrandAnchor />
            </nav>
        </header>
     );
}

export default Header;