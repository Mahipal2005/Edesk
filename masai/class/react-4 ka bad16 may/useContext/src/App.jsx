import {AuthContext} from './main';
import {useContext} from 'react';
function App() {
  const foo = useContext(AuthContext);
console.log(foo);
  return (
    <h1>
   {foo.light.background}
    </h1>
  )
}

export default App
 