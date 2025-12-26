//testScript
console.log("testPrompt");
const name = "Rick Ian Jumawan";
console.log(name);
let count = "1";
let pCount = "2";
console.log(count + pCount);
//testScriptLinks
const projectLinks = {
  facebookLink: "https://web.facebook.com/AMABEoflaspinas",
};

Object.keys(projectLinks).forEach((id) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    window.open(projectLinks[id], "_blank");
  });
});