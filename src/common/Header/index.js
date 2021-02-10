import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import TitleHeader from './components/TitleHeader';
import ProfileButton from './components/ProfileButton';
import SearchButton from './components/SearchButton';
import SearchBar from '../SearchBar';
import './style.css';

export default function Header() {
  const { pathname } = useHistory().location;
  const { inputStatus } = useContext(AppContext);
  const { searchInput } = inputStatus;

  return (
    <div>
      <header className="header">
        <ProfileButton />
        <TitleHeader pathname={ pathname } />
        <SearchButton pathname={ pathname } />
      </header>
      { searchInput && <SearchBar /> }
    </div>
  );
}
