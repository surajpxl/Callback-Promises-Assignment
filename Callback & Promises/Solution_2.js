function manipulateString(str) {
  const upperCaseString = str.toUpperCase();
  return function logString() {
      console.log(`The manipulated string is: ${upperCaseString}`);
  };
}

const logFunction = manipulateString("hello world");
logFunction(); // Output: The manipulated string is: HELLO WORLD
