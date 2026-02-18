const su_formBdHelp = document.querySelector(".su_formBdHelp");
const su_formGendHelp = document.querySelector(".su_formGendHelp");
const su_formBdHelpBox = document.querySelector(".su_formBdHelpBox");
const su_formGendHelpBox = document.querySelector(".su_formGendHelpBox");

su_formBdHelp.addEventListener("click", function () {
  su_formBdHelpBox.classList.toggle("hidden");
});

su_formBdHelp.addEventListener("focusout", function () {
  su_formBdHelpBox.classList.add("hidden");
});

su_formGendHelp.addEventListener("click", function () {
  su_formGendHelpBox.classList.toggle("hidden");
});

su_formGendHelp.addEventListener("focusout", function () {
  su_formGendHelpBox.classList.add("hidden");
});

const su_formFnErr = document.querySelector(".su_formFnErr");
const su_formLnErr = document.querySelector(".su_formLnErr");
const su_formBdErr = document.querySelector(".su_formBdErr");
const su_formGendErr = document.querySelector(".su_formGendErr");
const su_formEmailErr = document.querySelector(".su_formEmailErr");
const su_formPassErr = document.querySelector(".su_formPassErr");

const su_formFnInp = document.querySelector(".su_formFnInp");
const su_formLnInp = document.querySelector(".su_formLnInp");
const su_formBdDay = document.querySelector(".su_formBdDay");
const su_formBdMon = document.querySelector(".su_formBdMon");
const su_formBdYear = document.querySelector(".su_formBdYear");
const su_formGenInpItem = document.querySelectorAll(".su_formGenInpItem");
const su_formEmailInp = document.querySelector(".su_formEmailInp");
const su_formPassInp = document.querySelector(".su_formPassInp");
const su_formSel = document.querySelectorAll(".su_formSel");

const su_formFnErrMessage = document.querySelector(".su_formFnErrMessage");
const su_formLnErrMessage = document.querySelector(".su_formLnErrMessage");
const su_formBdErrMessage = document.querySelector(".su_formBdErrMessage");
const su_formGendErrMessage = document.querySelector(".su_formGendErrMessage");
const su_formEmailErrMessage = document.querySelector(
  ".su_formEmailErrMessage",
);
const su_formEmailErrMessage2 = document.querySelector(
  ".su_formEmailErrMessage2",
);
const su_formPassErrMessage = document.querySelector(".su_formPassErrMessage");

const gender = document.getElementsByName("gender");
const su_formSuBtn = document.querySelector(".su_formSuBtn");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

function validateEmailandPhone(info) {
  let regExEm =
    /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/gi;

  let regExNum =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

  return regExEm.test(info) || regExNum.test(info);
}

su_formFnInp.addEventListener("focusout", function () {
  if (su_formFnInp.value === "") {
    su_formFnErr.classList.remove("hidden");
    su_formFnInp.classList.add("inpErr");
    su_formFnErrMessage.classList.add("hidden");
  } else {
    su_formFnErr.classList.add("hidden");
    su_formFnInp.classList.remove("inpErr");
    su_formFnErrMessage.classList.add("hidden");
  }
});

su_formFnInp.addEventListener("focus", function () {
  if (su_formFnInp.classList.contains("inpErr")) {
    su_formFnErr.classList.add("hidden");
    su_formFnErrMessage.classList.remove("hidden");
  }
});

su_formFnErr.addEventListener("click", function () {
  su_formFnInp.focus();
});

su_formLnInp.addEventListener("focusout", function () {
  if (su_formLnInp.value === "") {
    su_formLnErr.classList.remove("hidden");
    su_formLnInp.classList.add("inpErr");
    su_formLnErrMessage.classList.add("hidden");
  } else {
    su_formLnErr.classList.add("hidden");
    su_formLnInp.classList.remove("inpErr");
    su_formLnErrMessage.classList.add("hidden");
  }
});

su_formLnInp.addEventListener("focus", function () {
  if (su_formLnInp.classList.contains("inpErr")) {
    su_formLnErr.classList.add("hidden");
    su_formLnErrMessage.classList.remove("hidden");
  }
});

su_formLnErr.addEventListener("click", function () {
  su_formLnInp.focus();
});

su_formEmailInp.addEventListener("focusout", function () {
  if (
    su_formEmailInp.value === "" ||
    !validateEmailandPhone(su_formEmailInp.value)
  ) {
    su_formEmailErr.classList.remove("hidden");
    su_formEmailInp.classList.add("inpErr");
    su_formEmailErrMessage.classList.add("hidden");
    su_formEmailErrMessage2.classList.add("hidden");
  } else {
    su_formEmailErr.classList.add("hidden");
    su_formEmailInp.classList.remove("inpErr");
    su_formEmailErrMessage.classList.add("hidden");
    su_formEmailErrMessage2.classList.add("hidden");
  }
});

