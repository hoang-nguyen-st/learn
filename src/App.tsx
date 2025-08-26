import { useState, type FormEvent } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}
