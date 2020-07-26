import { createContext } from 'react';

// createContextは異なるコンポーネント同士で状態の共有を行うための関数。
const AppContext = createContext();

export default AppContext;

// 値を渡す側⇒Provider、値を受け取り仕様する側⇒Consumer
