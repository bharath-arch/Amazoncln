import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/counter/counterSlice';
import Header from './Headers/Header';
import MiniHeader from './Headers/MiniHeader';
import CarouselComponent from '../../CarouselComponent'

function UserLayout() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <MiniHeader />
      <CarouselComponent />
      <h1>
        User Layout {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </h1>
    </>
  );
}

export default UserLayout;
