const sp = document.querySelector("#sp");
const sp_passInp = document.querySelectorAll(".sp_passInp");
const sp_passHideBtn = document.querySelectorAll(".sp_passHideBtn");
const sp_passShowBtn = document.querySelectorAll(".sp_passShowBtn");

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

// დესკტოპზე პასვორდის ჩვენება-დამალვა

sp_passInp.forEach((inp, i) => {
  // ძირითადი ინფუთი და ექაუნთის დამატების დროს
  passHideAndShow(sp_passInp[i], sp_passHideBtn[i], sp_passShowBtn[i]);
});

const sp_left = document.querySelector(".sp_left");
const sp_quote = document.querySelector(".sp_quote");
const sp_logoBox = document.querySelector(".sp_logoBox");
const sp_logo = document.querySelector(".sp_logo");
const sp_mainContent = document.querySelector(".sp_mainContent");
const sp_logInBtn = document.querySelectorAll(".sp_logInBtn");
const sp_mailInp = document.querySelectorAll(".sp_mailInp");

const sp_accAddWind = document.querySelector(".sp_accAddWind");
const sp_accAddWindClBtn = document.querySelector(".sp_accAddWindClBtn");
const sp_passRememBtn = document.querySelector(".sp_passRememBtn");

const sp_profileWindowLogIn = document.querySelector(".sp_profileWindowLogIn");
const sp_profileWindClBtn = document.querySelector(".sp_profileWindClBtn");
const sp_profileWindowLogInTxt = document.querySelector(
  ".sp_profileWindowLogInTxt",
);
const sp_profileWindowlogInBtn = document.querySelector(
  ".sp_profileWindowlogInBtn",
);
const sp_profileWindowPassRememBtn = document.querySelector(
  ".sp_profileWindowPassRememBtn",
);

let users = localStorage.getItem("users"); //. ყველა იუსერი
let usersArr = JSON.parse(users); // ყველა იუსერის მასივი
let loggedInUsers = localStorage.getItem("loggedInUsers"); // დალოგინებული იუსერები
let loggedInUsersArr = JSON.parse(loggedInUsers); // დალოგინებული იუსერების მასივი

