let li_passHideBtn = document.querySelector(".li_passHideBtn");
let li_passShowBtn = document.querySelector(".li_passShowBtn");
let li_PassInp = document.querySelector(".li_PassInp");
const li_EmailInp = document.querySelector(".li_EmailInp");
const li_liBtn = document.querySelector(".li_liBtn");

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

passHideAndShow(li_PassInp, li_passHideBtn, li_passShowBtn);

let users = localStorage.getItem("users");
let usersArr = JSON.parse(users);

let loggedInUsers = localStorage.getItem("loggedInUsers");
let loggedInUsersArr = JSON.parse(loggedInUsers);

li_liBtn.addEventListener("click", function () {
  for (let i = 0; i < usersArr.length; i++) {
    if (
      li_EmailInp.value === usersArr[i].emailOrNum &&
      li_PassInp.value === usersArr[i].password
    ) {
      let ActUserId = usersArr[i].userId;
      window.location.href = "mainFbPage.html";
      const includeVal = (user) => user.userId === ActUserId;
      if (!loggedInUsersArr.some(includeVal)) {
        loggedInUsersArr.push(usersArr[i]);
      }
      localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
      localStorage.setItem("ActiveUser", JSON.stringify(usersArr[i]));
    }
  }
});
