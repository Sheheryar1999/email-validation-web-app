import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransition.css'; // Import CSS for animations

const PageTransition = ({ children, locationKey }) => (
  <TransitionGroup>
    <CSSTransition
      key={locationKey}
      classNames="fade"
      timeout={300}  // Ensure this matches the CSS duration
    >
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
);

export default PageTransition;
