let pagesArr;

let updatedPagesArr = JSON.parse(localStorage.getItem("pagesArr"));

if (updatedPagesArr) {
  pagesArr = updatedPagesArr;
} else {
  pagesArr = [
    {
      id: 1,
      name: "Art World",
      profileImg: "images/artWorldProfileImg.jpeg",
      coverImg: "images/artWorldCoverImg.jpeg",
      followerNum: "104K",
      followingNum: "10",
      bio: "Interested in arts❤✨",
      postsArr: [
        {
          postId: 1,
          textContent: "Water Lilies by Claude Monet 🪷",
          datePublished: "January 2 at 3.43 PM",
          imgContent: "images/artWorldPost1.jpeg",
          likesNum: "1.2K",
          commentsArr: [
            {
              authorName: "Jane Black",
              authorProfImg: "images/commentAuthor1Img.jpeg",
              commentTxtContent: "Wow 🌻",
            },
            {
              authorName: "Mary James",
              authorProfImg: "images/commentAuthor2Img.jpeg",
              commentTxtContent: "I love it 🌻",
            },
          ],
          sharesNum: "289",
          notificationStatus: "off",
        },
        {
          postId: 2,
          textContent:
            "Water Lilies and Japanese Bridge by Claude Monet •°•°~🪷~°•°•",
          datePublished: "January 5 at 12.05 AM",
          imgContent: "images/artWorldPost2.jpg",
          likesNum: "2.4K",
          commentsArr: [
            {
              authorName: "Jane Black",
              authorProfImg: "images/commentAuthor1Img.jpeg",
              commentTxtContent: "Wow 🪷",
            },
            {
              authorName: "Mary James",
              authorProfImg: "images/commentAuthor2Img.jpeg",
              commentTxtContent: "I love it 🪷",
            },
          ],
          sharesNum: "400",
          notificationStatus: "off",
        },
        {
          postId: 3,
          textContent: "Luncheon of the Boating Party by Pierre-Auguste Renoir",
          datePublished: "January 15 at 5.12 PM",
          imgContent: "images/artWorldPost5.jpg",
          likesNum: "2.4K",
          commentsArr: [
            {
              authorName: "Jane Black",
              authorProfImg: "images/commentAuthor1Img.jpeg",
              commentTxtContent: "Wow 🌻",
            },
            {
              authorName: "Mary James",
              authorProfImg: "images/commentAuthor2Img.jpeg",
              commentTxtContent: "I love it 🌻",
            },
          ],
          sharesNum: "400",
          notificationStatus: "off",
        },
      ],
    },
  ];
  localStorage.setItem("pagesArr", JSON.stringify(pagesArr));
}

const mainContainer = document.querySelector(".mainContainer");

// როდესაც მარცხენა ველზე არის მაუსი მთავარი გვერდი რომ არ ისქროლებოდეს

const mainPageLeftBtnsContainer = document.querySelector(
  ".mainPageLeftBtnsContainer",
);
const mainPageFeed = document.querySelector(".mainPageFeed");

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

// მარცხენა მხარეზე ღილაკების დაჭერის დროს

const mainPageLeftProfileBtn = document.querySelector(
  ".mainPageLeftProfileBtn",
);

const metaAIBtn = document.querySelector(".metaAIBtn");

metaAIBtn.addEventListener("click", function () {
  window.location.href = "https://www.meta.ai/";
});

// პოსტების გამოტანა

const mainPagePosts = document.querySelector(".mainPagePosts");

if (activeUser.pageVisibilityStatus) {
  const posts = pagesArr[0].postsArr;
  for (let i = 0; i < posts.length; i++) {
    let currentPostId = posts[i].postId;
    let hiddenPostsArr = activeUser.hiddenPosts;
    let includeStatus = hiddenPostsArr.includes(currentPostId);
    if (!includeStatus) {
      createPost(
        mainContainer,
        mainPagePosts,
        pagesArr[0],
        posts[i],
        "feedPagePost",
      );
    }
  }
}

// active user-ის მონაცემების გამოტანა

const mainPagePostCrBoxBtn1 = document.querySelector(".mainPagePostCrBoxBtn1");
mainPagePostCrBoxBtn1.textContent =
  "What's on your mind, " + activeUser.firstName + "?";

// პოსტის შექმნა

const activeUserPostContainer = document.querySelector(
  ".activeUserPostContainer",
);
const postCreateWindowBox = document.querySelector(".postCreateWindowBox");
const postCreateWindowCloseBtn = document.querySelector(
  ".postCreateWindowCloseBtn",
);
const postCreateWindowTxtInput = document.querySelector(
  ".postCreateWindowTxtInput",
);
const postCreateWindowImgInput = document.querySelector(
  ".postCreateWindowImgInput",
);

const mainPageImgInp = document.querySelectorAll(".mainPageImgInp");

const postCreateWindow = document.querySelector(".postCreateWindow");

const postCreateWindowUploadedImg = document.querySelector(
  ".postCreateWindowUploadedImg",
);
const postCreateWindowImgDeleteBtn = document.querySelector(
  ".postCreateWindowImgDeleteBtn",
);
const postCreateWindowPostBtn = document.querySelector(
  ".postCreateWindowPostBtn",
);

