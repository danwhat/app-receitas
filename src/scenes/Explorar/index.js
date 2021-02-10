import React from 'react';
import Header from '../../common/Header';
import ExploreFoodButton from './components/ExploreFoodButton';
import ExploreDrinksButton from './components/ExploreDrinksButton';
import BottonBar from '../../common/BottomBar';

export default function index() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <ExploreFoodButton />
        </div>
        <div>
          <ExploreDrinksButton />
        </div>
      </main>
      <BottonBar />
    </div>
  );
}
