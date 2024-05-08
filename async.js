async function greet() {
  return "Adfar Rasheed";
}

async function displayGreeting() {
  const res = await greet();
  console.log(res);
}

displayGreeting();