if (loggedInUsersArr && loggedInUsersArr.length > 0) {
  // თუ არსებობს დალოგინებული იუსერი დიზაინის შეცვლა

  sp_quote.classList.add("hidden");
  sp_logo.classList.add("sp_logoLogInHis");
  sp_logoBox.classList.add("sp_logoBoxLogInHis");
  const recentLogins = document.createElement("div");
  sp_left.appendChild(recentLogins);
  sp_left.classList.add("sp_leftLogInHist");
  const recentLoginsTxt1 = document.createElement("p");
  recentLoginsTxt1.textContent = "Recent Logins";
  recentLoginsTxt1.style.fontSize = "36px";
  const recentLoginsTxt2 = document.createElement("p");
  recentLoginsTxt2.textContent = "Click your picture or add an account.";
  recentLoginsTxt2.style.fontSize = "15px";
  recentLoginsTxt2.style.color = "#606770";
  recentLoginsTxt2.style.marginBottom = "24px";
  recentLogins.appendChild(recentLoginsTxt1);
  recentLogins.appendChild(recentLoginsTxt2);
  const recentLoginsProfiles = document.createElement("div");
  recentLoginsProfiles.classList.add("recentLoginsProfiles");
  recentLogins.appendChild(recentLoginsProfiles);

  // თითოეული იუსერისთვის იდენტური ბოქსის შექმნა

  for (let i = 0; i < loggedInUsersArr.length; i++) {
    const currentUser = loggedInUsersArr[i];

    const profileWind = document.createElement("button");
    profileWind.classList.add("profileWind");
    const profileWindImg = document.createElement("img");
    profileWindImg.src = currentUser.profileImage;
    profileWindImg.classList.add("profileWindImg");
    const profileWindName = document.createElement("p");
    profileWindName.textContent = loggedInUsersArr[i].firstName;
    profileWindName.classList.add("profileWindName");
    recentLoginsProfiles.appendChild(profileWind);
    profileWind.appendChild(profileWindImg);
    profileWind.appendChild(profileWindName);
    const ProfDelBtn = document.createElement("button");
    ProfDelBtn.classList.add("ProfDelBtn");
    const ProfDelIcon = document.createElement("div");
    ProfDelIcon.classList.add("ProfDelIcon");
    ProfDelBtn.appendChild(ProfDelIcon);
    profileWind.appendChild(ProfDelBtn);

    // ეფექტები პროფაილის აიქონზე

    profileWind.addEventListener("mouseover", function () {
      ProfDelBtn.classList.add("ProfDelBtnSc");
      ProfDelIcon.classList.add("ProfDelIconSc");
    });

    profileWind.addEventListener("mouseout", function () {
      ProfDelBtn.classList.remove("ProfDelBtnSc");
      ProfDelIcon.classList.remove("ProfDelIconSc");
    });

    const accDelMess = document.createElement("div");
    const accDelMessMain = document.createElement("p");
    accDelMessMain.textContent = "Remove account from this page";
    const accDelMessArr = document.createElement("div");

    accDelMess.classList.add("hidden");
    accDelMessMain.classList.add("accDelMessMain");
    accDelMessArr.classList.add("accDelMessArr");

    profileWind.appendChild(accDelMess);
    accDelMess.appendChild(accDelMessMain);
    accDelMess.appendChild(accDelMessArr);

    ProfDelBtn.addEventListener("mouseover", function () {
      ProfDelIcon.classList.add("ProfDelIconSc");
      accDelMess.classList.remove("hidden");
    });

    ProfDelBtn.addEventListener("mouseout", function () {
      ProfDelIcon.classList.remove("ProfDelIconSc");
      accDelMess.classList.add("hidden");
    });

    // პროფაილის წაშლის ღილაკზე დაჭერა

    ProfDelBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      recentLoginsProfiles.removeChild(profileWind);
      loggedInUsersArr = loggedInUsersArr.filter(
        (user) => user !== currentUser,
      );
      localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
      localStorage.setItem("ActiveUser", JSON.stringify(currentUser));
      localStorage.setItem("users", JSON.stringify(usersArr));
      if (loggedInUsersArr.length === 0) {
        sp_left.removeChild(recentLogins);
        sp_quote.classList.remove("hidden");
        sp_logo.classList.remove("sp_logoLogInHis");
        sp_logoBox.classList.remove("sp_logoBoxLogInHis");
        sp_left.classList.remove("sp_leftLogInHist");
      }
    });

    // თითოეული პროფილისთვის პასვორდის ჩასაწერი ფანჯრის შემქნა

    const sp_profileWindowLogIn = document.createElement("div");
    sp_profileWindowLogIn.classList.add("sp_accAddWind");
    sp_profileWindowLogIn.classList.add("sp_profileWindowLogIn");
    sp_profileWindowLogIn.classList.add("hidden");
    sp.appendChild(sp_profileWindowLogIn);

    const sp_profileWindowLogInForm = document.createElement("div");
    sp_profileWindowLogInForm.classList.add("sp_accAddForm");
    sp_profileWindowLogIn.appendChild(sp_profileWindowLogInForm);

    const sp_profileWindowLogInProfImg = document.createElement("img");
    sp_profileWindowLogInProfImg.src = currentUser.profileImage;
    sp_profileWindowLogInProfImg.classList.add("sp_profileWindowLogInProfImg");
    sp_profileWindowLogInForm.appendChild(sp_profileWindowLogInProfImg);

    const sp_profileWindowLogInTxt = document.createElement("p");
    sp_profileWindowLogInTxt.textContent =
      currentUser.firstName + " " + currentUser.lastName;
    sp_profileWindowLogInTxt.classList.add("sp_profileWindowLogInTxt");
    sp_profileWindowLogInForm.appendChild(sp_profileWindowLogInTxt);

    const sp_profileWindowPassInpBox = document.createElement("div");
    sp_profileWindowPassInpBox.classList.add("sp_inputBox");
    sp_profileWindowPassInpBox.classList.add("sp_passInpBox");
    sp_profileWindowLogInForm.appendChild(sp_profileWindowPassInpBox);

    const sp_profileWindowPassInp = document.createElement("input");
    sp_profileWindowPassInp.classList.add("sp_profileWindowPassInp");
    sp_profileWindowPassInp.classList.add("sp_input");
    sp_profileWindowPassInp.type = "password";
    sp_profileWindowPassInp.placeholder = "Password";
    sp_profileWindowPassInpBox.appendChild(sp_profileWindowPassInp);

    const sp_profileWindowPassHideBtn = document.createElement("button");
    sp_profileWindowPassHideBtn.classList.add("sp_passVisBtn");
    sp_profileWindowPassHideBtn.classList.add("sp_profileWindowPassHideBtn");
    sp_profileWindowPassHideBtn.classList.add("hidden");
    sp_profileWindowPassInpBox.appendChild(sp_profileWindowPassHideBtn);

    const sp_profileWindowPassHideIcon = document.createElement("img");
    sp_profileWindowPassHideIcon.src =
      "https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yL/r/b6nQl1NPLRq.png";
    sp_profileWindowPassHideIcon.classList.add("sp_passVisIcon");
    sp_profileWindowPassHideBtn.appendChild(sp_profileWindowPassHideIcon);

    const sp_profileWindowPassShowBtn = document.createElement("button");
    sp_profileWindowPassShowBtn.classList.add("sp_passVisBtn");
    sp_profileWindowPassShowBtn.classList.add("sp_profileWindowPassShowBtn");
    sp_profileWindowPassShowBtn.classList.add("hidden");
    sp_profileWindowPassInpBox.appendChild(sp_profileWindowPassShowBtn);

    passHideAndShow(
      // პროფილის აიქონზე დაჭერის დროს
      sp_profileWindowPassInp,
      sp_profileWindowPassHideBtn,
      sp_profileWindowPassShowBtn,
    );

    const sp_profileWindowPassShowIcon = document.createElement("img");
    sp_profileWindowPassShowIcon.src =
      "https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yq/r/iHk6KioQuJP.png";
    sp_profileWindowPassShowIcon.classList.add("sp_passVisIcon");
    sp_profileWindowPassShowBtn.appendChild(sp_profileWindowPassShowIcon);

    const sp_profileWindowPassRememBox = document.createElement("div");
    sp_profileWindowPassRememBox.classList.add("sp_passRememBox");
    sp_profileWindowLogInForm.appendChild(sp_profileWindowPassRememBox);

    const sp_profileWindowPassRememBtn = document.createElement("input");
    sp_profileWindowPassRememBtn.type = "checkbox";
    sp_profileWindowPassRememBtn.id = "profWindpassRemem";
    sp_profileWindowPassRememBtn.classList.add("sp_profileWindowPassRememBtn");
    sp_profileWindowPassRememBox.appendChild(sp_profileWindowPassRememBtn);

    const sp_profileWindowPassRememTxt = document.createElement("label");
    sp_profileWindowPassRememTxt.for = "profWindpassRemem";
    sp_profileWindowPassRememTxt.textContent = "Remember password";
    sp_profileWindowPassRememTxt.classList.add("sp_passRememTxt");
    sp_profileWindowPassRememBox.appendChild(sp_profileWindowPassRememTxt);

    const sp_profileWindowLogInBtnBox = document.createElement("div");
    sp_profileWindowLogInBtnBox.classList.add("sp_logInBtnBox");
    sp_profileWindowLogInBtnBox.classList.add("sp_addAccLogInBtnBox");
    sp_profileWindowLogInForm.appendChild(sp_profileWindowLogInBtnBox);

    const sp_profileWindowlogInBtn = document.createElement("button");
    sp_profileWindowlogInBtn.textContent = "Log In";
    sp_profileWindowlogInBtn.classList.add("sp_profileWindowlogInBtn");
    sp_profileWindowlogInBtn.classList.add("sp_addAccLogInBtn");
    sp_profileWindowlogInBtn.classList.add("sp_scaleBtn");
    sp_profileWindowLogInBtnBox.appendChild(sp_profileWindowlogInBtn);

    const sp_profileWindowforgPassBtnBox = document.createElement("div");
    sp_profileWindowforgPassBtnBox.classList.add("sp_forgotPassBtnBox");
    sp_profileWindowforgPassBtnBox.classList.add("sp_accAddforgPassBtnBox");
    sp_profileWindowLogInForm.appendChild(sp_profileWindowforgPassBtnBox);

    const sp_profileWindowforgPassBtn = document.createElement("a");
    sp_profileWindowforgPassBtn.classList.add("sp_forgotPassBtn");
    sp_profileWindowforgPassBtn.classList.add("sp_accAddforgPassBtn");
    sp_profileWindowforgPassBtn.textContent = "Forgot password?";
    sp_profileWindowforgPassBtnBox.appendChild(sp_profileWindowforgPassBtn);

    const sp_profileWindClBtn = document.createElement("button");
    sp_profileWindClBtn.classList.add("sp_accAddWindClBtn");
    sp_profileWindClBtn.classList.add("sp_profileWindClBtn");
    sp_profileWindowLogInForm.appendChild(sp_profileWindClBtn);

    const sp_profileWindClIcon = document.createElement("div");
    sp_profileWindClIcon.classList.add("sp_accAddWindClIcon");
    sp_profileWindClBtn.appendChild(sp_profileWindClIcon);

    // პროფაილზე დაჭერა

    profileWind.addEventListener("click", function () {
      if (currentUser.passRememStatus) {
        localStorage.setItem("ActiveUser", JSON.stringify(currentUser));
        window.location.href = "mainFbPage.html";
        sp_passRememBtn.checked = false;
      } else {
        sp.classList.add("sp_background");
        sp_profileWindowLogIn.classList.remove("hidden");
      }
    });

    sp_profileWindowlogInBtn.addEventListener("click", function () {
      if (sp_profileWindowPassInp.value === currentUser.password) {
        if (sp_profileWindowPassRememBtn.checked) {
          currentUser.passRememStatus = true;
          localStorage.setItem("users", JSON.stringify(usersArr));
          localStorage.setItem(
            "loggedInUsers",
            JSON.stringify(loggedInUsersArr),
          );
          localStorage.setItem("ActiveUser", JSON.stringify(currentUser));
        }
        sp_passRememBtn.checked = false;
        window.location.href = "mainFbPage.html";
      }
    });

    sp_profileWindClBtn.addEventListener("click", function () {
      sp.classList.remove("sp_background");
      sp_profileWindowLogIn.classList.add("hidden");
    });
  }

  // პროფილის დამატების ღილაკის შექმნა

  const AccAddBtn = document.createElement("button");
  AccAddBtn.classList.add("profileWind");
  recentLoginsProfiles.appendChild(AccAddBtn);
  const AccAddBtnTop = document.createElement("div");
  AccAddBtnTop.classList.add("profileWindImg");
  AccAddBtnTop.style.display = "flex";
  AccAddBtnTop.style.alignItems = "center";
  AccAddBtnTop.style.justifyContent = "center";
  const AccAddBtnTxt = document.createElement("p");
  AccAddBtnTxt.textContent = "Add Account";
  AccAddBtnTxt.classList.add("profileWindName");
  AccAddBtnTxt.style.color = "#0866ff";
  AccAddBtn.appendChild(AccAddBtnTop);
  AccAddBtn.appendChild(AccAddBtnTxt);
  const AccAddIcon = document.createElement("div");
  AccAddIcon.classList.add("AccAddIcon");
  AccAddBtnTop.appendChild(AccAddIcon);

  // პროფაილის დამატების დაჭერის დროს რა ხდება

  AccAddBtn.addEventListener("click", function () {
    sp.classList.add("sp_background");
    sp_accAddWind.classList.remove("hidden");
  });

  sp_accAddWindClBtn.addEventListener("click", function () {
    sp_accAddWind.classList.add("hidden");
    sp.classList.remove("sp_background");
  });
}