su_formEmailInp.addEventListener("focus", function () {
  if (
    su_formEmailInp.classList.contains("inpErr") &&
    su_formEmailInp.value === ""
  ) {
    su_formEmailErr.classList.add("hidden");
    su_formEmailErrMessage.classList.remove("hidden");
  } else if (
    su_formEmailInp.classList.contains("inpErr") &&
    !validateEmailandPhone(su_formEmailInp.value)
  ) {
    su_formEmailErr.classList.add("hidden");
    su_formEmailErrMessage2.classList.remove("hidden");
  }
});

su_formEmailErr.addEventListener("click", function () {
  su_formEmailInp.focus();
});

su_formPassInp.addEventListener("focusout", function () {
  if (su_formPassInp.value === "" || su_formPassInp.value.length < 6) {
    su_formPassErr.classList.remove("hidden");
    su_formPassInp.classList.add("inpErr");
    su_formPassErrMessage.classList.add("hidden");
  } else {
    su_formPassErr.classList.add("hidden");
    su_formPassInp.classList.remove("inpErr");
    su_formPassErrMessage.classList.add("hidden");
  }
});

su_formPassInp.addEventListener("focus", function () {
  if (su_formPassInp.classList.contains("inpErr")) {
    su_formPassErr.classList.add("hidden");
    su_formPassErrMessage.classList.remove("hidden");
  }
});

su_formPassErr.addEventListener("click", function () {
  su_formPassInp.focus();
});

su_formBdYear.addEventListener("focusout", function () {
  su_formBdErrMessage.classList.add("hidden");
  if (Number(su_formBdYear.value) >= currentYear - 5) {
    su_formBdErr.classList.remove("hidden");
    su_formSel.forEach((sel) => {
      sel.classList.add("inpErr");
    });
  } else {
    su_formBdErr.classList.add("hidden");
    su_formSel.forEach((sel) => {
      sel.classList.remove("inpErr");
    });
  }
});

su_formSel.forEach((sel) => {
  sel.addEventListener("focusout", function () {
    if (!su_formBdErrMessage.classList.contains("hidden")) {
      su_formBdErr.classList.remove("hidden");
      su_formBdErrMessage.classList.add("hidden");
      su_formSel.forEach((sel) => {
        sel.classList.add("inpErr");
      });
    }
  });
});

su_formSel.forEach((sel) => {
  sel.addEventListener("focus", function () {
    su_formBdErr.classList.add("hidden");
    if (sel.classList.contains("inpErr")) {
      su_formBdErrMessage.classList.remove("hidden");
      su_formSel.forEach((sel) => {
        sel.classList.remove("inpErr");
      });
    }
  });
});

su_formBdErr.addEventListener("click", function () {
  su_formBdYear.focus();
  su_formBdErr.classList.add("hidden");
  su_formBdErrMessage.classList.remove("hidden");
  su_formSel.forEach((sel) => {
    sel.classList.remove("inpErr");
  });
});

gender.forEach((radio) => {
  radio.addEventListener("change", function () {
    su_formGendErrMessage.classList.add("hidden");
    su_formGendErr.classList.add("hidden");
    su_formGenInpItem.forEach((item) => {
      item.classList.remove("inpErr");
    });
  });
});

gender.forEach((radio) => {
  radio.addEventListener("focusout", function () {
    if (!gender[0].checked && !gender[1].checked) {
      su_formGendErr.classList.remove("hidden");
      su_formGendErrMessage.classList.add("hidden");
      su_formGenInpItem.forEach((item) => {
        item.classList.add("inpErr");
      });
    }
  });
});

su_formGendErr.addEventListener("click", function () {
  gender[0].focus();
  su_formGendErr.classList.add("hidden");
  su_formGendErrMessage.classList.remove("hidden");
  su_formGenInpItem.forEach((item) => {
    item.classList.remove("inpErr");
  });
});

let usersArr = [];
let users = localStorage.getItem("users");

if (users) {
  usersArr = JSON.parse(users);
}

let loggedInUsersArr = [];
let loggedInUsers = localStorage.getItem("loggedInUsers");

if (loggedInUsers) {
  loggedInUsersArr = JSON.parse(loggedInUsers);
}

class User {
  constructor(
    userId,
    firstName,
    lastName,
    birthday,
    gender,
    emailOrNum,
    password,
    passRememStatus,
    profileImage,
    coverImage,
    posts,
    likedPosts,
    pageFollowStatus,
    pageVisibilityStatus,
    hiddenPosts,
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender;
    this.emailOrNum = emailOrNum;
    this.password = password;
    this.passRememStatus = passRememStatus;
    this.profileImage = profileImage;
    this.coverImage = coverImage;
    this.posts = posts;
    this.likedPosts = likedPosts;
    this.pageFollowStatus = pageFollowStatus;
    this.pageVisibilityStatus = pageVisibilityStatus;
    this.hiddenPosts = hiddenPosts;
  }
}

let checkedGender;

