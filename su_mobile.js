function correctWhenInputted(input, placeholder, errorIcon, errorMessageArr) {
  input.classList.remove("errBorderCol");
  input.classList.remove("errPhColor");
  placeholder.classList.remove("errFontColor");
  errorIcon.classList.add("hidden");
  errorMessageArr.forEach((message) => {
    message.classList.add("hidden");
  });
}

function showError(input, placeholder, errorIcon, errorMessage) {
  input.classList.add("errBorderCol");
  input.classList.add("errPhColor");
  placeholder.classList.add("errFontColor");
  errorIcon.classList.remove("hidden");
  errorMessage.classList.remove("hidden");
}

// პირველი გვერდის ელემენტები
const su_mobP1Container = document.querySelector(".su_mobP1Container");
const su_mobP1CrAccBtn = document.querySelector(".su_mobP1CrAccBtn");
const su_mobP1BackArrBtn = document.querySelector(".su_mobP1BackArrBtn");
const su_mobP1PopUp = document.querySelector(".su_mobP1PopUp");
const su_mobP1PopStopBtn = document.querySelector(".su_mobP1PopStopBtn");
const su_mobP1PopContBtn = document.querySelector(".su_mobP1PopContBtn");

// მეორე გვერდის ელემენტები
const su_mobP2MainBox = document.querySelector(".su_mobP2MainBox");
const su_mobP2NextBtn = document.querySelector(".su_mobP2NextBtn");
const su_mobP2BackArrBtn = document.querySelector(".su_mobP2BackArrBtn");
const su_mobP2FnInp = document.querySelector(".su_mobP2FnInp");
const su_mobP2LnInp = document.querySelector(".su_mobP2LnInp");
const su_mobP2ErrIconFirst = document.querySelector(".su_mobP2ErrIconFirst");
const su_mobP2ErrIconLast = document.querySelector(".su_mobP2ErrIconLast");
const su_mobP2ErrMessBoth = document.querySelector(".su_mobP2ErrMessBoth");
const su_mobP2ErrMessFirst = document.querySelector(".su_mobP2ErrMessFirst");
const su_mobP2ErrMessLast = document.querySelector(".su_mobP2ErrMessLast");
const su_mobP2inpAddPh = document.querySelectorAll(".su_mobP2inpAddPh");
const su_mobP2inpAddPhFirst = document.querySelector(".su_mobP2inpAddPhFirst");
const su_mobP2inpAddPhLast = document.querySelector(".su_mobP2inpAddPhLast");
const su_mobP2Inp = document.querySelectorAll(".su_mobP2Inp");
const su_mobP2inpDeleteBtn = document.querySelectorAll(".su_mobP2inpDeleteBtn");

// მესამე გვერდის ელემენტები

const su_mobP3MainBox = document.querySelector(".su_mobP3MainBox");
const su_mobP3BackArrBtn = document.querySelector(".su_mobP3BackArrBtn");
const su_mobP3DateInpBox = document.querySelector(".su_mobP3DateInpBox");
const su_mobP3DateInp = document.querySelector(".su_mobP3DateInp");
const su_mobP3DateLabel = document.querySelector(".su_mobP3DateLabel");
const su_mobP3DateInpAgeTxt = document.querySelector(".su_mobP3DateInpAgeTxt");
const su_mobP3NextBtn = document.querySelector(".su_mobP3NextBtn");
const su_mobP3ErrMess = document.querySelector(".su_mobP3ErrMess");

// მეოთხე გვერდის ელემენტები

const su_mobP4MainBox = document.querySelector(".su_mobP4MainBox");
const su_mobP4BackArrBtn = document.querySelector(".su_mobP4BackArrBtn");
const su_mobP4ErrMess = document.querySelector(".su_mobP4ErrMess");
const su_mobP4NextBtn = document.querySelector(".su_mobP4NextBtn");
const gender = document.getElementsByName("gender");

// მეხუთე გვერდის ელემენტები

