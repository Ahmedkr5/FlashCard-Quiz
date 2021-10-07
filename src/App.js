import React , {useState} from "react";
import Flashcardlist from './components/FlashcardList'


function App() {
  const[flashcards ,setFlashcards] =useState(SAMPLE_FLASHCARDS)
  return (
    <Flashcardlist flashcards={flashcards}></Flashcardlist>
  );
}



const SAMPLE_FLASHCARDS =[
  {
    id: 1,
    question: 'What is 2+2?',
    answer: '4',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'question 2?',
    answer: 'answer',
    options:[
      'answer 1',
      'answer 2',
      'answer 3',
      'answer 4'
    ]
  }
 
]









export default App;

