async function fetchMultiple() {
  try {
      const [todoResponse, postResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/todos/1"),
          fetch("https://jsonplaceholder.typicode.com/posts/1")
      ]);

      const todo = await todoResponse.json();
      const post = await postResponse.json();

      console.log({ todo, post });
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

fetchMultiple();

