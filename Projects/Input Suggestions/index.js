let states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const lists = document.querySelector(".lists");
function createSuggestion(suggestions) {
  let html;
  lists.innerHTML = "";
  suggestions.forEach((item) => {
    // html += `<li class="list-item">${item}</li>`;
    let list = document.createElement("li");
    list.setAttribute("class", "list-item");
    list.innerText = item;
    lists.appendChild(list);
  });
}

function showSuggestions(e) {
  const suggestions = states.filter((state) => {
    if (e.currentTarget.value === "") return false;
    return state.toLowerCase().includes(e.currentTarget.value.toLowerCase());
  });

  console.log(suggestions);
  createSuggestion(suggestions);
}

const input = document.querySelector(".input");
input.addEventListener("input", showSuggestions);
