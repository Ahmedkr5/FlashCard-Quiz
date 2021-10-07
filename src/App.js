import React , {useState,useEffect} from "react";
import Flashcardlist from './components/FlashcardList'
import axios from "axios";

function App() {
  const[flashcards ,setFlashcards] =useState(SAMPLE_FLASHCARDS)





useEffect(() => {
  axios.get('https://opentdb.com/api.php?amount=10')
  .then(res=>{
    setFlashcards(res.data.results.map((questionItem,index)=>{
      const answer = decodeString(questionItem.correct_answer)
      const options =[
        ...questionItem.incorrect_answers.map(a=>decodeString(a)), 
        answer]
        
      return { 
      id: `${index}-${Date.now()}`, // to avoid same key
      question :decodeString(questionItem.question),
      answer:decodeString(questionItem.correct_answer),
      options:options.sort(()=>Math.random() - .5) //number between 0 and 1 -0.5 => 50% (+/-) so we get a random order for our options 
    }}))
  })
  },[])

// convert html encoded elements(&#04) to normal string  
function decodeString(str){ 
  const textArea = document.createElement('textarea')
  textArea.innerHTML =str
  return textArea.value
}





  return (
    <Flashcardlist flashcards={flashcards}></Flashcardlist>
  );
}



const SAMPLE_FLASHCARDS =[
  {
    Id: 1,
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
    Id: 2,
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

