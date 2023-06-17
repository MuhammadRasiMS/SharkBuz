import React from 'react';
import Live from '../../components/Contests/Live/Live';
import cards from './cardsData';

const ContestPage = () => {
  return (
    <div>
        <Live cardsData={cards} />
    </div>
  )
}

export default ContestPage;