const su_mobP5MainBox = document.querySelector(".su_mobP5MainBox");
const su_mobP5BackArrBtn = document.querySelector(".su_mobP5BackArrBtn");
const su_mobP5MobInp = document.querySelector(".su_mobP5MobInp");
const su_mobP5inpDeleteBtn = document.querySelector(".su_mobP5inpDeleteBtn");
const su_mobP5inpAddPh = document.querySelector(".su_mobP5inpAddPh");
const su_mobP5ErrIcon = document.querySelector(".su_mobP5ErrIcon");
const su_mobP5ErrMess1 = document.querySelector(".su_mobP5ErrMess1");
const su_mobP5ErrMess2 = document.querySelector(".su_mobP5ErrMess2");
const su_mobP5NextBtn = document.querySelector(".su_mobP5NextBtn");
const su_mobP5SignUpEmailBtn = document.querySelector(
  ".su_mobP5SignUpEmailBtn",
);

// მეექვსე გვერდი (მეილის ინფუთის) ელემენტები

const su_mobP6MainBox = document.querySelector(".su_mobP6MainBox");
const su_mobP6BackArrBtn = document.querySelector(".su_mobP6BackArrBtn");
const su_mobP6EmailInp = document.querySelector(".su_mobP6EmailInp");
const su_mobP6inpAddPh = document.querySelector(".su_mobP6inpAddPh");
const su_mobP6inpDeleteBtn = document.querySelector(".su_mobP6inpDeleteBtn");
const su_mobP6ErrIcon = document.querySelector(".su_mobP6ErrIcon");
const su_mobP6ErrMess1 = document.querySelector(".su_mobP6ErrMess1");
const su_mobP6ErrMess2 = document.querySelector(".su_mobP6ErrMess2");
const su_mobP6NextBtn = document.querySelector(".su_mobP6NextBtn");
const su_mobP6SignUpMobileBtn = document.querySelector(
  ".su_mobP6SignUpMobileBtn",
);

// პასვორდის გვერდი ელემენტები

const su_mobPassWindBox = document.querySelector(".su_mobPassWindBox");
const su_mobPassWindBackArrBtn = document.querySelector(
  ".su_mobPassWindBackArrBtn",
);
const su_mobPassInp = document.querySelector(".su_mobPassInp");
const su_mobPassinpAddPh = document.querySelector(".su_mobPassinpAddPh");
const su_mobPassHideBtn = document.querySelector(".su_mobPassHideBtn");
const su_mobPassShowBtn = document.querySelector(".su_mobPassShowBtn");
const su_mobPassErrIcon = document.querySelector(".su_mobPassErrIcon");
const su_mobPassErrMess = document.querySelector(".su_mobPassErrMess");
const su_mobPassNextBtn = document.querySelector(".su_mobPassNextBtn");

// პასვორდის შენახვის გვერდის ელემენტები

const su_mobPassSaveWindBox = document.querySelector(".su_mobPassSaveWindBox");
const su_mobPassSaveBackArrBtn = document.querySelector(
  ".su_mobPassSaveBackArrBtn",
);
const su_mobTxt2SaveInfoName = document.querySelector(
  ".su_mobTxt2SaveInfoName",
);
const su_mobSaveInfoWindSaveBtn = document.querySelector(
  ".su_mobSaveInfoWindSaveBtn",
);
const su_mobSaveInfoWindNotNowBtn = document.querySelector(
  ".su_mobSaveInfoWindNotNowBtn",
);

// პირველ გვერდზე უკანა ღილაკის დაჭერა

su_mobP1BackArrBtn.addEventListener("click", function () {
  su_mobP1PopUp.classList.remove("hidden");
});

su_mobP1PopStopBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

su_mobP1PopContBtn.addEventListener("click", function () {
  su_mobP1PopUp.classList.add("hidden");
});

// პირველ გვერდზე next-ზე დაჭერა

su_mobP1CrAccBtn.addEventListener("click", function () {
  su_mobP1Container.classList.add("hidden");
  su_mobP2MainBox.classList.remove("hidden");
});

// მეორე გვერდზე უკანა ღილაკის დაჭერა

su_mobP2BackArrBtn.addEventListener("click", function () {
  su_mobP1Container.classList.remove("hidden");
  su_mobP2MainBox.classList.add("hidden");
});

// მეორე გვერდზე next button-ზე დაჭერის დროს შემოწმება ინფუთების და შესაბამისი სტილების გამოტანა

