import React, { FC } from 'react';

type ChildProps = {
    name: string,
    age: number,
    bio?: string,
  }

  const Child: FC<ChildProps> = ({ name, age, bio = 'Bio empty' }) => {
    return (
      <div>
        <h2>Name: {name}, Age: {age}</h2>
        <p>{bio}</p>
      </div>
    )
  };
  
export default Child;