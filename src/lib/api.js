const FIREBASE_DOMAIN='https://react-http-b5dbb-default-rtdb.firebaseio.com/';


export async function getAllQuotes(){
    const response=await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data =await response.json();

    if(!response.ok){
        throw new Error(data.message ||'could not fetch quotes please check again after 2 hours')
    }
    const transformedQuotes=[];
    for(const key in data){
        const quoteObj={
            id:key,
            ...data[key],
        };
        transformedQuotes.push(quoteObj)
    }
return transformedQuotes
}

export async function getSingleQuotes(quoteId){
    const response=await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
   const data=await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch quote') 
    }

    const loadedQuote={
        id:quoteId,
        ...data,
    };
    return loadedQuote
}

export async function addQuote(quoteData){
    const response=await fetch(`${FIREBASE_DOMAIN}/quotes.json`,{
    method:"POST",
    body:JSON.stringify(quoteData),
    headers:{
        'Content-Type':'application/json',
    },
    });
    const data=await response.json();
    if(!response.ok){
        throw new Error(data.message||'could not create quote');

    }
    return null;
}

export async function addComment(requestData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
      method: 'POST',
      body: JSON.stringify(requestData.commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not add comment.');
    }
  
    return { commentId: data.name };
  }

 export async function getAllComments(quoteId){
      const response=await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
      const data =await response.json();
      if(!response.ok){
          throw new Error(data.message||'could not get comment')
      }
      const transformedComments=[];
      for(const key in data){
          const commentObj={
              id:key,
              ...data[key],
          };
          transformedComments.push(commentObj);
      }
      return transformedComments
  }