function ageInDays(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;
  
  return function logAgeInDays() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  };
}

const person = { firstName: "John", lastName: "Doe", age: 25 };
const logAge = ageInDays(person);
logAge(); // Output: The person's full name is John Doe and their age in days is 9125.
