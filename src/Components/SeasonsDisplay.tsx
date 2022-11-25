import React, { FC } from "react";
import './SeasonsDisplay.css'

interface location {
    latitude :React.ReactNode | React.ReactNode[]
}
interface seasons {
    season:object
}

const SeasonConfig : any = {
    summer : {
        text : "Let's hit the beach!",        
        iconName : 'sun'
    },
    winter : {
        text : "Burrrrr it's winter",
        iconName :'snowflake'
    }
}

const getSeason = (lat:number,month:number) :string => {
    if(month>2 && month<9)
    {
       return  lat>0 ? 'summer' : 'winter'
    }
    else {
        return lat>0 ? 'winter' : 'summer'
    }

}
const SeasonsDisplay : FC <location> = ({latitude}) => {
const season:string = getSeason(Number(latitude),new Date().getMonth());
const {text,iconName}  = SeasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
            </div>
    )
}

export default SeasonsDisplay;

