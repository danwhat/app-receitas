import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ExploreFoodButton() {
  return (
    <div>
      <Link to="/explorar/comidas">
        <button
          className="buttonBig"
          type="button"
          data-testid="explore-food"
          placeholder="Explorar Comidas"
        >
          Explorar Comidas
        </button>
      </Link>
    </div>
  );
}
