import useToggle from '../hooks/useToggle';
import useFetch from '../hooks/useFetch';

const CustomHooks = () => {
  const { show, toggle } = useToggle(true);
  const { show: showList, toggle: toggleList } = useToggle(true);

  const {
    data: users,
    loading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/users');

  const {
    data: todos,
    loading: loadingTodos,
    error: errorTodos,
  } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>Custom Hooks</h1>
      <button onClick={toggle}>Toggle</button>
      {show && <p>Text to hide/show</p>}

      <button onClick={toggleList}>Toggle List</button>
      {showList && (
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CustomHooks;
