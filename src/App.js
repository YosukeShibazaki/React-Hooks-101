import React,{useState} from 'react';
//import './App.css';

const App = () => {
  const [count,setCount] = useState(0); // stateの設定
  const increment = () => setCount(count + 1); //　関数incrementを定義。countの中身をsetCountで更新。
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount( counter => counter + 1);
  const decrement2 = () => setCount( counter => counter - 1);

  // 演習
  const reset = () => setCount(0); // カウンターを初期化
  const double = () => setCount(count * 2); // カウントを2倍
  const therdSelect = () => setCount( counter => {
    return counter % 3 === 0? counter / 3 : counter; // 三項演算子を使うと短く書ける。ifでも書けるが長くなる。
  });

  return (
    <> {/* React.Fragmentの略 */}
      <div>count:{count}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>

      <div>
        <button onClick={() => increment2()}>+</button>
        <button onClick={() => decrement2()}>-</button>
      </div>

      <div>
        <button onClick={() => reset()}>Reset</button>
      </div>

      <div>
        <button onClick={() => double()}>Double</button>
      </div>

      <div>
        <button onClick={() => therdSelect()}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;
