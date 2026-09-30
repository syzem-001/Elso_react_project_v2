import React from 'react'
import { quotesFromDatabase } from '../data';
import { expendidindex } from '../utils';

 export const Myquotes = ({dicenumber}) => {
    console.log(dicenumber);
    const generateRandindex=()=>Math.floor(Math.random()*(6-1+1))+1
    console.log(generateRandindex);
    const qoute = quotesFromDatabase[expendidindex(dicenumber)]
    

  return (
    <div>
        {qoute}
    </div>
  )
}

