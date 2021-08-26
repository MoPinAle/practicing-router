import React from 'react';

import QuoteList from '../components/quotes/QuoteList';
import { Link } from 'react-router-dom';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Moni', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Monique', text: 'Learning React is great!'},
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />        
    )
}

export default AllQuotes;