postCreateWindowTxtInput.placeholder =
  "What's on your mind, " + activeUser.firstName + "?";
postCreateWindowPostBtn.style.cursor = "no-drop";
postCreateWindowPostBtn.disabled = true;

function disablePostBtn() {
  postCreateWindowPostBtn.style.cursor = "no-drop";
  postCreateWindowPostBtn.disabled = true;
  postCreateWindowPostBtn.classList.remove("postCreateWindowPostActiveBtn");
}

function enablePostBtn() {
  postCreateWindowPostBtn.style.cursor = "pointer";
  postCreateWindowPostBtn.disabled = false;
  postCreateWindowPostBtn.classList.add("postCreateWindowPostActiveBtn");
}

mainPagePostCrBoxBtn1.addEventListener("click", function () {
  postCreateWindowBox.classList.remove("hidden");
  body.style.overflow = "hidden";
  if (postCreateWindowTxtInput.value !== "" || imgLink !== undefined) {
    enablePostBtn();
  }
});

postCreateWindowCloseBtn.addEventListener("click", function () {
  postCreateWindowBox.classList.add("hidden");
  body.style.overflow = "auto";
  disablePostBtn();
});

let imgLink;

postCreateWindowTxtInput.addEventListener("input", function () {
  enablePostBtn();

  let trimmedInput = postCreateWindowTxtInput.value.trim();
  if (trimmedInput.length === 0 && imgLink === undefined) {
    disablePostBtn();
  }

  if (postCreateWindowTxtInput.value.length < 80 && imgLink === undefined) {
    postCreateWindowTxtInput.style.fontSize = "24px";
  } else {
    postCreateWindowTxtInput.style.fontSize = "15px";
  }
});

mainPageImgInp.forEach((input) => {
  input.addEventListener("change", function () {
    postCreateWindowBox.classList.remove("hidden");
    body.style.overflow = "hidden";
    postCreateWindowTxtInput.style.fontSize = "15px";
    postCreateWindowImgDeleteBtn.classList.remove("hidden");

    let file = input.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      imgLink = reader.result;
      postCreateWindowUploadedImg.src = imgLink;
    };

    reader.readAsDataURL(file);
    enablePostBtn();
  });
});

postCreateWindowImgDeleteBtn.addEventListener("click", function () {
  postCreateWindowImgDeleteBtn.classList.add("hidden");
  postCreateWindowTxtInput.style.fontSize = "24px";
  postCreateWindowUploadedImg.src = "";
  imgLink = undefined;
  mainPageImgInp.forEach((input) => (input.value = ""));
  if (postCreateWindowTxtInput.value === "") {
    disablePostBtn();
  }
});

class Post {
  constructor(
    postId,
    textContent,
    datePublished,
    imgContent,
    likesNum,
    commentsArr,
    sharesNum,
    notificationStatus,
  ) {
    this.postId = postId;
    this.textContent = textContent;
    this.datePublished = datePublished;
    this.imgContent = imgContent;
    this.likesNum = likesNum;
    this.commentsArr = commentsArr;
    this.sharesNum = sharesNum;
    this.notificationStatus = notificationStatus;
  }
}

postCreateWindow.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    postCreateWindowPostBtn.click();
  }
});

postCreateWindowPostBtn.addEventListener("click", function () {
  disablePostBtn();
  postCreateWindowBox.classList.add("hidden");
  body.style.overflow = "auto";
  let imgContent;
  if (imgLink === undefined) {
    imgContent = "";
  } else {
    imgContent = imgLink;
  }
  let activeUser = JSON.parse(localStorage.getItem("ActiveUser"));
  let activeUserPostsArr = activeUser.posts;

  let clickTime = new Date().getTime();

  let newPostId;
  if (activeUserPostsArr.length === 0) {
    newPostId = pagesArr[0].postsArr.length + 1;
  } else {
    newPostId = activeUserPostsArr[activeUserPostsArr.length - 1].postId + 1;
  }

  let newPost = new Post(
    newPostId,
    postCreateWindowTxtInput.value,
    clickTime,
    imgContent,
    "0",
    [],
    "0",
    "on",
  );

  activeUserPostsArr.push(newPost);
  activeUser.posts = activeUserPostsArr;
  localStorage.setItem("ActiveUser", JSON.stringify(activeUser));
  let loggedInUsersArr = JSON.parse(localStorage.getItem("loggedInUsers"));
  let usersArr = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < loggedInUsersArr.length; i++) {
    if (loggedInUsersArr[i].userId === activeUser.userId) {
      loggedInUsersArr[i] = activeUser;
    }
  }

  for (let i = 0; i < usersArr.length; i++) {
    if (usersArr[i].userId === activeUser.userId) {
      usersArr[i] = activeUser;
    }
  }

  localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
  localStorage.setItem("users", JSON.stringify(usersArr));

  createPost(
    mainContainer,
    activeUserPostContainer,
    "",
    newPost,
    "ActiveUserfeedPagePost",
  );
  postCreateWindowImgDeleteBtn.classList.add("hidden");
  postCreateWindowTxtInput.value = "";
  postCreateWindowUploadedImg.src = "";
  mainPageImgInp.forEach((input) => (input.value = ""));
  imgLink = undefined;
});
