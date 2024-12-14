async function fetchWithErrorHandling() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Error fetching data:", error.message);
  }
}

fetchWithErrorHandling();
// Output: Displays an error message on the console.
