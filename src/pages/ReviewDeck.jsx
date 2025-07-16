import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewDeck = () => {
  const { deckId } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Review Deck: {deckId}</h2>
      <p>Flashcards for spaced repetition review will go here</p>
    </div>
  );
};

export default ReviewDeck;
