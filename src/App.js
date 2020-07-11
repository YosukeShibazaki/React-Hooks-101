import React,{useState} from 'react';
//import './App.css';

const App = (props) => { // initialStatesが外部から与えられるものならば、引数にpropsを宣言
  const [state,setState] = useState(props); // 値ではなくオブジェクトを引数として入れることもできる
   // オブジェクト丸ごと指定することで下記2行は必要なくなる
  //const [name,setName] = useState(props.name);
  //const [price,setPrice] = useState(props.price);
  const {name,price} = state; // stateオブジェクトの中身を変数nameとpriceにそれぞれ代入

  return (
    <> {/* React.Fragmentの略 */}
      <p>現在の{name}は{price}円です。</p>
      <button onClick={()=>{setState({...state,price:price + 1})}}>+</button>
      <button onClick={()=>{setState({...state,price:price - 1})}}>-</button>
      <button onClick={()=> setState(props)}>Reset</button>
      <input value={name}　onChange={(e)=>{setState({...state,name:e.target.value})}} />
      {/* ...stateを展開。展開したオブジェクトの中のどのキーを書き換えるかを指定する */}
    </>
  );
}

// 外部からのpropsを初期値として定義
App.defaultProps={
  name:'サンプル',
  price:1000
}

export default App;
