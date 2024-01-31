import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImage from '../../images/404.png';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__img"
        src={notFoundImage}
        alt="Not found image"
      />
      <p className="not-found__text">
        <Link className="not-found__link" to="/">
          Back to Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
