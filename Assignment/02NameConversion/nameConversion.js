const btn = document.getElementById("convert-btn");

btn.addEventListener("click", () => {
  const text = document.getElementById("text").value.trim().split(" ");
  changeCamelCase(text);
  changePascalCase(text);
  changeSnakeCase(text);
  changeScreamingSnakeCase(text);
  changeKebabCase(text);
  changeScreamingKebabCase(text);
});

function changeCamelCase(text) {
  const camelCase = text.map((el, idx) => {
    if (idx === 0) {
      let str = el.replace(el[0], el[0].toLowerCase());
      return str;
    }
    let str = el.replace(el[0], el[0].toUpperCase());
    // console.log(str);
    return str;
  });
  document.getElementById("camel-case").innerText = camelCase.join("");
}

function changePascalCase(text) {
  const pascalCase = text.map((el, idx) => {
    let str = el.replace(el[0], el[0].toUpperCase());
    return str;
  });
  document.getElementById("pascal-case").innerText = pascalCase.join("");
}

function changeSnakeCase(text) {
  const snakeCase = text.map((el, idx) => {
    let str = el.replace(el[0], el[0].toLowerCase());
    return str;
  });
  document.getElementById("snake-case").innerText = snakeCase.join("_");
}

function changeScreamingSnakeCase(text) {
  const screamingSnakeCase = text.map((el) => {
    let str = el.toUpperCase();
    return str;
  });
  document.getElementById("screaming-snake-case").innerText =
    screamingSnakeCase.join("_");
}

function changeKebabCase(text) {
  const kebabCase = text.map((el) => {
    let str = el.toLowerCase();
    return str;
  });
  document.getElementById("kebab-case").innerText = kebabCase.join("-");
}
function changeScreamingKebabCase(text) {
  const screamingKebabCase = text.map((el) => {
    let str = el.toUpperCase();
    return str;
  });
  document.getElementById("screaming-kebab-case").innerText =
    screamingKebabCase.join("-");
}