su_mobP2NextBtn.addEventListener("click", function () {
  if (su_mobP2FnInp.value !== "" && su_mobP2LnInp.value !== "") {
    su_mobP2MainBox.classList.add("hidden");
    su_mobP3MainBox.classList.remove("hidden");
  } else if (su_mobP2FnInp.value === "" && su_mobP2LnInp.value === "") {
    su_mobP2ErrMessBoth.classList.remove("hidden");
    su_mobP2ErrIconFirst.classList.remove("hidden");
    su_mobP2ErrIconLast.classList.remove("hidden");
    su_mobP2Inp.forEach((inp, i) => {
      inp.classList.add("errBorderCol");
      su_mobP2inpAddPh[i].classList.add("errFontColor");
      inp.classList.add("errPhColor");
    });
  } else if (su_mobP2FnInp.value === "" && su_mobP2LnInp.value !== "") {
    su_mobP2ErrMessFirst.classList.remove("hidden");
    su_mobP2ErrIconFirst.classList.remove("hidden");
    su_mobP2FnInp.classList.add("errBorderCol");
    su_mobP2inpAddPhFirst.classList.add("errFontColor");
    su_mobP2FnInp.classList.add("errPhColor");
  } else if (su_mobP2FnInp.value !== "" && su_mobP2LnInp.value === "") {
    su_mobP2ErrMessLast.classList.remove("hidden");
    su_mobP2ErrIconLast.classList.remove("hidden");
    su_mobP2LnInp.classList.add("errBorderCol");
    su_mobP2inpAddPhLast.classList.add("errFontColor");
    su_mobP2LnInp.classList.add("errPhColor");
  }
});

su_mobP2FnInp.addEventListener("input", function () {
  su_mobP2ErrIconFirst.classList.add("hidden");
  su_mobP2ErrMessBoth.classList.add("hidden");
  su_mobP2ErrMessFirst.classList.add("hidden");
  su_mobP2ErrMessLast.classList.add("hidden");
  su_mobP2ErrIconFirst.classList.add("hidden");
  su_mobP2ErrIconLast.classList.add("hidden");
  su_mobP2Inp.forEach((inp, i) => {
    inp.classList.remove("errBorderCol");
    su_mobP2inpAddPh[i].classList.remove("errFontColor");
    inp.classList.remove("errPhColor");
  });
});

su_mobP2LnInp.addEventListener("input", function () {
  su_mobP2ErrMessBoth.classList.add("hidden");
  su_mobP2ErrMessFirst.classList.add("hidden");
  su_mobP2ErrMessLast.classList.add("hidden");
  su_mobP2ErrIconFirst.classList.add("hidden");
  su_mobP2ErrIconLast.classList.add("hidden");
  su_mobP2Inp.forEach((inp, i) => {
    inp.classList.remove("errBorderCol");
    su_mobP2inpAddPh[i].classList.remove("errFontColor");
    inp.classList.remove("errPhColor");
  });
});

// მესამე გვერდზე უკანა ღილაკის დაჭერა

su_mobP3BackArrBtn.addEventListener("click", function () {
  su_mobP2MainBox.classList.remove("hidden");
  su_mobP3MainBox.classList.add("hidden");
});

// მესამე გვერდზე თარიღის ინფუთის საწყისი მნიშვნელობა დღევანდელი თარიღია, ასევე მომხმარებლის ასაკია არჩეული თარიღის
// და დღევანდელი თარიღის სხვაობა

let currentValue;
let currentDate = new Date();
let currentDay = currentDate.getDate().toString();
let currentMonth = (currentDate.getMonth() + 1).toString();
let currentYear = currentDate.getFullYear().toString();

if (currentDay.length === 1 && currentMonth.length === 1) {
  currentValue =
    currentYear + "-" + "0" + currentMonth + "-" + "0" + currentDay;
} else if (currentDay.length === 1) {
  currentValue = currentYear + "-" + currentMonth + "-" + "0" + currentDay;
} else if (currentMonth.length === 1) {
  currentValue = currentYear + "-" + currentMonth + "-" + "0" + currentDay;
}

su_mobP3DateInp.value = currentValue;

function convertmili(mSeconds) {
  return mSeconds / 31536000000;
}

su_mobP3DateInp.addEventListener("input", function () {
  let compareDate = su_mobP3DateInp.value;
  let age = Math.floor(
    convertmili(
      Math.abs(new Date() - new Date(compareDate.replace(/-/g, "/"))),
    ),
  );
  su_mobP3DateInpAgeTxt.textContent = age;
  if (age > 4) {
    su_mobP3ErrMess.classList.add("hidden");
    su_mobP3DateLabel.classList.remove("errFontColor");
    su_mobP3DateInpBox.classList.remove("errBorderCol");
  }
});

