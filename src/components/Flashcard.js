import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
const useStyles = makeStyles({
    Card:{
      width:'100%',
      minWidth:300,
        height:'100%',
        margin:"2%"
       
        
      },
      CardHeader:{
       textAlign:"left",

      } , 
        cardAction: {
        color:"green"
        
        }
});

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
const classes=useStyles(); 
console.log(flashcard)
  //onClick={() => setFlip(!flip)}
  /*  {flashcard.question}
        <div >
          {flashcard.options.map((option) => (
            <div >{option}</div>
          ))}
        </div>
      </div>
      <div>{flashcard.answer}</div>*/
  return (
    <ButtonBase 
    className={classes.cardAction}
    onClick={() => setFlip(!flip)} > 
    <Card className={classes.Card} >
        
          {!flip ? (<div style={{minWidth:'100%'}}>
      <CardHeader className={classes.CardHeader} titleTypographyProps={{variant:'h6' }} title={flashcard.question} ></CardHeader>
      <CardContent className={classes.CardHeader}>
        
          {flashcard.options.map(option => (
         <Typography key={option}>   {option}</Typography>
          ))}
        
      </CardContent></div>) : (<div style={{minWidth:'100%'}}><CardHeader className={classes.CardHeader} title="The Correct answer is"></CardHeader><CardContent  > <Typography variant="h4" color='green'> {flashcard.answer}</Typography></CardContent></div>)}
      
    </Card></ButtonBase>
  );
}
