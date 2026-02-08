const activeUser = JSON.parse(localStorage.getItem("ActiveUser"));
const userProfPict = document.querySelectorAll(".userProfPict");
const userFullName = document.querySelectorAll(".userFullName");

userProfPict.forEach((picture) => {
  picture.src = activeUser.profileImage;
});

userFullName.forEach((fullName) => {
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
  mainPageHeadCenterBtn.forEach((button) => button.classList.add("hoverLightGrayBtn"));
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
