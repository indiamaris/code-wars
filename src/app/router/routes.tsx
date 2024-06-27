import { EasyChallengesPage } from "../../challenge/easy/easy";
import { RoundUpToFiveUI } from "../../challenge/round-up-to-next-multiple-of-five/round-up-to-next-multiple-of-five.UI";
import {App} from '../App';
import { HardChallengesPage } from '../../challenge/hard/hard';
import { MediumChallengesPage } from "../../challenge/medium/medium";


export const routes = [
  {
    path: "/",
    element: <App />,
 
  
  },
  {
            path: "easy",
    element: <EasyChallengesPage />,
          children: [
      {
        path: "round-up-five",
        element: <RoundUpToFiveUI />,
      }
    ],

  },
    {
            path: "medium",
        element:  <MediumChallengesPage />,

  },
    {
            path: "hard",
        element: <HardChallengesPage />,

  },
   {
        path: "round-up-five",
        element: <RoundUpToFiveUI />,
      }

];