// მესამე გვერდზე next ღილაკზე დაჭერის დროს, მოწმდება ასაკი მეტია თუ არა 4ზე

su_mobP3NextBtn.addEventListener("click", function () {
  let compareDate = su_mobP3DateInp.value;
  let age = Math.floor(
    convertmili(
      Math.abs(new Date() - new Date(compareDate.replace(/-/g, "/"))),
    ),
  );
  su_mobP3DateInpAgeTxt.textContent = age;
  if (age > 4) {
    su_mobP3MainBox.classList.add("hidden");
    su_mobP4MainBox.classList.remove("hidden");
  } else if (age < 4) {
    su_mobP3ErrMess.classList.remove("hidden");
    su_mobP3DateLabel.classList.add("errFontColor");
    su_mobP3DateInpBox.classList.add("errBorderCol");
  }
});

// მეოთხე გვერდზე უკანა ღილაკის დაჭერა

su_mobP4BackArrBtn.addEventListener("click", function () {
  su_mobP4MainBox.classList.add("hidden");
  su_mobP3MainBox.classList.remove("hidden");
});

// მეოთხე გვერდზე next ღილაკის დაჭერა

su_mobP4NextBtn.addEventListener("click", function () {
  if (gender[0].checked || gender[1].checked) {
    su_mobP5MainBox.classList.remove("hidden");
    su_mobP4MainBox.classList.add("hidden");
  } else {
    su_mobP4ErrMess.classList.remove("hidden");
  }
});

gender.forEach((radio) => {
  radio.addEventListener("change", function () {
    su_mobP4ErrMess.classList.add("hidden");
  });
});

// მეხუთე გვერდზე უკანა ღილაკის დაჭერა

su_mobP5BackArrBtn.addEventListener("click", function () {
  su_mobP5MainBox.classList.add("hidden");
  su_mobP4MainBox.classList.remove("hidden");
});

// მეხუთე გვერდზე next ღილაკის დაჭერა

function validateMobile(info) {
  let regExNum =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

  return regExNum.test(info);
}

su_mobP5NextBtn.addEventListener("click", function () {
  if (su_mobP5MobInp.value !== "" && validateMobile(su_mobP5MobInp.value)) {
    su_mobP5MainBox.classList.add("hidden");
    su_mobPassWindBox.classList.remove("hidden");
  } else if (su_mobP5MobInp.value === "") {
    showError(
      su_mobP5MobInp,
      su_mobP5inpAddPh,
      su_mobP5ErrIcon,
      su_mobP5ErrMess1,
    );
  } else {
    showError(
      su_mobP5MobInp,
      su_mobP5inpAddPh,
      su_mobP5ErrIcon,
      su_mobP5ErrMess2,
    );
  }
});

su_mobP5MobInp.addEventListener("input", function () {
  correctWhenInputted(su_mobP5MobInp, su_mobP5inpAddPh, su_mobP5ErrIcon, [
    su_mobP5ErrMess1,
    su_mobP5ErrMess2,
  ]);
});

// მეხუთე გვერდზე იმეილით დარეგისტრირების ღილაკზე დაჭერა

su_mobP5SignUpEmailBtn.addEventListener("click", function () {
  su_mobP5MainBox.classList.add("hidden");
  su_mobP6MainBox.classList.remove("hidden");
  su_mobP5MobInp.value = "";
});

// მეექვსე გვერდზე უკანა ღილაკის დაჭერა

su_mobP6BackArrBtn.addEventListener("click", function () {
  su_mobP5MainBox.classList.remove("hidden");
  su_mobP6MainBox.classList.add("hidden");
});

// მეექვსე გვერდზე next ღილაკის დაჭერა

function validateEmail(info) {
  let regExEm =
    /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/gi;

  return regExEm.test(info);
}

su_mobP6NextBtn.addEventListener("click", function () {
  if (su_mobP6EmailInp.value !== "" && validateEmail(su_mobP6EmailInp.value)) {
    su_mobP6MainBox.classList.add("hidden");
    su_mobPassWindBox.classList.remove("hidden");
  } else if (su_mobP6EmailInp.value === "") {
    showError(
      su_mobP6EmailInp,
      su_mobP6inpAddPh,
      su_mobP6ErrIcon,
      su_mobP6ErrMess1,
    );
  } else {
    showError(
      su_mobP6EmailInp,
      su_mobP6inpAddPh,
      su_mobP6ErrIcon,
      su_mobP6ErrMess2,
    );
  }
});

