const profileNameTxtContent = document.querySelector(".profileNameTxtContent");
profileNameTxtContent.textContent =
  activeUser.firstName + " " + activeUser.lastName;

const profileFollowInfoTxt1 = document.querySelector(".profileFollowInfoTxt1");
profileFollowInfoTxt1.textContent = "0 friends";

// პროფილი და ქავერი

const profileImg = document.querySelector(".profileImg");
profileImg.src = activeUser.profileImage;

const profileCoverImg = document.querySelector(".profileCoverImg");

if (activeUser.coverImage !== "") {
  profileCoverImg.src = activeUser.coverImage;
} else {
  profileCoverImg.style.backgroundImage =
    "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1), #f3f4f7, #f3f4f7, #f3f4f7, #f3f4f7)";
}

const activeUserProfileImgUploadInput = document.querySelector(
  ".activeUserProfileImgUploadInput",
);
const activeUserCoverImgUploadInput = document.querySelector(
  ".activeUserCoverImgUploadInput",
);

activeUserCoverImgUploadInput.addEventListener("change", function () {
  let file = activeUserCoverImgUploadInput.files[0];
  let reader = new FileReader();

  reader.onload = function (event) {
    profileCoverImg.src = reader.result;
    activeUser.coverImage = reader.result;
    localStorage.setItem("ActiveUser", JSON.stringify(activeUser));
    updateUsers();
  };

  reader.readAsDataURL(file);
});

activeUserProfileImgUploadInput.addEventListener("input", function () {
  let file = activeUserProfileImgUploadInput.files[0];
  let reader = new FileReader();

  reader.onload = function (event) {
    profileImg.src = reader.result;
    activeUser.profileImage = reader.result;
    localStorage.setItem("ActiveUser", JSON.stringify(activeUser));
    updateUsers();
  };

  reader.readAsDataURL(file);
});

function updateUsers() {
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

// დაბადებისდღის გამოტანა

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let birthday = activeUser.birthday;
let parts = birthday.split("-");
let date = new Date(birthday);

let birthYear = parts[0];
let birthMonth = months[date.getMonth()];
let birthNum;
if (parts[2][0] === "0") {
  birthNum = parts[2][1];
} else {
  birthNum = parts[2];
}

const profileBirthday = document.querySelectorAll(".profileBirthday");

profileBirthday.forEach((birthday) => {
  birthday.textContent = birthMonth + " " + birthNum + ", " + birthYear;
});

// პოსტების გამოტანა

let activeUserPosts = JSON.parse(localStorage.getItem("ActiveUser")).posts;
const mainContainer = document.querySelector(".mainContainer");
const postsContainer = document.querySelector(".postsContainer");

for (let i = activeUserPosts.length - 1; i >= 0; i--) {
  let currentPostId = activeUserPosts[i].postId;
  let hiddenPostsArr = activeUser.hiddenPosts;
  let includeStatus = hiddenPostsArr.includes(currentPostId);
  if (!includeStatus) {
    createPost(
      mainContainer,
      postsContainer,
      "",
      activeUserPosts[i],
      "ActiveUserfeedPagePost",
    );
  }
}

// მარცხენა მხარეს ფოტოების გამოჩენა

const allPhotosContainer = document.querySelector(".allPhotosContainer");

function showPhotosInContainer(limit) {
  for (let i = activeUserPosts.length - 1; i >= limit; i--) {
    let currentPostId = activeUserPosts[i].postId;
    let hiddenPostsArr = activeUser.hiddenPosts;
    let includeStatus = hiddenPostsArr.includes(currentPostId);
    if (activeUserPosts[i].imgContent !== "" && !includeStatus) {
      const postImage = document.createElement("img");
      postImage.src = activeUserPosts[i].imgContent;
      postImage.classList.add("allPhotosContainerImg");
      allPhotosContainer.appendChild(postImage);
    }
  }
}

if (activeUserPosts.length > 9) {
  showPhotosInContainer(activeUserPosts.length - 9);
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