// ლოგინ ბათონების, პასვორდის და იმეილის ინფუთების რაოდენობა ამ კონკრეტულ შემთხვევაში ერთიდაიგივეა ამიტომ გვაქვს უფლება ერთიდაიგივე i გამოვიყენოთ

sp_logInBtn.forEach((button, i) => {
  button.addEventListener("click", function () {
    for (let j = 0; j < usersArr.length; j++) {
      if (
        sp_mailInp[i].value === usersArr[j].emailOrNum &&
        sp_passInp[i].value === usersArr[j].password
      ) {
        if (sp_passRememBtn.checked) {
          usersArr[j].passRememStatus = true;
        }
        let ActUserId = usersArr[j].userId;
        const includeVal = (user) => user.userId === ActUserId;
        if (!loggedInUsersArr.some(includeVal)) {
          loggedInUsersArr.push(usersArr[j]);
        }
        localStorage.setItem("users", JSON.stringify(usersArr));
        localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsersArr));
        localStorage.setItem("ActiveUser", JSON.stringify(usersArr[j]));
        window.location.href = "mainFbPage.html";
        sp_passRememBtn.checked = false;
      }
    }
  });
});

// მობაილზე პასვორდის ჩვენება-დამალვა

const sp_mobile_passHideBtn = document.querySelector(".sp_mobile_passHideBtn");
const sp_mobile_passShowBtn = document.querySelector(".sp_mobile_passShowBtn");
const sp_mobile_passInp = document.querySelector(".sp_mobile_passInp");
const sp_mobile_passInpAddPh = document.querySelector(
  ".sp_mobile_passInpAddPh",
);

