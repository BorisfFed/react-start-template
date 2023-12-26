import React, { FC, ReactElement } from 'react';
import './ButtonAddToCart.css';

interface IButtonAddToCartProps {

  count?: number;
}

  /**
   * Если счётчик равен нулю, это кнопка, если больше нуля, то это инпут
   * с отображением количества товара и двумя кнопками по краям (увеличения/уменьшения)
   */
export const ButtonAddToCart: FC<IButtonAddToCartProps> = ({ count = 0 }): ReactElement => {
  return (
    <div className="product-add2cart">
      <div className="input-group">
        {count > 0 ? (
          <>
            <button className="btn btn-warning">
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
            <input className="form-control" type="text" value={count} disabled />
            <button className="btn btn-warning">
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
          </>
        ) : (
          <button className="btn btn-warning">
            <i className="fas fa-shopping-cart"></i> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
