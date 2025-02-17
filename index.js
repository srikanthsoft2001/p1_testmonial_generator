// testimonials collected from web as objects stored in a array.
const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

// updateTestimonial();

// function updateTestimonial() {
//   const { name, photoUrl, text } = testimonials[idx];
//   imgEl.src = photoUrl;
//   textEl.innerText = text;
//   usernameEl.innerText = name;
//   idx++;
//   if (idx === testimonials.length) {
//     idx = 0;
//   }
//   setTimeout(() => {
//     updateTestimonial();
//   }, 10000);
// }

// access the target texts and images by creating them
const authorImg = document.querySelector(".user_image");
const authordQuote = document.querySelector(".quote");
const authorName = document.querySelector(".user_name");

let index = 0;
showTestimonials();
function showTestimonials() {
  authorImg.src = testimonials[index].photoUrl;
  authordQuote.innerHTML = testimonials[index].text;
  authorName.innerHTML = testimonials[index].name;
  index++;
  if (index == testimonials.length) {
    index = 0;
  }
  setTimeout(() => showTestimonials(), 10000);
}
