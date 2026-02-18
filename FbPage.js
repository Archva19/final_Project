// აქტიური ფეიჯის მონაცემების გამოტანა

const pagesArr = JSON.parse(localStorage.getItem("pagesArr"));
const activePageId = JSON.parse(localStorage.getItem("activePageId"));

// დაფოლოვება

function updateUsers() {
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
}

const prifleInfoFollowBtn = document.querySelector(".prifleInfoFollowBtn");
const profileInfoFollowIcon = document.querySelector(".profileInfoFollowIcon");
const profileInfoBellIcon = document.querySelector(".profileInfoBellIcon");
const profileInfoFollowBtnTxt = document.querySelector(
  ".profileInfoFollowBtnTxt",
);

function displayFollowed() {
  activeUser.pageFollowStatus = true;
  profileInfoFollowIcon.classList.add("hidden");
  profileInfoBellIcon.classList.remove("hidden");
  profileInfoFollowBtnTxt.textContent = "Followed";
}

function displayNotFollowed() {
  activeUser.pageFollowStatus = false;
  profileInfoFollowIcon.classList.remove("hidden");
  profileInfoBellIcon.classList.add("hidden");
  profileInfoFollowBtnTxt.textContent = "Follow";
}

if (activeUser.pageFollowStatus) {
  displayFollowed();
} else {
  displayNotFollowed();
}

prifleInfoFollowBtn.addEventListener("click", function () {
  if (activeUser.pageFollowStatus) {
    displayNotFollowed();
    updateUsers();
  } else {
    displayFollowed();
    updateUsers();
  }
});

// ამით ვპოულობთ pagesArr-ში შესაბამის page-ს და გამოგვაქვს მისი მონაცემები

const activePage = pagesArr.find((page) => page.id === activePageId);
const activePosts = activePage.postsArr;

const mainContainer = document.querySelector(".mainContainer");
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
  createPost(
    mainContainer,
    postsContainer,
    activePage,
    activePosts[i],
    "innerPagePost",
  );
}