su_formSuBtn.addEventListener("click", function () {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      checkedGender = gender[i].value;
    }
  }

  let birthday =
    su_formBdYear.value + "-" + su_formBdMon.value + "-" + su_formBdDay.value;

  if (su_formFnInp.value === "") {
    su_formFnErr.classList.remove("hidden");
    su_formFnErrMessage.classList.remove("hidden");
    su_formFnInp.classList.remove("inpErr");
  }

  if (su_formLnInp.value === "") {
    su_formLnInp.classList.add("inpErr");
    su_formLnErr.classList.remove("hidden");
  }

  if (su_formFnInp.value !== "" && su_formLnInp.value === "")
    su_formLnErrMessage.classList.remove("hidden");

  if (Number(su_formBdYear.value) > currentYear - 5) {
    su_formSel.forEach((sel) => {
      sel.classList.add("inpErr");
    });
    su_formBdErr.classList.remove("hidden");
  }

  if (
    su_formFnInp.value !== "" &&
    su_formLnInp.value !== "" &&
    Number(su_formBdYear.value) > currentYear - 5
  )
    su_formBdErrMessage.classList.remove("hidden");

  if (!checkedGender) {
    su_formGendErr.classList.remove("hidden");
    su_formGenInpItem.forEach((item) => {
      item.classList.add("inpErr");
    });
  }

  if (
    su_formFnInp.value !== "" &&
    su_formLnInp.value !== "" &&
    Number(su_formBdYear.value) < currentYear - 5 &&
    !checkedGender
  )
    su_formGendErrMessage.classList.remove("hidden");

  if (su_formEmailInp.value === "") {
    su_formEmailErr.classList.remove("hidden");
    su_formEmailInp.classList.add("inpErr");
  }

  if (
    su_formFnInp.value !== "" &&
    su_formLnInp.value !== "" &&
    Number(su_formBdYear.value) < currentYear - 5 &&
    checkedGender &&
    su_formEmailInp.value === ""
  )
    su_formEmailErrMessage.classList.remove("hidden");

  if (su_formPassInp.value === "" || su_formPassInp.value.length < 6) {
    su_formPassErr.classList.remove("hidden");
    su_formPassInp.classList.add("inpErr");
  }

  if (
    su_formFnInp.value !== "" &&
    su_formLnInp.value !== "" &&
    Number(su_formBdYear.value) < currentYear - 5 &&
    checkedGender &&
    su_formEmailInp.value !== "" &&
    validateEmailandPhone(su_formEmailInp.value) &&
    (su_formPassInp.value === "" || su_formPassInp.value.length < 6)
  )
    su_formPassErrMessage.classList.remove("hidden");

  if (
    su_formFnInp.value !== "" &&
    su_formLnInp.value !== "" &&
    Number(su_formBdYear.value) < currentYear - 5 &&
    checkedGender &&
    su_formEmailInp.value !== "" &&
    !validateEmailandPhone(su_formEmailInp.value)
  )
    su_formEmailErrMessage2.classList.remove("hidden");

  const includeVal = (user) => user.emailOrNum === su_formEmailInp.value;

  if (
    su_formFnInp.value !== "" &&
    su_formLnInp.value !== "" &&
    Number(su_formBdYear.value) < currentYear - 5 &&
    (gender[0].checked || gender[1].checked) &&
    su_formEmailInp.value !== "" &&
    su_formPassInp.value !== "" &&
    su_formPassInp.value.length >= 6 &&
    validateEmailandPhone(su_formEmailInp.value) &&
    !usersArr.some(includeVal)
  ) {
    const newUserId = usersArr.length + 1;
    const newUser = new User(
      newUserId,
      su_formFnInp.value,
      su_formLnInp.value,
      birthday,
      checkedGender,
      su_formEmailInp.value,
      su_formPassInp.value,
      false,
      "https://scontent.ftbs2-2.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=207b4a&_nc_ohc=tNiY9GgxkcgQ7kNvwEQhYd_&_nc_oc=AdniKB0rbN0h48fhpHwU3mbzOFSPsi2Pu1k-RnrkmeqRGdbUKerqHWZa0IuuBRtYMe8&_nc_zt=24&_nc_ht=scontent.ftbs2-2.fna&oh=00_AfskEJEg3k4QaaoDgcCM780onQ_ukz8D0lXDR3wA7ut1ag&oe=69A82B7A",
      "",
      [],
      [],
      false,
      true,
      [],
    );
    usersArr.push(newUser);
    loggedInUsersArr.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersArr));
    localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
    localStorage.setItem("ActiveUser", JSON.stringify(newUser));
    window.location.href = "mainFbPage.html";
  } else if (usersArr.some(includeVal)) {
    for (let i = 0; i < usersArr.length; i++) {
      if (
        su_formEmailInp.value === usersArr[i].emailOrNum &&
        su_formPassInp.value === usersArr[i].password
      ) {
        const includeVal2 = (user) => user.userId === usersArr[i].userId;
        if (!loggedInUsersArr.some(includeVal2)) {
          loggedInUsersArr.push(usersArr[i]);
        }
        localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
        localStorage.setItem("ActiveUser", JSON.stringify(usersArr[i]));
        window.location.href = "mainFbPage.html";
      }
    }
  }
});
