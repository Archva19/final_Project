const pagesArr = [
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
        textContent: "Sunflowers in Van Gogh style 🌻",
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
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "I love it 🌻",
          },
        ],
        sharesNum: "289",
      },
      {
        textContent: "Beautiful Painting",
        datePublished: "January 5 at 12.05 AM",
        imgContent: "images/artWorldPost2.jpg",
        likesNum: "2.4K",
        commentsArr: [
          {
            authorName: "Jane Black",
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "Wow 🌻",
          },
          {
            authorName: "Mary James",
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "I love it 🌻",
          },
        ],
        sharesNum: "400",
      },
      {
        textContent: "Beautiful Painting",
        datePublished: "January 6 at 7.54 PM",
        imgContent: "images/artWorldPost3.jpg",
        likesNum: "2.4K",
        commentsArr: [
          {
            authorName: "Jane Black",
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "Wow 🌻",
          },
          {
            authorName: "Mary James",
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "I love it 🌻",
          },
        ],
        sharesNum: "400",
      },
      {
        textContent: "Beautiful Painting",
        datePublished: "January 10 at 3.22 PM",
        imgContent: "images/artWorldPost4.jpg",
        likesNum: "2.4K",
        commentsArr: [
          {
            authorName: "Jane Black",
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "Wow 🌻",
          },
          {
            authorName: "Mary James",
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "I love it 🌻",
          },
        ],
        sharesNum: "400",
      },
      {
        textContent: "Beautiful Painting",
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
            authorProfImg: "images/commentAuthor1Img.jpeg",
            commentTxtContent: "I love it 🌻",
          },
        ],
        sharesNum: "400",
      },
    ],
  },
];

localStorage.setItem("pagesArr", JSON.stringify(pagesArr));

// აქტიური ფეიჯის მონაცემების გამოტანა

const activePage = JSON.parse(localStorage.getItem("activePage"));

const pageProfileWindow = document.querySelector(".pageProfileWindow");
const profileCoverImg = document.querySelector(".profileCoverImg");
const profileImg = document.querySelector(".profileImg");
const profileNameTxtContent = document.querySelectorAll(
  ".profileNameTxtContent",
);
const profileFollowInfoTxt1 = document.querySelector(".profileFollowInfoTxt1");
const profileFollowInfoTxt2 = document.querySelector(".profileFollowInfoTxt2");
const profileBio = document.querySelector(".profileBio");

const profileBioResponsive = document.querySelector(".profileBioResponsive");

profileCoverImg.src = activePage.coverImg;
profileImg.src = activePage.profileImg;

profileNameTxtContent.forEach((txt) => {
  txt.textContent = activePage.name;
});

profileFollowInfoTxt1.textContent = activePage.followerNum + " followers";
profileFollowInfoTxt2.textContent = activePage.followingNum + " followings";
profileBio.textContent = activePage.bio;
profileBioResponsive.textContent = activePage.bio;

// მარცხენა მხარეს ფოტოების გამოჩენა

const allPhotosContainer = document.querySelector(".allPhotosContainer");

let activePosts = activePage.postsArr;

function showPhotosInContainer(limit) {
  for (let i = activePosts.length - 1; i >= limit; i--) {
    if (activePosts[i].imgContent !== "") {
      const postImage = document.createElement("img");
      postImage.src = activePosts[i].imgContent;
      postImage.classList.add("allPhotosContainerImg");
      allPhotosContainer.appendChild(postImage);
    }
  }
}

if (activePosts.length > 9) {
  showPhotosInContainer(activePosts.length - 9);
} else {
  showPhotosInContainer(0);
}

const allPhotosContainerImg = document.querySelectorAll(
  ".allPhotosContainerImg",
);

if (allPhotosContainerImg[0]) {
  allPhotosContainerImg[0].classList.add("borderRadiusTopLeft");
}

if (allPhotosContainerImg[2]) {
  allPhotosContainerImg[2].classList.add("borderRadiusTopRight");
}

if (allPhotosContainerImg[6]) {
  allPhotosContainerImg[6].classList.add("borderRadiusBottomLeft");
}

if (allPhotosContainerImg[8]) {
  allPhotosContainerImg[8].classList.add("borderRadiusBottomRight");
}

// პროფილზე ღილაკების ეფექტები

const profileNavigationBtn = document.querySelectorAll(".profileNavigationBtn");
const profileNavBtnActiveDecoLine = document.querySelectorAll(
  ".profileNavBtnActiveDecoLine",
);

function clearProfileBtnsEffect() {
  profileNavigationBtn.forEach((button) => {
    button.classList.add("hoverLightGrayBtn");
    button.classList.remove("activeProfileNavigationButton");
  });
  profileNavBtnActiveDecoLine.forEach((line) => {
    line.classList.add("hidden");
  });
}

profileNavigationBtn.forEach((button, i) => {
  button.addEventListener("click", function () {
    clearProfileBtnsEffect();
    button.classList.remove("hoverLightGrayBtn");
    button.classList.add("activeProfileNavigationButton");
    profileNavBtnActiveDecoLine[i].classList.remove("hidden");
  });
});

// პოსტების ჩამატება

const postsContainer = document.querySelector(".postsContainer");

for (let i = activePosts.length - 1; i >= 0; i--) {
  createPost(postsContainer, activePage, activePosts[i]);
}

// მარცხენა მხარეზე sticky effect

// const profileContentLeft = document.querySelector(".profileContentLeft");
// const sticky = profileContentLeft.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//      profileContentLeft.classList.add("positionFixed");
//   } else {
//     profileContentLeft.classList.remove("positionFixed");
//   }
// }

// window.onscroll = function () {
//   myFunction();
// };