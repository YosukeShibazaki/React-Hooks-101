import React,{useState} from 'react';
//import './App.css';

const App = (props) => { // 仮にinitialStatesが外部から与えられるものならば、引数にpropsを宣言
  const [name,setName] = useState(props.name);
  const [price,setPrice] = useState(props.price);

  // リセットボタンの処理
  // 実行時に外部のpropsの値をセットする
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  }

  return (
    <> {/* React.Fragmentの略 */}
      <p>現在の{name}は{price}円です。</p>
      <button onClick={()=>{setPrice(price + 1)}}>+</button>
      <button onClick={()=>{setPrice(price - 1)}}>-</button>
      <button onClick={()=>{reset()}}>Reset</button>
      <input value={name}　onChange={(e)=>{setName(e.target.value)}} />
    </>
  );
}

// 外部からのpropsを初期値として定義
App.defaultProps={
  name:'サンプル',
  price:1000
}

export default App;
