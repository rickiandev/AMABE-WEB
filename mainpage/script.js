//testScript
console.log("testPrompt");
const me = "Rick Ian Jumawan";
console.log(me);
let count = "1";
let pCount = "2";
console.log(count + pCount);
//testScriptLinks
//add the external links here
const externalLinks = {
  facebookLink: "https://web.facebook.com/AMABEoflaspinas",
  gitHubProfileLink: "https://github.com/rickiandev",
};

Object.keys(externalLinks).forEach((id) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    window.open(externalLinks[id], "_blank");
  });
});
//testScriptWebPages
//add the web pages links here
  const curriculumPages = {
  ictName: "/subpages/ictPage/ict.html",
  stemName: "/subpages/stemPage/stem.html",
  abmName: "/subpages/abmPage/abm.html",
  hummsName: "/subpages/hummsPage/humms.html",
  gasName: "/subpages/gasPage/gas.html",
};

Object.keys(curriculumPages).forEach((id) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    window.open(curriculumPages[id], "_parent");
  });
});