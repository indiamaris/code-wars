import { EasyCard } from "./cards/easy-card";
import { HardCard } from "./cards/hard-card";
import { MediumCard } from "./cards/medium-card";

export const GroupChallengesCardsHome = () => {
    return ( 
<div className="row gx-4 gy-5 card-levels pt-5  justify-content-center ">
        <EasyCard />
        <MediumCard />
        <HardCard/>                    
      </div>
     );
}