passHideAndShow(
  sp_mobile_passInp,
  sp_mobile_passHideBtn,
  sp_mobile_passShowBtn,
);

// მობაილზე მეილის და პასვორდის ინფუთზე ეფექტები

const sp_mobile_emailInp = document.querySelector(".sp_mobile_emailInp");
const sp_mobile_emailInpAddPh = document.querySelector(
  ".sp_mobile_emailInpAddPh",
);
const sp_mobile_inpDeleteBtn = document.querySelector(
  ".sp_mobile_inpDeleteBtn",
);

function inputEffect(input, placeholder) {
  input.addEventListener("focus", function () {
    placeholder.style.opacity = 1;
    input.style.paddingTop = "25px";
  });

  input.addEventListener("focusout", function () {
    if (input.value === "") {
      placeholder.style.opacity = 0;
      input.style.paddingTop = "10px";
    }
  });
}

inputEffect(sp_mobile_emailInp, sp_mobile_emailInpAddPh);
inputEffect(sp_mobile_passInp, sp_mobile_passInpAddPh);

sp_mobile_emailInp.addEventListener("focusout", function () {
  sp_mobile_inpDeleteBtn.classList.add("hidden");
});

sp_mobile_emailInp.addEventListener("input", function () {
  sp_mobile_inpDeleteBtn.classList.remove("hidden");
  if (sp_mobile_emailInp.value === "") {
    sp_mobile_inpDeleteBtn.classList.add("hidden");
  }
});

