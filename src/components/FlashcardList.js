import React from 'react'
import Flashcard from './Flashcard';

import Grid from '@mui/material/Grid';
export default function FlashcardList({flashcards}) {
    return (
        
        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} container rowSpacing={2} >
            {flashcards.map((f,i)=>(<Flashcard flashcard={f} key={i}></Flashcard>))}
            </Grid>
           
    );
}
