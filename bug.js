```javascript
// Incorrect way to update state in React functional component
function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    count = count + 1; // This will not trigger a re-render
    setCount(count); // This is also incorrect; count is not updated by this assignment
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```