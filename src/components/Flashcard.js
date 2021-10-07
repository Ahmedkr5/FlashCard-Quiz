import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
const useStyles = makeStyles({
    Card:{
        width:400,
        height:200,
    },
        cardAction: {
        color:"green",
        
        }
});

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
const classes=useStyles(); 
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
        
          {!flip ? (<>
      <CardHeader title={flashcard.question}></CardHeader>
      <CardContent>
        
          {flashcard.options.map((option) => (
         <Typography>   {option}</Typography>
          ))}
        
      </CardContent></>) : (<><CardHeader title="The Correct answer is"></CardHeader><CardContent > <Typography variant="h4" > {flashcard.answer}</Typography></CardContent></>)}
      
    </Card></ButtonBase>
  );
}
