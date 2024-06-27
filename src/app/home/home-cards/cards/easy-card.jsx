import { HomeCard } from "./home-card";

export const EasyCard = () => {
    return ( 
            <HomeCard to={'easy'} imgSrc={"src/assets/water_drop_24dp_FILL0_wght400_GRAD0_opsz24.svg"} imgAlt={'waterdrop'} title={'Easy'} classnames={'card-easy'} />
     );
}