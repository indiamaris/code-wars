import { RoundUpToFiveUI } from "../../challenge/round-up-to-next-multiple-of-five/round-up-to-next-multiple-of-five.UI";
import App from '../App';


export const routes = [
  {
    path: "/",
    element: <App />,
 
    // children: [
    //   {
    //     path: "round-up-five",
    //     element: <RoundUpToFiveUI />,
    //   }
    // ],
  },
   {
        path: "round-up-five",
        element: <RoundUpToFiveUI />,
      }

];
