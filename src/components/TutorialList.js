import React from 'react';
import { Link } from 'react-router-dom';

const tutorials = [
  { id: 1, title: 'Basic Sketch', description: 'Learn how to create a basic sketch.' },
  { id: 2, title: 'Shapes and Colors', description: 'Learn how to draw shapes and use colors.' },
  // Add more tutorials as needed
];

const TutorialList = () => {
  return (
    <div>
      <h1>p5.js Tutorials</h1>
      <ul>
        {tutorials.map((tutorial) => (
          <li key={tutorial.id}>
            <Link to={`/tutorial/${tutorial.id}`}>{tutorial.title}</Link> - {tutorial.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialList;
