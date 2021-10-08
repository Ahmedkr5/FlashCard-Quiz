import React from 'react'
import Flashcard from './Flashcard';

import Grid from '@mui/material/Grid';
export default function FlashcardList({flashcards}) {
    return (
        
        <Grid container rowSpacing={2} >
            <div style={{justifyContent:'center',alignItems:'center'}} >
            {flashcards.map(f=>(<Flashcard flashcard={f} key={f.id}></Flashcard>))}</div>
            </Grid>
           
    );
}