sp_mobile_inpDeleteBtn.addEventListener("mousedown", function (event) {
  event.preventDefault();
  sp_mobile_emailInp.value = "";
  sp_mobile_emailInp.focus();
  sp_mobile_inpDeleteBtn.classList.add("hidden");
});

// როდესაც აქტიური იუსერი არსებობს სტილები უნდა შევცვალოთ, ვამატებთ პროფაილის ფანჯარას, continue ღილაკით, რომლის დაჭერის შემდეგ ჩნდება mob_actUserLogInWind

const sp_mobile = document.querySelector(".sp_mobile");
const sp_mobileLogoBox = document.querySelector(".sp_mobileLogoBox");
const sp_mobileLogo = document.querySelector(".sp_mobileLogo");
const sp_mobileLanguageBtn = document.querySelector(".sp_mobileLanguageBtn");
const sp_mobHideWhenLogged = document.querySelector(".sp_mobHideWhenLogged");

const sp_mobShowWhenLogged = document.querySelector(".sp_mobShowWhenLogged");
const mob_actUserLogInWind = document.querySelector(".mob_actUserLogInWind");
const mob_actUserLogInWindProfPict = document.querySelector(
  ".mob_actUserLogInWindProfPict",
);
const mob_actUserLogInWindName = document.querySelector(
  ".mob_actUserLogInWindName",
);
const mob_actUserLogInWindBackArrBtn = document.querySelector(
  ".mob_actUserLogInWindBackArrBtn",
);
const mob_actUserLogInWindPassInp = document.querySelector(
  ".mob_actUserLogInWindPassInp",
);
const mob_actUserLogInWindPassInpAddPh = document.querySelector(
  ".mob_actUserLogInWindPassInpAddPh",
);
const mob_actUserLogInWindPassHideBtn = document.querySelector(
  ".mob_actUserLogInWindPassHideBtn",
);
const mob_actUserLogInWindPassShowBtn = document.querySelector(
  ".mob_actUserLogInWindPassShowBtn",
);
const mob_actUserLogInWindLogInBtn = document.querySelector(
  ".mob_actUserLogInWindLogInBtn",
);

passHideAndShow(
  mob_actUserLogInWindPassInp,
  mob_actUserLogInWindPassHideBtn,
  mob_actUserLogInWindPassShowBtn,
);

inputEffect(mob_actUserLogInWindPassInp, mob_actUserLogInWindPassInpAddPh);

let activeUser = JSON.parse(localStorage.getItem("ActiveUser"));

// მობაილზე დალოგინებული იუსერის არსებობის შემთხვევაში დიზაინი