su_mobP6EmailInp.addEventListener("input", function () {
  correctWhenInputted(su_mobP6EmailInp, su_mobP6inpAddPh, su_mobP6ErrIcon, [
    su_mobP6ErrMess1,
    su_mobP6ErrMess2,
  ]);
});

// მეექვსე გვერდზე მობაილით დარეგისტრირების ღილაკის დაჭერა

su_mobP6SignUpMobileBtn.addEventListener("click", function () {
  su_mobP5MainBox.classList.remove("hidden");
  su_mobP6MainBox.classList.add("hidden");
  su_mobP6EmailInp.value = "";
});

// პასვორდის გვერდზე უკანა ღილაკის დაჭერა

su_mobPassWindBackArrBtn.addEventListener("click", function () {
  su_mobP5MainBox.classList.remove("hidden");
  su_mobPassWindBox.classList.add("hidden");
});

// პასვორდის გვერდზე next ღილაკის დაჭერა

su_mobPassNextBtn.addEventListener("click", function () {
  if (su_mobPassInp.value.length >= 6) {
    su_mobPassWindBox.classList.add("hidden");
    su_mobPassSaveWindBox.classList.remove("hidden");
  } else {
    showError(
      su_mobPassInp,
      su_mobPassinpAddPh,
      su_mobPassErrIcon,
      su_mobPassErrMess,
    );
    su_mobPassHideBtn.classList.add("hidden");
    su_mobPassShowBtn.classList.add("hidden");
  }
});

su_mobPassInp.addEventListener("input", function () {
  correctWhenInputted(su_mobPassInp, su_mobPassinpAddPh, su_mobPassErrIcon, [
    su_mobPassErrMess,
  ]);
});

// პასვორდის შენახვის გვერდზე უკანა ღილაკის დაჭერა

su_mobPassSaveBackArrBtn.addEventListener("click", function () {
  su_mobPassWindBox.classList.remove("hidden");
  su_mobPassSaveWindBox.classList.add("hidden");
});

// ინფუთების სტილების შეცვლის ფუნქცია

function inputEffect(input, addPh, deleteBtn) {
  input.addEventListener("focus", function () {
    addPh.style.opacity = 1;
    input.style.paddingTop = "25px";
  });

  input.addEventListener("focusout", function () {
    if (input.value === "") {
      addPh.style.opacity = 0;
      input.style.paddingTop = "10px";
    }
    deleteBtn.classList.add("hidden");
  });

  input.addEventListener("input", function () {
    deleteBtn.classList.remove("hidden");
    if (input.value === "") {
      deleteBtn.classList.add("hidden");
    }
  });

  deleteBtn.addEventListener("mousedown", function (event) {
    event.preventDefault();
    input.value = "";
    input.focus();
    deleteBtn.classList.add("hidden");
  });
}

su_mobP2Inp.forEach((inp, i) => {
  inputEffect(inp, su_mobP2inpAddPh[i], su_mobP2inpDeleteBtn[i]);
});

inputEffect(su_mobP5MobInp, su_mobP5inpAddPh, su_mobP5inpDeleteBtn);

inputEffect(su_mobP6EmailInp, su_mobP6inpAddPh, su_mobP6inpDeleteBtn);

// პასვორდის ველზე ჩვენება-დამალვის დაყენების ფუნქცია

function passHideAndShow(inp, hideBtn, showBtn) {
  inp.addEventListener("input", function () {
    if (inp.type === "password") {
      showBtn.classList.remove("hidden");
    }

    if (inp.type === "text") {
      hideBtn.classList.remove("hidden");
    }

    showBtn.addEventListener("click", function () {
      inp.type = "text";
      showBtn.classList.add("hidden");
      hideBtn.classList.remove("hidden");
    });

    hideBtn.addEventListener("click", function () {
      inp.type = "password";
      showBtn.classList.remove("hidden");
      hideBtn.classList.add("hidden");
    });

    if (inp.value === "") {
      showBtn.classList.add("hidden");
      hideBtn.classList.add("hidden");
    }
  });
}

