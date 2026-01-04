//testScript
console.log("testPrompt");
const name = "Rick Ian Jumawan";
console.log(name);
let count = "1";
let pCount = "2";
console.log(count + pCount);
//testScriptLinks
//add the external links here
const projectLinks = {
  facebookLink: "https://web.facebook.com/AMABEoflaspinas",
};

Object.keys(projectLinks).forEach((id) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    window.open(projectLinks[id], "_parent");
  });
});
//testScriptWebPages
//add the web pages links here
  const curriculumPages = {
  ictName: "ictPage/ict.html",
  stemName: "stemPage/stem.html",
  abmName: "abmPage/abm.html",
  hummsName: "hummsPage/humms.html",
  gasName: "gasPage/gas.html",
};

Object.keys(curriculumPages).forEach((id) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    window.open(curriculumPages[id], "_parent");
  });
});