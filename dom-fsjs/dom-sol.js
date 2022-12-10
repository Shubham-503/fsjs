// 1.
document.querySelector(".side-bar .crayons-subtitle-2 ").innerText = "Shubham";
document.querySelector(".side-bar p.color-base-70 ").innerText =
  "Love to watch series";

// 2.
let ele = document.querySelectorAll(".as-imagegrid-item-title");
let a = [];
for (let e of ele) a.push(e.querySelector.innerText);

// 3.
let html = `<section class="parent" data-id="6151248" data-stats-idx="8,8"><h3 role="button" tabindex="0" aria-expanded="false" aria-label="Policy, safety and copyright">Policy, safety and copyright<svg class="up" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg><svg class="down" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg></h3><div class="overflow"><div class="children" role="list" aria-hidden="true" style="margin-top: -204px; display: none;"><div class="child" role="listitem"><a class="article-link" href="/youtube/answer/9777243?hl=en-GB&amp;ref_topic=6151248">Coronavirus disease 2019 (COVID-19) updates</a></div><div class="child" role="listitem"><a class="article-link" href="/youtube/answer/9288567?hl=en-GB&amp;ref_topic=6151248">YouTube's Community Guidelines</a></div><div class="child" role="listitem"><a class="topic-link" href="/youtube/topic/2803176?hl=en-GB&amp;ref_topic=6151248">YouTube policies</a></div><div class="child" role="listitem"><a class="topic-link" href="/youtube/topic/2803138?hl=en-GB&amp;ref_topic=6151248">Reporting and enforcement</a></div><div class="child" role="listitem"><a class="topic-link" href="/youtube/topic/2803240?hl=en-GB&amp;ref_topic=6151248">Privacy and safety centre</a></div><div class="child" role="listitem"><a class="topic-link" href="/youtube/topic/2676339?hl=en-GB&amp;ref_topic=6151248">Copyright and rights management</a></div></div></div></section>`;
let acdn = document.getElementsByClassName("accordion-homepage");
let newNode = document.createElement("section");
newNode.innerHTML = html;
acdn[0].appendChild(newNode);

// 3. Other method
// let nNode= document.createElement("section")
// undefined
// nNode.innerText="My New FAQ"
// 'My New FAQ'
// acdn[0].appendChild(nNode)

// 4.
document.querySelector(".customer-support .service-number").innerText =
  "+919876543210";

// 5.
document.querySelector(
  ".feature-column-carousel__button > .cta.cta--contained.cta--black"
).innerText = "Check out";

// 6.
document
  .querySelector("input.searchinput___zXLAR")
  .addEventListener("mouseover", () => {
    document.querySelector("input.searchinput___zXLAR").style.backgroundColor =
      "red";
  });

// 7.
document.querySelector("input#hp-search-input").value = "map";
document
  .querySelectorAll("form > button.button.action.has-icon.search-button")[1]
  .click();

// 8.
let toDel = document.querySelectorAll("#SIvCob a:nth-child(odd)");
for (let e of toDel) {
  document.querySelector("#SIvCob").removeChild(e);
}

// 9.
document.querySelector(".display-heading-1").style.fontFamily = "monospace";
let logobgc = document.querySelector(".button-large");
let color = getComputedStyle(logobgc).backgroundColor;
document.querySelector(".display-heading-1").style.color = color;

// 10.
document
  .querySelector(".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default")
  .addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
  });

// 11.
document.querySelector(
  ".wrapper .logo.gtag"
).innerHTML = `<img src="https://ineuron.ai/images/ineuron-logo.png" width=100 />`;

// 12.
document.querySelector(".btn.btn-sm.btn-primary").style.backgroundColor =
  "blue";

// 13.
document.querySelector(".fl-heading-text").innerText = "FSJSBOOTCAMP";

// 14.
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

// 15.
document.querySelector(".mb-md-0.mr-4.d-inline").style.textAlign = "right";
document.querySelector(".mb-md-0.mr-4.d-inline").style.width = "100%";

// 16.
document.querySelector(".section-title_title__VEDfK").innerText =
  "Start with Stratch";

// 17.
document.querySelector(".btn-container").innerText = new Date();

// 18.
document.querySelector(".p-f03-footer-container").style.background = "";
document.querySelector(".p-f03-footer-container").style.backgroundColor =
  "orange";

// 19.
document.querySelector(".logo").currentSrc;

// 20.
document.querySelector(".desc").style.color = "orange";