su_mobPassInp.addEventListener("focus", function () {
  su_mobPassinpAddPh.style.opacity = 1;
  su_mobPassInp.style.paddingTop = "25px";
});

su_mobPassInp.addEventListener("focusout", function () {
  if (su_mobPassInp.value === "") {
    su_mobPassinpAddPh.style.opacity = 0;
    su_mobPassInp.style.paddingTop = "10px";
  }
});

passHideAndShow(su_mobPassInp, su_mobPassHideBtn, su_mobPassShowBtn);

// user-ის დამატება

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

let newUserEmailOrNum;
let checkedGender;

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
  }
}

function jerArviciSaxeli(button, user) {}

su_mobPassNextBtn.addEventListener("click", function () {
  if (su_mobPassInp.value.length >= 6) {
    if (su_mobP6EmailInp.value !== "") {
      newUserEmailOrNum = su_mobP6EmailInp.value;
    } else {
      newUserEmailOrNum = su_mobP5MobInp.value;
    }
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        checkedGender = gender[i].value;
      }
    }

    const includeVal = (user) => user.emailOrNum === newUserEmailOrNum;

    if (!usersArr.some(includeVal)) {
      const newUserId = usersArr.length + 1;
      const newUser = new User(
        newUserId,
        su_mobP2FnInp.value,
        su_mobP2LnInp.value,
        su_mobP3DateInp.value,
        checkedGender,
        newUserEmailOrNum,
        su_mobPassInp.value,
        false,
        "https://scontent.ftbs2-2.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=207b4a&_nc_ohc=tNiY9GgxkcgQ7kNvwEQhYd_&_nc_oc=AdniKB0rbN0h48fhpHwU3mbzOFSPsi2Pu1k-RnrkmeqRGdbUKerqHWZa0IuuBRtYMe8&_nc_zt=24&_nc_ht=scontent.ftbs2-2.fna&oh=00_AfskEJEg3k4QaaoDgcCM780onQ_ukz8D0lXDR3wA7ut1ag&oe=69A82B7A",
      );
      su_mobTxt2SaveInfoName.textContent =
        newUser.firstName + " " + newUser.lastName;
      su_mobSaveInfoWindSaveBtn.addEventListener("click", function () {
        newUser.passRememStatus = true;
        usersArr.push(newUser);
        loggedInUsersArr.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersArr));
        localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
        localStorage.setItem("ActiveUser", JSON.stringify(newUser));
        window.location.href = "mainFbPage.html";
      });
      su_mobSaveInfoWindNotNowBtn.addEventListener("click", function () {
        usersArr.push(newUser);
        loggedInUsersArr.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersArr));
        localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
        localStorage.setItem("ActiveUser", JSON.stringify(newUser));
        window.location.href = "mainFbPage.html";
      });
    } else if (usersArr.some(includeVal)) {
      for (let i = 0; i < usersArr.length; i++) {
        if (
          newUserEmailOrNum === usersArr[i].emailOrNum &&
          su_mobPassInp.value === usersArr[i].password
        ) {
          su_mobTxt2SaveInfoName.textContent =
            usersArr[i].firstName + " " + usersArr[i].lastName;
          const includeVal2 = (user) => user.userId === usersArr[i].userId;

          function changeStatus(status) {
            usersArr[i].passRememStatus = status;
            if (!loggedInUsersArr.some(includeVal2)) {
              loggedInUsersArr.push(usersArr[i]);
            } else {
              for (let j = 0; j < loggedInUsersArr.length; j++) {
                if (
                  newUserEmailOrNum === loggedInUsersArr[j].emailOrNum &&
                  su_mobPassInp.value === loggedInUsersArr[j].password
                ) {
                  loggedInUsersArr[j].passRememStatus = status;
                }
              }
            }
            localStorage.setItem("users", JSON.stringify(usersArr));
            localStorage.setItem(
              "loggedInUsers",
              JSON.stringify(loggedInUsersArr),
            );
            localStorage.setItem("ActiveUser", JSON.stringify(usersArr[i]));
            window.location.href = "mainFbPage.html";
          }

          su_mobSaveInfoWindSaveBtn.addEventListener("click", function () {
            changeStatus(true);
          });
          su_mobSaveInfoWindNotNowBtn.addEventListener("click", function () {
            changeStatus(false);
          });
          
        }
      }
    }
  }
});
