const activeUser = JSON.parse(localStorage.getItem("ActiveUser"));
const activeUserProfPict = document.querySelectorAll(".userProfPict");
const activeUserFullName = document.querySelectorAll(".userFullName");
const body = document.querySelector("body");

activeUserProfPict.forEach((picture) => {
  picture.src = activeUser.profileImage;
});

activeUserFullName.forEach((fullName) => {
  fullName.textContent = activeUser.firstName + " " + activeUser.lastName;
});

// ჰედერზე ცენტრალური ღილაკების ეფექტები

const mainPageHeadPassiveIcon = document.querySelectorAll(
  ".mainPageHeadPassiveIcon",
);
const mainPageHeadActiveIcon = document.querySelectorAll(
  ".mainPageHeadActiveIcon",
);
const mainPageHeadCenterBtn = document.querySelectorAll(
  ".mainPageHeadCenterBtn",
);
const mainPageHeadCenterBtnActiveDecoLine = document.querySelectorAll(
  ".mainPageHeadCenterBtnActiveDecoLine",
);

function clearHeaderBtnEffects() {
  mainPageHeadPassiveIcon.forEach((icon) => icon.classList.remove("hidden"));
  mainPageHeadActiveIcon.forEach((icon) => icon.classList.add("hidden"));
  mainPageHeadCenterBtnActiveDecoLine.forEach((line) =>
    line.classList.add("hidden"),
  );
  mainPageHeadCenterBtn.forEach((button) =>
    button.classList.add("hoverLightGrayBtn"),
  );
  mainPageHeadFindFriendsBtn.classList.remove("blueBtn");
}

mainPageHeadCenterBtn.forEach((button, i) => {
  button.addEventListener("click", function () {
    clearHeaderBtnEffects();
    mainPageHeadActiveIcon[i].classList.remove("hidden");
    mainPageHeadPassiveIcon[i].classList.add("hidden");
    mainPageHeadCenterBtnActiveDecoLine[i].classList.remove("hidden");
    mainPageHeadCenterBtn[i].classList.remove("hoverLightGrayBtn");
  });
});

const mainPageHeadFriendsBtn = document.querySelector(
  ".mainPageHeadFriendsBtn",
);
const mainPageHeadFindFriendsBtn = document.querySelector(
  ".mainPageHeadFindFriendsBtn",
);

mainPageHeadFriendsBtn.addEventListener("click", function () {
  mainPageHeadFindFriendsBtn.classList.add("blueBtn");
});

const mainPageHeadHomeBtn = document.querySelector(".mainPageHeadHomeBtn");

mainPageHeadHomeBtn.addEventListener("click", function () {
  window.location.href = "mainFbPage.html";
});

// აქტიური იუსერის გვერდზე გადასვლა

const profileBtn = document.querySelectorAll(".profileBtn");

profileBtn.forEach((btn) => {
  btn.addEventListener("mousedown", function (e) {
    e.preventDefault();
    window.location.href = "activeUserProfile.html";
  });
});

// log out

const mainPageHeadProfileBtn = document.querySelector(
  ".mainPageHeadProfileBtn",
);
const headerLogOutWindow = document.querySelector(".headerLogOutWindow");

mainPageHeadProfileBtn.addEventListener("click", function () {
  headerLogOutWindow.classList.toggle("hidden");
});

mainPageHeadProfileBtn.addEventListener("focusout", function () {
  headerLogOutWindow.classList.add("hidden");
});

const logOutBtn = document.querySelector(".logOutBtn");

logOutBtn.addEventListener("mousedown", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});
