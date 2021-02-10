import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ExploreFoodButton() {
  return (
    <div>
      <Link to="/explorar/bebidas">
        <button
          className="buttonBig"
          type="button"
          data-testid="explore-drinks"
          placeholder="Bebidas"
        >
          Explorar Bebidas

        </button>
      </Link>
    </div>
  );
}
