async function fetchPosts() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      console.log(posts);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

fetchPosts();
// Output: Logs the list of posts to the console.
