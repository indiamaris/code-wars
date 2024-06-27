import { HomeCard } from "./home-card";

export const HardCard = () => {
    return ( 
          <HomeCard to={'easy'} imgSrc={"src/assets/emergency_heat_24dp_FILL0_wght400_GRAD0_opsz24.svg"} imgAlt={'fire'} title={'Hard'} classnames={'card-hard'} />
       
     );
}