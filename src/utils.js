import { quotesFromDatabase } from "./data"

export const generateRandNr=(min,max)=>Math.floor(Math.random()*(max-min+1))+min

export const expendidindex = (dicenum)=> 
{
    const randomqouteindex =  Math.floor(Math.random()*(quotesFromDatabase.length))
     return (randomqouteindex + dicenum) % 10
}