import React from 'react';
import './Card.css';

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`lumina-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
