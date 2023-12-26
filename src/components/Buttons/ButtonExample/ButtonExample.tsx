import React, { FC } from 'react'


interface ButtonExampleProps {
  /**
 * Number of products
   */
  count: number
}

export const ButtonExample: FC<ButtonExampleProps> = ({ count }) => {
  return (
    <div>
      <button className="btn btn-warning">
        <i className="fa-sharp fa-solid fa-minus"></i>
      </button>
      <input className="form-control" type="text" value={count} disabled />
      <button className="btn btn-warning">
        <i className="fa-sharp fa-solid fa-plus"></i>
      </button>
    </div>
  );
}