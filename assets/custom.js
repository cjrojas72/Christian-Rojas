let toggle = false;

let nav = document.querySelector(".nav");

const $about = document.querySelector(".about-sec");
const $projects = document.querySelector(".portfolio-div");
const $resume = document.querySelector(".resume-sec");
const $contact = document.querySelector(".contact-sec");
const $home = document.querySelector(".centerH");

let navFunc = function (nav) {
  if (nav === "centerH") {
    $home.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  if (nav === "About") {
    $about.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  if (nav === "Projects") {
    console.log("you clicked Projects");
    $projects.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  if (nav === "Resume") {
    $resume.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  if (nav === "Contact") {
    $contact.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
