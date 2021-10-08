import React , {useState,useEffect,useRef} from "react";
import Flashcardlist from './components/FlashcardList'
import axios from "axios";
import './app.css'
import Button from '@mui/material/Button';
function App() {
  const[flashcards ,setFlashcards] =useState([])
  const[categories ,setCategories] =useState([])

const categoryEl =useRef()
const amountEl =useRef()
useEffect(() => {
  axios.get("https://opentdb.com/api_category.php")
  .then((res)=>{
    setCategories(res.data.trivia_categories)
  })
}, [])
/*
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
  },[])*/

// convert html encoded elements(&#04) to normal string  
function decodeString(str){ 
  const textArea = document.createElement('textarea')
  textArea.innerHTML =str
  return textArea.value
}


  function handleSubmit(e){
    e.preventDefault()
    axios.get('https://opentdb.com/api.php',{
      params:{
        amount :amountEl.current.value,
        category: categoryEl.current.value
      }
    })
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
  }


  return (
    <>
    <form className="header" onSubmit={handleSubmit}>
    <div className="form-group">
<label htmlFor="category">Category</label>
<select id="category" ref={categoryEl}>
{categories.map(category=>(
      <option value={category.id} key={category.id}>{category.name}</option>))}
</select>
    </div>
    <div className="form-group">
      <label htmlFor="amount">Number of Questions</label>
  <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}></input>
    </div>
    <div className="form-group">
    <Button variant="contained" type='Submit' >Generate</Button>
    </div>
    </form>
    <Flashcardlist flashcards={flashcards}></Flashcardlist>
    </>
  );
}









export default App;

