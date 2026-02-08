const mainPagePostCrBoxBtn1 = document.querySelector(".mainPagePostCrBoxBtn1");
mainPagePostCrBoxBtn1.textContent =
  "What's on your mind, " + activeUser.firstName + "?";

// როდესაც მარცხენა ველზე არის მაუსი მთავარი გვერდი რომ არ ისქროლებოდეს

const mainPageLeftBtnsContainer = document.querySelector(
  ".mainPageLeftBtnsContainer",
);
const mainPageFeed = document.querySelector(".mainPageFeed");
const body = document.querySelector("body");

mainPageLeftBtnsContainer.addEventListener("mouseover", function () {
  body.style.height = "100%";
  body.style.overflow = "hidden";
});

mainPageLeftBtnsContainer.addEventListener("mouseout", function () {
  body.style.height = "auto";
  body.style.overflow = "auto";
});

// მარცხენა მხარეს ლისთის გაგრძელების და შემოკლების ღილაკები

const mainPageLeftSeeMoreBtn = document.querySelector(
  ".mainPageLeftSeeMoreBtn",
);
const mainPageLeftSeeLessBtn = document.querySelector(
  ".mainPageLeftSeeLessBtn",
);
const mainPageLeftHiddenBtnBox = document.querySelector(
  ".mainPageLeftHiddenBtnBox",
);

mainPageLeftSeeMoreBtn.addEventListener("click", function () {
  mainPageLeftSeeMoreBtn.classList.add("hidden");
  mainPageLeftHiddenBtnBox.classList.remove("hidden");
  mainPageLeftSeeLessBtn.classList.remove("hidden");
});

mainPageLeftSeeLessBtn.addEventListener("click", function () {
  mainPageLeftSeeMoreBtn.classList.remove("hidden");
  mainPageLeftHiddenBtnBox.classList.add("hidden");
  mainPageLeftSeeLessBtn.classList.add("hidden");
});

// პოსტზე

const postFollowBtn = document.querySelectorAll(".postFollowBtn");

postFollowBtn.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "Follow") {
      button.textContent = "Followed";
      button.style.color = "#65686C";
    } else {
      button.textContent = "Follow";
      button.style.color = "#0064d1";
    }
  });
});

let activePage;

let pagesArr = JSON.parse(localStorage.getItem("pagesArr"));

const mainPagePosts = document.querySelector(".mainPagePosts");

for (let i = 0; i < pagesArr.length; i++) {
  const posts = pagesArr[i].postsArr;
  const lastPost = posts[posts.length - 1];
  createPost(mainPagePosts, pagesArr[i], lastPost);
}
