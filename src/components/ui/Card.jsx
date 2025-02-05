import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // You can style your card here

const Card = ({ title, content, footer, image, style }) => {
  return (
    <div className="card" style={style}>
      {image && <img src={image} alt="Card Image" className="card-image" />}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        <p className="card-content">{content}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  footer: PropTypes.node,
  image: PropTypes.string,
  style: PropTypes.object,
};

Card.defaultProps = {
  title: '',
  footer: null,
  image: '',
  style: {},
};

export default Card;
