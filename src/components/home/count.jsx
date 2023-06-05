import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const countState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className='card'>
        <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
          count is {countState}
        </button>
      </div>
    </>
  );
}
