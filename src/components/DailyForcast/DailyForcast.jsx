

import { DailyCard } from "../DailyCard/DailyCard"
import { DailyForcatContainer } from "./DailyForcatContainer"



export const DailyForcast = ({dailyForcast})=>{
  
    return(
        <DailyForcatContainer>
            
            {dailyForcast.data.DailyForecasts.map((day)=>(
              <DailyCard key={day.Date} day={day} ></DailyCard>  
            ))}
            
        </DailyForcatContainer>
    )
}