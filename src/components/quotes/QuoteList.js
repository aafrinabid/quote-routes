import { Fragment } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { Link } from 'react-router-dom';


const sortQuotes=(quotes,ascending)=>{
  return quotes.sort((quoteA,quoteB)=>{
    if(ascending){
      console.log(quoteA.text.length);
      console.log(quoteB.text.length); 

      return quoteA.text.length>quoteB.text.length?1:-1;
    }else{
      console.log(quoteA.text.length);
      console.log(quoteB.text.length); 
      return quoteA.text.length<quoteB.text.length?1:-1;
    }
  })
}



const QuoteList = (props) => {
  const history=useHistory();
  const location=useLocation();
  
  const  queryParams=new URLSearchParams(location.search);

const isSortingAscending=queryParams.get('sort')==='asc'
const sortedQuotes=sortQuotes(props.quotes,isSortingAscending)


  const changeSortingHandler=()=>{
    history.push('/quotes?sort='+(isSortingAscending?'desc':'asc'))
  }
  return (
    <Fragment>
    <div className={classes.sorting}>
      <button onClick={changeSortingHandler}>
        Sort {isSortingAscending ? 'Descending' : 'Ascending'}
      </button>
    </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
      <div className='centered'>
      <Link to="/new-quote" className='btn'>
        Add a Quote
      </Link>
      </div>
    </Fragment>

      
  );
};

export default QuoteList;
