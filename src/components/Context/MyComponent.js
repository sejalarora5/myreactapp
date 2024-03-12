import { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, I am using Context API for prop drilling!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;