import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <div className='centered'>

      <Link to="/new-quote" className='btn'>
        Add a Quote
      </Link>

      </div>
    </div>
  );
};

export default NoQuotesFound;
