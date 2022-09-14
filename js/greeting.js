function greet(name) {
  if (name === "Dalia") {
    return "Howdy Boss!";
  }
  if (["Stefan", "Felix", "Thomas"].includes(name)) {
    return "Howdy Coach!";
  }
  return `Howdy ${name}!`;
}

export { greet };
