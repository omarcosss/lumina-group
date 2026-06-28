import React from 'react';
import './Section.css';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'accent' | 'muted';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  container?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  spacing = 'md',
  container = true,
  className = '',
  children,
  ...props
}) => {
  const sectionClasses = [
    'lumina-section',
    `lumina-section--${variant}`,
    `lumina-section--spacing-${spacing}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} {...props}>
      {container ? (
        <div className="lumina-section__container">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};
