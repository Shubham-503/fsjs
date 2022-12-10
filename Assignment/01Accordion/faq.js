const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
createFaq();
// const faqs = [];

function showFaq(faqs) {}

function createFaq() {
  faqData.forEach((data) => {
    let html = ` <div class="faq">
        <div class="faq_header">
          <h3>${data.question}</h3>
          <span data-id=${data.id} class="show_btn" >
            add</span
          >
        </div>
        <p class="hidden">
          ${data.answer}
        </p>
      </div>`;
    accordianBody.innerHTML += html;
  });
  const faqs = document.querySelectorAll(".faq");
  console.log(faqs);
  faqs.forEach((faq) => {
    faq
      .querySelector(".show_btn")
      .addEventListener("click", (e) => btnStatusUpdate(e, faqs));
    // console.log(faq);
  });
}

function btnStatusUpdate(e, faqs) {
  let id = e.target.getAttribute("data-id");
  faqs.forEach((faq) => {
    let faqId = faq.querySelector(".show_btn").getAttribute("data-id");
    // console.log(faq, id, faqId);
    if (faqId == id) {
      // faq.querySelector(" p").classList = "";
      faq.querySelector("p").classList.toggle("hidden");
    } else faq.querySelector(" p").classList = "hidden";
    // faq.querySelector("p").classList.toggle('hidden')
  });
}

window.onload = () => {
  // showFaq(faqs);
};