if (activeUser) {
  sp_mobHideWhenLogged.classList.add("hidden");
  sp_mobileLanguageBtn.classList.add("hidden");
  sp_mobShowWhenLogged.classList.remove("hidden");

  sp_mobileLogoBox.style.width = "48px";
  sp_mobileLogoBox.style.height = "48px";
  sp_mobileLogoBox.style.marginTop = "60px";

  sp_mobileLogo.style.width = "48px";
  sp_mobileLogo.style.height = "48px";

  let activeUserProfImg = document.createElement("img");
  activeUserProfImg.src = activeUser.profileImage;
  activeUserProfImg.style.width = "180px";
  activeUserProfImg.style.height = "180px";
  activeUserProfImg.style.objectFit = "cover";
  activeUserProfImg.style.borderRadius = "50%";
  sp_mobShowWhenLogged.appendChild(activeUserProfImg);

  let activeUserName = document.createElement("p");
  activeUserName.textContent = activeUser.firstName + " " + activeUser.lastName;
  activeUserName.style.fontSize = "24px";
  activeUserName.style.fontWeight = "600";
  activeUserName.style.color = "rgb(10, 19, 23)";
  activeUserName.style.margin = "15px 0";
  sp_mobShowWhenLogged.appendChild(activeUserName);

  let continueBtn = document.createElement("button");
  continueBtn.textContent = "Continue";
  continueBtn.classList.add("sp_mobileBtn");
  continueBtn.style.backgroundColor = "rgb(0, 100, 224)";
  continueBtn.style.color = "white";
  sp_mobShowWhenLogged.appendChild(continueBtn);

  let useAnotherProfBtn = document.createElement("button");
  useAnotherProfBtn.textContent = "Use another profile";
  useAnotherProfBtn.style.fontWeight = "500";
  useAnotherProfBtn.style.color = "rgb(10, 19, 23)";
  useAnotherProfBtn.style.border = "none";
  useAnotherProfBtn.style.backgroundColor = "transparent";
  sp_mobShowWhenLogged.appendChild(useAnotherProfBtn);

  let moveBackArrBtn = document.createElement("button");
  let moveBackArrIcon = document.createElement("img");
  moveBackArrBtn.appendChild(moveBackArrIcon);
  moveBackArrIcon.src =
    "https://static.xx.fbcdn.net/rsrc.php/yj/r/U9_Yz2fR4ez.webp";
  moveBackArrIcon.style.width = "24px";
  moveBackArrIcon.style.height = "24px";
  moveBackArrBtn.style.border = "none";
  moveBackArrBtn.style.backgroundColor = "transparent";
  moveBackArrBtn.style.position = "absolute";
  moveBackArrBtn.style.top = "-30px";
  moveBackArrBtn.style.left = "15px";
  moveBackArrBtn.classList.add("hidden");
  sp_mobile.appendChild(moveBackArrBtn);

  useAnotherProfBtn.addEventListener("click", function () {
    sp_mobHideWhenLogged.classList.remove("hidden");
    sp_mobileLanguageBtn.classList.remove("hidden");
    sp_mobShowWhenLogged.classList.add("hidden");
    moveBackArrBtn.classList.remove("hidden");
    sp_mobile.style.marginTop = "50px";
  });

  moveBackArrBtn.addEventListener("click", function () {
    sp_mobHideWhenLogged.classList.add("hidden");
    sp_mobileLanguageBtn.classList.add("hidden");
    sp_mobShowWhenLogged.classList.remove("hidden");
    moveBackArrBtn.classList.add("hidden");
  });

  continueBtn.addEventListener("click", function () {
    if (!activeUser.passRememStatus) {
      sp_mobile.classList.add("hidden");
      mob_actUserLogInWind.classList.remove("hidden");
    } else {
      window.location.href = "mainFbPage.html";
    }
  });

  mob_actUserLogInWindProfPict.src = activeUser.profileImage;
  mob_actUserLogInWindName.textContent =
    activeUser.firstName + " " + activeUser.lastName;

  mob_actUserLogInWindBackArrBtn.addEventListener("click", function () {
    sp_mobile.classList.remove("hidden");
    mob_actUserLogInWind.classList.add("hidden");
  });

  mob_actUserLogInWindLogInBtn.addEventListener("click", function () {
    if (mob_actUserLogInWindPassInp.value === activeUser.password) {
      window.location.href = "mainFbPage.html";
    }
  });
}

// ახალი ექაუნთის შემქმნაზე გადაყვანა ტელეფონზე
const sp_mobileCrNewAccBtn = document.querySelector(".sp_mobileCrNewAccBtn");
sp_mobileCrNewAccBtn.addEventListener("click", function () {
  window.location.href = "su_mobile.html";
});
