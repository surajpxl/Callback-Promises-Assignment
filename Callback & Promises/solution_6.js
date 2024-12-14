async function fetchTodo() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

fetchTodo();
// Output: Logs the data from the API.
