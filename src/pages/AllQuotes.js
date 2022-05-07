import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES=[
{id:'q1',author:"Babu" , text:'no man in this world are afraid of his success unless its yours fathers'},
{id:'q3',author:"Baby Babu" , text:'all woman in this world'},

{id:'q2',author:"Baby" , text:'all woman in this world are afraid of her falilure unless its yours'}

]

function AllQuotes() {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes