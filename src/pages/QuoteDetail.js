import { Fragment } from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighlightedQuote'



const QuoteDetail = () => {
  const params = useParams();
  const DUMMY_QUOTES=[
    {id:'q1',author:"Babu" , text:'no man in this world are afraid of his success unless its yours fathers'},
    {id:'q3',author:"Baby Babu" , text:'all woman in this world'},
    {id:'q2',author:"Baby" , text:'all woman in this world are afraid of her falilure unless its yours'}
    
    ]
console.log(params)
    const quote=DUMMY_QUOTES.find((quote)=>quote.id===params.quoteId)
    if(!quote){
      {console.log('noooopsie')}
     return<p>Sorry No Quotes found</p>
    }

  return (
    <Fragment>
     <HighLightedQuote text={quote.text} author={quote.author} />
     <Route path={`/quotes/${params.quoteId}`} exact>
<div className='centered'>
<Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load comments</Link>
</div>
</Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;