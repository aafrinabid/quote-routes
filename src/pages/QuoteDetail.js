import { Fragment, useEffect } from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighlightedQuote'
import { getSingleQuotes } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';



const QuoteDetail = () => {
  const params = useParams();
  const {quoteId}=params;
  
    const {sendRequest,status,error,data:loadedData}=useHttp(getSingleQuotes,true)
useEffect(()=>{
  sendRequest(quoteId);
},[sendRequest,quoteId]);
if(status==='pending'){
  return <div className='centered'>
    <LoadingSpinner />
  </div>
}
if(error){
  return<p className='centered'> {error}
  </p>
}
if(!loadedData){
  return<p>No quote found</p>
}
console.log(loadedData.text)

  return (
    <Fragment>
     <HighLightedQuote text={loadedData.text} author={loadedData.author} />
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