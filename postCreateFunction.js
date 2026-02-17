function createPost(mainContainer, postsContainer, page, post, postType) {
  // ფუნქცია აქტივ იუზერის მოსაძებნად და მის დასააფდეითებლად

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

  const activeUser = JSON.parse(localStorage.getItem("ActiveUser"));
  let pagesArr = JSON.parse(localStorage.getItem("pagesArr"));

  const mainPagePostItem = document.createElement("div");
  mainPagePostItem.classList.add("mainPagePostItem");
  postsContainer.appendChild(mainPagePostItem);

  // პოსტის ძირითადი ნაწილი

  const postItemMainContent = document.createElement("div");
  mainPagePostItem.appendChild(postItemMainContent);

  const mainPagePostTop = document.createElement("div");
  mainPagePostTop.classList.add("mainPagePostTop");
  postItemMainContent.appendChild(mainPagePostTop);

  const postTopLeft = document.createElement("div");
  postTopLeft.classList.add("postTopLeft");
  mainPagePostTop.appendChild(postTopLeft);

  const postProfImg = document.createElement("img");
  postProfImg.classList.add("postProfImg");
  postTopLeft.appendChild(postProfImg);
  postProfImg.style.cursor = "pointer";

  if (postType === "feedPagePost" || postType === "innerPagePost") {
    postProfImg.src = page.profileImg;
  } else if (postType === "ActiveUserfeedPagePost") {
    postProfImg.src = activeUser.profileImage;
  }

  const postTopCenter = document.createElement("div");
  postTopCenter.classList.add("postTopCenter");
  postTopLeft.appendChild(postTopCenter);

  const postTopCenterTop = document.createElement("div");
  postTopCenterTop.classList.add("postTopCenterTop");
  postTopCenter.appendChild(postTopCenterTop);

  const postPageName = document.createElement("p");
  postPageName.classList.add("postPageName");
  postTopCenterTop.appendChild(postPageName);

  if (postType === "feedPagePost" || postType === "innerPagePost") {
    postPageName.textContent = page.name;
  } else if (postType === "ActiveUserfeedPagePost") {
    postPageName.textContent = activeUser.firstName + " " + activeUser.lastName;
  }

  if (postType === "feedPagePost") {
    const spanItem1 = document.createElement("span");
    postTopCenterTop.appendChild(spanItem1);
    spanItem1.textContent = "·";

    const postFollowBtn = document.createElement("button");
    postFollowBtn.classList.add("postFollowBtn");
    postTopCenterTop.appendChild(postFollowBtn);
    postFollowBtn.textContent = "Follow";

    function displayFollowed() {
      activeUser.pageFollowStatus = true;
      postFollowBtn.classList.add("postFollowBtnIfFollowed");
      postFollowBtn.textContent = "Followed";
    }

    function displayNotFollowed() {
      activeUser.pageFollowStatus = false;
      postFollowBtn.classList.remove("postFollowBtnIfFollowed");
      postFollowBtn.textContent = "Follow";
    }

    if (activeUser.pageFollowStatus) {
      displayFollowed();
    } else {
      displayNotFollowed();
    }

    postFollowBtn.addEventListener("click", function () {
      if (activeUser.pageFollowStatus) {
        displayNotFollowed();
        updateUsers();
      } else {
        displayFollowed();
        updateUsers();
      }
    });
  }

  const postTopCenterBottom = document.createElement("div");
  postTopCenterBottom.classList.add("postTopCenterBottom");
  postTopCenter.appendChild(postTopCenterBottom);

  const postDate = document.createElement("p");
  postDate.classList.add("postDate");
  postTopCenterBottom.appendChild(postDate);
  if (postType === "feedPagePost" || postType === "innerPagePost") {
    postDate.textContent = post.datePublished;
  } else if (postType === "ActiveUserfeedPagePost") {
    let currentTime = new Date().getTime();
    let timePassedInMS = currentTime - post.datePublished;
    let timePassedInSec = Math.floor(timePassedInMS / 1000);
    let timePassedInMin = Math.floor(timePassedInSec / 60);
    let timePassedInHours = Math.floor(timePassedInMin / 60);
    let showingTime = timePassedInSec;
    postDate.textContent = showingTime.toString() + "s";
    if (timePassedInSec === 0) {
      postDate.textContent = "Just now";
    }
    if (timePassedInSec > 60) {
      showingTime = timePassedInMin;
      postDate.textContent = showingTime.toString() + "m";
    }
    if (timePassedInMin > 60) {
      showingTime = timePassedInHours;
      postDate.textContent = showingTime.toString() + "h";
    }
  }

  const spanItem3 = document.createElement("span");
  postTopCenterBottom.appendChild(spanItem3);
  spanItem3.textContent = "·";

  const postAudienceIcon = document.createElement("img");
  postAudienceIcon.classList.add("postAudienceIcon");
  postAudienceIcon.src = "icons/globeIcon.png";
  postTopCenterBottom.appendChild(postAudienceIcon);

  const postTopBtns = document.createElement("div");
  postTopBtns.classList.add("postTopBtns");
  mainPagePostTop.appendChild(postTopBtns);

  const postMoreBtnsBtn = document.createElement("button");
  postMoreBtnsBtn.tabIndex = 0;
  postMoreBtnsBtn.classList.add("postMoreBtnsBtn");
  postMoreBtnsBtn.classList.add("postTopBtn");
  postMoreBtnsBtn.classList.add("hoverLightGrayBtn");
  postTopBtns.appendChild(postMoreBtnsBtn);

  const postTopBtnIcon1 = document.createElement("img");
  postTopBtnIcon1.classList.add("postTopBtnIcon");
  postTopBtnIcon1.src = "icons/threeDotIcon.png";
  postMoreBtnsBtn.appendChild(postTopBtnIcon1);

  // თუ feed-ზეა დაემატება დაჰაიდების ღილაკი

  if (postType === "feedPagePost") {
    const postHideBtn = document.createElement("button");
    postHideBtn.classList.add("postHideBtn");
    postHideBtn.classList.add("postTopBtn");
    postHideBtn.classList.add("hoverLightGrayBtn");
    postTopBtns.appendChild(postHideBtn);

    const postTopBtnIcon2 = document.createElement("img");
    postTopBtnIcon2.classList.add("postTopBtnIcon");
    postTopBtnIcon2.src = "icons/inpDelete.png";
    postHideBtn.appendChild(postTopBtnIcon2);

    postHideBtn.addEventListener("click", function () {
      hidePost();
    });
  }

  // პოსტის ტექსტი

  const postTxtContent = document.createElement("p");
  postTxtContent.classList.add("postTxtContent");
  postTxtContent.textContent = post.textContent;
  postItemMainContent.appendChild(postTxtContent);

  // პოსტის ფოტო

  if (post.imgContent !== "") {
    const postImgContentBox = document.createElement("div");
    postImgContentBox.classList.add("postImgContentBox");
    postItemMainContent.appendChild(postImgContentBox);
    const postImgContent = document.createElement("img");
    postImgContent.classList.add("postImgContent");
    postImgContent.src = post.imgContent;
    postImgContentBox.appendChild(postImgContent);
  }

  // რამდენი ლაიქი კომენტარი და შეარი აქვს პოსტს

  const postLikesCommentsShares = document.createElement("div");
  postLikesCommentsShares.classList.add("postLikesCommentsShares");
  postItemMainContent.appendChild(postLikesCommentsShares);

  const postLikes = document.createElement("div");
  postLikes.classList.add("postLikes");
  postLikesCommentsShares.appendChild(postLikes);

  const postReactionIcons = document.createElement("div");
  postReactionIcons.classList.add("postReactionIcons");
  postLikes.appendChild(postReactionIcons);

  const postLikesNum = document.createElement("p");
  postLikesNum.classList.add("postLikesNum");
  postLikes.appendChild(postLikesNum);

  if (post.likesNum !== "0") {
    postLikesNum.textContent = post.likesNum;
  }

  const commentsAndShares = document.createElement("div");
  commentsAndShares.classList.add("commentsAndShares");
  postLikesCommentsShares.appendChild(commentsAndShares);

  const postCommentsNum = document.createElement("p");
  postCommentsNum.classList.add("postLikesNum");
  commentsAndShares.appendChild(postCommentsNum);
  if (post.commentsArr.length !== 0) {
    postCommentsNum.textContent = post.commentsArr.length + " comments";
  }

  const postSharesNum = document.createElement("p");
  postSharesNum.classList.add("postLikesNum");
  commentsAndShares.appendChild(postSharesNum);

  if (post.sharesNum !== "0") {
    postSharesNum.textContent = post.sharesNum + " shares";
  }

  // ლაიქის, კომენტარის და დაშეარების ღილაკები

  const postBtns = document.createElement("div");
  postBtns.classList.add("postBtns");
  postItemMainContent.appendChild(postBtns);

  const postLikeBtn = document.createElement("button");
  postLikeBtn.classList.add("postLikeBtn");
  postLikeBtn.classList.add("postBtn");
  postLikeBtn.classList.add("hoverLightGrayBtn");
  postBtns.appendChild(postLikeBtn);

  const postLikeInterractIcon = document.createElement("img");
  postLikeInterractIcon.classList.add("postBtnIcon");
  postLikeInterractIcon.src = "icons/likeIcon.png"
  postLikeBtn.appendChild(postLikeInterractIcon);

  const postLikeTxt = document.createElement("p");
  postLikeTxt.classList.add("postBtnTxt");
  postLikeBtn.appendChild(postLikeTxt);
  postLikeTxt.textContent = "Like";

  const postCommentBtn = document.createElement("button");
  postCommentBtn.classList.add("postCommentBtn");
  postCommentBtn.classList.add("postBtn");
  postCommentBtn.classList.add("hoverLightGrayBtn");
  postBtns.appendChild(postCommentBtn);

  const postCommentIcon = document.createElement("img");
  postCommentIcon.classList.add("postBtnIcon");
  postCommentIcon.src = "icons/commentIcon.png"
  postCommentBtn.appendChild(postCommentIcon);

  const postCommentTxt = document.createElement("p");
  postCommentTxt.classList.add("postCommentTxt");
  postCommentTxt.classList.add("postBtnTxt");
  postCommentBtn.appendChild(postCommentTxt);
  postCommentTxt.textContent = "Comment";

  const postShareBtn = document.createElement("button");
  postShareBtn.classList.add("postShareBtn");
  postShareBtn.classList.add("postBtn");
  postShareBtn.classList.add("hoverLightGrayBtn");
  postBtns.appendChild(postShareBtn);

  const postShareIcon = document.createElement("img");
  postShareIcon.classList.add("postBtnIcon");
  postShareIcon.src = "icons/shareIcon.png"
  postShareBtn.appendChild(postShareIcon);

  const postShareTxt = document.createElement("p");
  postShareTxt.classList.add("postShareTxt");
  postCommentTxt.classList.add("postBtnTxt");
  postShareBtn.appendChild(postShareTxt);
  postShareTxt.textContent = "Share";

  // გვერდის პროფაილზე ან სახელზე დაჭერის დროს აქტიურ გვერდად დაყენება და გვერდზე გადასვლა

  function redirectToPage() {
    clearHeaderBtnEffects();
    localStorage.setItem("activePageId", JSON.stringify(page.id));
    window.location.href = "FbPage.html";
  }

  postProfImg.addEventListener("click", redirectToPage);
  postPageName.addEventListener("click", redirectToPage);

  // სამ წერტილზე დაჭერის დროს გამოსაჩენი ფანჯარა

  const postMoreBtnsWindow = document.createElement("div");
  postMoreBtnsWindow.classList.add("postMoreBtnsWindow");
  postMoreBtnsWindow.classList.add("hidden");
  mainPagePostItem.appendChild(postMoreBtnsWindow);

  if (postType === "feedPagePost") {
    postMoreBtnsWindow.classList.add("feedPagePostMoreBtnsWindow");
  } else if (
    postType === "innerPagePost" ||
    postType === "ActiveUserfeedPagePost"
  ) {
    postMoreBtnsWindow.classList.add("innerPagePostMoreBtnsWindow");
  }

  const postBtnMessage = document.createElement("div");
  postBtnMessage.classList.add("postBtnMessage");
  postBtnMessage.classList.add("hidden");
  mainContainer.appendChild(postBtnMessage);

  const postBtnMessageTxt = document.createElement("div");
  postBtnMessageTxt.classList.add("postBtnMessageTxt");
  postBtnMessage.appendChild(postBtnMessageTxt);

  const postBtnMessageUndoBtn = document.createElement("button");
  postBtnMessageUndoBtn.classList.add("postBtnMessageUndoBtn");
  postBtnMessageUndoBtn.textContent = "Undo";
  postBtnMessage.appendChild(postBtnMessageUndoBtn);

  const postBtnMessageCloseBtn = document.createElement("button");
  postBtnMessageCloseBtn.classList.add("postBtnMessageCloseBtn");
  postBtnMessage.appendChild(postBtnMessageCloseBtn);

  const postBtnMessageCloseBtnIcon = document.createElement("img");
  postBtnMessageCloseBtnIcon.classList.add("postBtnMessageCloseBtnIcon");
  postBtnMessageCloseBtnIcon.src = "icons/inpDelete.png";
  postBtnMessageCloseBtn.appendChild(postBtnMessageCloseBtnIcon);

  // not interested, hide post ან X icon-ის დაჭერის დროს გამოსაჩენი ფანჯარა

  function hiddenWindowBtnLeftGenerateFunction(btn, iconSrc, txt1, txt2) {
    const hiddenPostWindowBoxLeft = document.createElement("div");
    hiddenPostWindowBoxLeft.classList.add("hiddenPostWindowBoxLeft");
    btn.appendChild(hiddenPostWindowBoxLeft);

    const hiddenPostWindowIcon = document.createElement("img");
    hiddenPostWindowIcon.classList.add("hiddenPostWindowIcon");
    hiddenPostWindowIcon.src = iconSrc;
    hiddenPostWindowBoxLeft.appendChild(hiddenPostWindowIcon);

    const hiddenPostWindowTxts = document.createElement("div");
    hiddenPostWindowTxts.classList.add("hiddenPostWindowTxts");
    hiddenPostWindowBoxLeft.appendChild(hiddenPostWindowTxts);

    const hiddenPostWindowTxt1 = document.createElement("p");
    hiddenPostWindowTxt1.classList.add("hiddenPostWindowTxt1");
    hiddenPostWindowTxt1.textContent = txt1;
    hiddenPostWindowTxts.appendChild(hiddenPostWindowTxt1);

    const hiddenPostWindowTxt2 = document.createElement("p");
    hiddenPostWindowTxt2.classList.add("hiddenPostWindowTxt2");
    hiddenPostWindowTxt2.textContent = txt2;
    hiddenPostWindowTxts.appendChild(hiddenPostWindowTxt2);
  }

  function createReportAndRefBtns(window) {
    const hiddenPostWindowReportBtn = document.createElement("button");
    hiddenPostWindowReportBtn.classList.add("hiddenPostWindowBtn");
    hiddenWindowBtnLeftGenerateFunction(
      hiddenPostWindowReportBtn,
      "https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/tKi0xxO9GKd.png",
      "Report Post",
      `We won't let ${page.name} know who reported this.`,
    );
    window.appendChild(hiddenPostWindowReportBtn);

    const hiddenPostWindowContentRefBtn = document.createElement("button");
    hiddenPostWindowContentRefBtn.classList.add("hiddenPostWindowBtn");
    hiddenWindowBtnLeftGenerateFunction(
      hiddenPostWindowContentRefBtn,
      "https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/7uhh9mglMuP.png",
      "Content References",
      "",
    );
    window.appendChild(hiddenPostWindowContentRefBtn);
  }

  function generateDecoLine(window) {
    const hiddenPostWindowDecoLine = document.createElement("div");
    hiddenPostWindowDecoLine.classList.add("hiddenPostWindowDecoLine");
    window.appendChild(hiddenPostWindowDecoLine);
  }

  // პოსტის დაჰაიდების შემთხვევაში ფანჯარა

  const hiddenPostWindow = document.createElement("div");
  hiddenPostWindow.classList.add("hiddenPostWindow");
  hiddenPostWindow.classList.add("hidden");
  mainPagePostItem.appendChild(hiddenPostWindow);

  const hiddenPostWindowBox1 = document.createElement("div");
  hiddenPostWindowBox1.classList.add("hiddenPostWindowBtn");
  hiddenPostWindowBox1.classList.add("hiddenPostWindowBox1");
  hiddenPostWindow.appendChild(hiddenPostWindowBox1);
  hiddenWindowBtnLeftGenerateFunction(
    hiddenPostWindowBox1,
    "https://static.xx.fbcdn.net/rsrc.php/v4/yk/r/T6ayfMW9zlo.png",
    "Hidden",
    "You'll see less posts like this for a while",
  );

  const hiddenPostWindowHideUndoBtn = document.createElement("button");
  hiddenPostWindowHideUndoBtn.classList.add("hiddenPostWindowHideUndoBtn");
  hiddenPostWindowHideUndoBtn.textContent = "Undo";
  hiddenPostWindowBox1.appendChild(hiddenPostWindowHideUndoBtn);

  generateDecoLine(hiddenPostWindow);

  const hiddenPostWindowSnoozeBtn = document.createElement("button");
  hiddenPostWindowSnoozeBtn.classList.add("hiddenPostWindowBtn");
  hiddenWindowBtnLeftGenerateFunction(
    hiddenPostWindowSnoozeBtn,
    "https://static.xx.fbcdn.net/rsrc.php/v4/yF/r/GtIrf9e0UA_.png",
    `Snooze ${page.name} for 30 days`,
    "Temporarily stop seeing posts",
  );
  hiddenPostWindow.appendChild(hiddenPostWindowSnoozeBtn);

  const hiddenPostWindowIfSnoozedBox = document.createElement("div");
  hiddenPostWindowIfSnoozedBox.classList.add("hiddenPostWindowIfSnoozedBox");
  hiddenPostWindowIfSnoozedBox.classList.add("hiddenPostWindowBtn");
  hiddenPostWindowIfSnoozedBox.classList.add("hidden");
  hiddenWindowBtnLeftGenerateFunction(
    hiddenPostWindowIfSnoozedBox,
    "https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/_gR3IDWRu-a.png",
    `You won't see posts from ${page.name} for 30 days`,
    `You won't see posts from ${page.name} for 30 days`,
  );

  const hiddenPostWindowUndoSnoozeBtn = document.createElement("button");
  hiddenPostWindowUndoSnoozeBtn.classList.add("hiddenPostWindowUndoSnoozeBtn");
  hiddenPostWindowUndoSnoozeBtn.textContent = "Undo";
  hiddenPostWindowIfSnoozedBox.appendChild(hiddenPostWindowUndoSnoozeBtn);
  hiddenPostWindow.appendChild(hiddenPostWindowIfSnoozedBox);

  createReportAndRefBtns(hiddenPostWindow);

  // ყველა პოსტის დაჰაიდების შემთხვევაში ფანჯარა

  const allPostsHiddenWindow = document.createElement("div");
  allPostsHiddenWindow.classList.add("hiddenPostWindow");
  allPostsHiddenWindow.classList.add("hidden");
  mainPagePostItem.appendChild(allPostsHiddenWindow);

  const allPostHiddenBox1 = document.createElement("div");
  allPostHiddenBox1.classList.add("hiddenPostWindowBtn");
  allPostHiddenBox1.classList.add("hiddenPostWindowBox1");
  allPostsHiddenWindow.appendChild(allPostHiddenBox1);
  hiddenWindowBtnLeftGenerateFunction(
    allPostHiddenBox1,
    "https://static.xx.fbcdn.net/rsrc.php/v4/yp/r/lfEjgEuq6CE.png",
    "All posts hidden",
    `You won't see posts from ${page.name} in Feed`,
  );

  const allPostsHiddenWindowUndoBtn = document.createElement("button");
  allPostsHiddenWindowUndoBtn.classList.add("hiddenPostWindowHideUndoBtn");
  allPostsHiddenWindowUndoBtn.textContent = "Undo";
  allPostHiddenBox1.appendChild(allPostsHiddenWindowUndoBtn);

  generateDecoLine(allPostsHiddenWindow);
  createReportAndRefBtns(allPostsHiddenWindow);

  // snooze დაჭერის შემთხვევაში ფანჯარა

  const snoozePageWindow = document.createElement("div");
  snoozePageWindow.classList.add("hiddenPostWindow");
  snoozePageWindow.classList.add("hidden");
  mainPagePostItem.appendChild(snoozePageWindow);

  const snoozePageWindowBox1 = document.createElement("div");
  snoozePageWindowBox1.classList.add("hiddenPostWindowBtn");
  snoozePageWindowBox1.classList.add("hiddenPostWindowBox1");
  snoozePageWindow.appendChild(snoozePageWindowBox1);
  hiddenWindowBtnLeftGenerateFunction(
    snoozePageWindowBox1,
    "https://static.xx.fbcdn.net/rsrc.php/v4/yp/r/lfEjgEuq6CE.png",
    "Snoozed",
    `You won't see posts from ${page.name} in your Feed for 30 days`,
  );

  const snoozePageWindowUndoBtn = document.createElement("button");
  snoozePageWindowUndoBtn.classList.add("hiddenPostWindowHideUndoBtn");
  snoozePageWindowUndoBtn.textContent = "Undo";
  snoozePageWindowBox1.appendChild(snoozePageWindowUndoBtn);

  generateDecoLine(snoozePageWindow);
  createReportAndRefBtns(snoozePageWindow);

  // ფუნქცია რომ not interested, hide post ან X icon-ის დაჭერის დროს პოსტი დაიფაროს და შესაბამისი ფანჯარა გამოვიდეს და პირიქით

  function hidePost() {
    postItemMainContent.classList.add("hidden");
    hiddenPostWindow.classList.remove("hidden");
    unfreezeBack();

    let hiddenPostsArr = JSON.parse(
      localStorage.getItem("ActiveUser"),
    ).hiddenPosts;

    if (!hiddenPostsArr.includes(post.postId)) {
      hiddenPostsArr.push(post.postId);
    }

    activeUser.hiddenPosts = hiddenPostsArr;
    updateUsers();
  }

  function showPost() {
    postItemMainContent.classList.remove("hidden");
    hiddenPostWindow.classList.add("hidden");
    let hiddenPostsArr = JSON.parse(
      localStorage.getItem("ActiveUser"),
    ).hiddenPosts;

    hiddenPostsArr = hiddenPostsArr.filter((id) => id !== post.postId);
    activeUser.hiddenPosts = hiddenPostsArr;
    updateUsers();
  }

  // ფუნქცია hide all ღილაკისთვის

  function hideAllPosts() {
    postItemMainContent.classList.add("hidden");
    allPostsHiddenWindow.classList.remove("hidden");
    activeUser.pageVisibilityStatus = false;
    unfreezeBack();
    updateUsers();
  }

  function showAllPosts() {
    postItemMainContent.classList.remove("hidden");
    allPostsHiddenWindow.classList.add("hidden");
    activeUser.pageVisibilityStatus = true;
    updateUsers();
  }

  // ფუნქცია snooze ღილაკისთვის

  function snoozePage() {
    postItemMainContent.classList.add("hidden");
    snoozePageWindow.classList.remove("hidden");
    activeUser.pageVisibilityStatus = false;
    unfreezeBack();
    updateUsers();
  }

  function unsnoozePage() {
    postItemMainContent.classList.remove("hidden");
    snoozePageWindow.classList.add("hidden");
    activeUser.pageVisibilityStatus = true;
    updateUsers();
  }

  // event listener - ები პოსტის დაჰაიდების დროს

  hiddenPostWindowSnoozeBtn.addEventListener("mousedown", function () {
    hiddenPostWindowSnoozeBtn.classList.add("hidden");
    hiddenPostWindowIfSnoozedBox.classList.remove("hidden");
    activeUser.pageVisibilityStatus = false;
    updateUsers();
  });

  hiddenPostWindowUndoSnoozeBtn.addEventListener("mousedown", function () {
    hiddenPostWindowSnoozeBtn.classList.remove("hidden");
    hiddenPostWindowIfSnoozedBox.classList.add("hidden");
    activeUser.pageVisibilityStatus = true;
    updateUsers();
  });

  hiddenPostWindowHideUndoBtn.addEventListener("click", function () {
    showPost();
  });

  allPostsHiddenWindowUndoBtn.addEventListener("click", function () {
    showAllPosts();
  });

  snoozePageWindowUndoBtn.addEventListener("click", function () {
    unsnoozePage();
  });

  // სამ წერტილზე დაჭერის შემთვხვევაში ღილაკების ფანჯრის გამოტანა

  postMoreBtnsBtn.addEventListener("click", function () {
    postMoreBtnsWindow.classList.toggle("hidden");
  });

  postMoreBtnsBtn.addEventListener("focusout", function () {
    postMoreBtnsWindow.classList.add("hidden");
  });

  // ქვედა მარცხენა კუთხეში შესაბამისი მესიჯის გამოტანის ფუნქცია

  let timeout;

  function showPostBtnMessage() {
    postBtnMessage.classList.remove("hidden");
    postBtnMessage.classList.add("postBtnMessageAnimation");
    timeout = setTimeout(() => {
      postBtnMessage.classList.remove("postBtnMessageAnimation");
      postBtnMessage.classList.add("hidden");
    }, 3000);
  }

  function postBtnMessageBtnClick() {
    clearTimeout(timeout);
    postBtnMessage.classList.remove("postBtnMessageAnimation");
    postBtnMessage.classList.add("postBtnMessageAnimation2");
    setTimeout(() => {
      postBtnMessage.classList.remove("postBtnMessageAnimation2");
      postBtnMessage.classList.add("hidden");
    }, 200);
  }

  // სამი წერტილის ღილაკის დაჭერის შემთხვევაში ღილაკების გამოტანა და შესაბამისად მათზე დაჭერის შემთხვევაში რა ხდება
  // პოსტის შესაბამისი ტიპის მიხედვით

  function createMoreBtnIconAndTxts(
    btn,
    btnIconClass,
    btnIconImg,
    btnIconStatus,
    BtnTxtStatus,
    txt1Content,
    txt2Content,
  ) {
    if (btnIconStatus === "backgroundIcon") {
      const postMoreBtnIcon = document.createElement("div");
      postMoreBtnIcon.classList.add(btnIconClass);
      postMoreBtnIcon.classList.add("postMoreBtnIcon");
      btn.appendChild(postMoreBtnIcon);
      if (BtnTxtStatus === "twoTxtBtn") {
        postMoreBtnIcon.classList.add("marginTop-10px");
      }
    } else if (btnIconStatus === "imgIcon") {
      const postMoreBtnIconImg = document.createElement("img");
      btn.appendChild(postMoreBtnIconImg);
      postMoreBtnIconImg.src = btnIconImg;
      postMoreBtnIconImg.classList.add("marginTop-10px");
      postMoreBtnIconImg.classList.add("postMoreBtnIcon");
    }

    const postMoreBtnBoxTxts = document.createElement("div");
    postMoreBtnBoxTxts.classList.add("postMoreBtnBoxTxts");
    btn.appendChild(postMoreBtnBoxTxts);

    const postMoreBtnBoxTxt1 = document.createElement("p");
    postMoreBtnBoxTxt1.classList.add("postMoreBtnBoxTxt1");
    postMoreBtnBoxTxts.appendChild(postMoreBtnBoxTxt1);
    postMoreBtnBoxTxt1.textContent = txt1Content;

    if (BtnTxtStatus === "twoTxtBtn") {
      const postMoreBtnBoxTxt2 = document.createElement("p");
      postMoreBtnBoxTxt2.classList.add("postMoreBtnBoxTxt2");
      postMoreBtnBoxTxts.appendChild(postMoreBtnBoxTxt2);
      postMoreBtnBoxTxt2.textContent = txt2Content;
    }
  }

  function createMoreBtnsDecoLine(window) {
    const postMoreBtnsDecoLine = document.createElement("div");
    postMoreBtnsDecoLine.classList.add("postMoreBtnsDecoLine");
    window.appendChild(postMoreBtnsDecoLine);
  }

  function createMoreBtns(moreBtnsWindow) {
    if (postType === "feedPagePost") {
      // პირველი interested button

      const interestedBtn = document.createElement("button");
      interestedBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(interestedBtn);

      createMoreBtnIconAndTxts(
        interestedBtn,
        "interestedBtnIcon",
        "#",
        "backgroundIcon",
        "twoTxtBtn",
        "Interested",
        "More of your posts will be like this.",
      );

      interestedBtn.addEventListener("mousedown", function () {
        showPostBtnMessage();
        postBtnMessageTxt.textContent =
          "Got it. More of your posts will be like this for a while.";
      });

      postBtnMessageUndoBtn.addEventListener("click", function () {
        postBtnMessageBtnClick();
      });

      postBtnMessageCloseBtn.addEventListener("click", function () {
        postBtnMessageBtnClick();
      });

      // მეორე not interested button

      const notInterestedBtn = document.createElement("button");
      notInterestedBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(notInterestedBtn);

      createMoreBtnIconAndTxts(
        notInterestedBtn,
        "notInterestedBtnIcon",
        "#",
        "backgroundIcon",
        "twoTxtBtn",
        "Not interested",
        "Less of your posts will be like this.",
      );

      notInterestedBtn.addEventListener("mousedown", function () {
        hidePost();
      });

      createMoreBtnsDecoLine(moreBtnsWindow);
    }

    // აქტიური იუსერის პირველი pin post button
    if (postType === "ActiveUserfeedPagePost") {
      const pinBtn = document.createElement("button");
      pinBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(pinBtn);

      createMoreBtnIconAndTxts(
        pinBtn,
        "pinPostBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Pin post",
        "",
      );
    }

    if (
      postType === "feedPagePost" ||
      postType === "innerPagePost" ||
      postType === "ActiveUserfeedPagePost"
    ) {
      // მესამე (page post-სთვის პირველი) save Post Button, აქტიური იუსერისთვის მეორე

      const savePostBtn = document.createElement("button");
      savePostBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(savePostBtn);

      createMoreBtnIconAndTxts(
        savePostBtn,
        "savePostBtnIcon",
        "#",
        "backgroundIcon",
        "twoTxtBtn",
        "Save Post",
        "Add this to your saved items.",
      );

      createMoreBtnsDecoLine(moreBtnsWindow);
    }

    if (postType === "ActiveUserfeedPagePost") {
      // აქტიური იუსერის მესამე edit Post button
      const editPostBtn = document.createElement("button");
      editPostBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(editPostBtn);

      createMoreBtnIconAndTxts(
        editPostBtn,
        "editPostBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Edit post",
        "",
      );

      // აქტიური იუსერის მეოთხე edit audience button

      const editAudienceBtn = document.createElement("button");
      editAudienceBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(editAudienceBtn);

      createMoreBtnIconAndTxts(
        editAudienceBtn,
        "editAudienceBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Edit audience",
        "",
      );
    }

    if (
      postType === "feedPagePost" ||
      postType === "innerPagePost" ||
      postType === "ActiveUserfeedPagePost"
    ) {
      // მეოთხე (page post-სთვის მეორე) turn on notifications button

      const notificationsBtn = document.createElement("button");
      notificationsBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(notificationsBtn);

      createMoreBtnIconAndTxts(
        notificationsBtn,
        "notificationsBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Turn on notifications for this post",
        "",
      );

      // მეოთხე ღილაკის (page post-სთვის მეორე) მეორე ვარიანტი ანუ turn off notifications button, აქტიური იუსერისთვის მეხუთე button

      const turnOffnotificationsBtn = document.createElement("button");
      turnOffnotificationsBtn.classList.add("postMoreBtn");
      turnOffnotificationsBtn.classList.add("hidden");
      moreBtnsWindow.appendChild(turnOffnotificationsBtn);

      createMoreBtnIconAndTxts(
        turnOffnotificationsBtn,
        "turnOffNotificationsBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Turn off notifications for this post",
        "",
      );

      if (post.notificationStatus === "off") {
        notificationsBtn.classList.remove("hidden");
        turnOffnotificationsBtn.classList.add("hidden");
      } else {
        notificationsBtn.classList.add("hidden");
        turnOffnotificationsBtn.classList.remove("hidden");
      }

      notificationsBtn.addEventListener("mousedown", function () {
        postBtnMessageUndoBtn.classList.add("hidden");
        setTimeout(() => {
          postBtnMessageUndoBtn.classList.remove("hidden");
        }, 3000);
        notificationsBtn.classList.add("hidden");
        turnOffnotificationsBtn.classList.remove("hidden");
        showPostBtnMessage();
        postBtnMessageTxt.textContent = "Notifications Turned on";
        post.notificationStatus = "on";
        localStorage.setItem("pagesArr", JSON.stringify(pagesArr));
      });

      turnOffnotificationsBtn.addEventListener("mousedown", function () {
        postBtnMessageUndoBtn.classList.add("hidden");
        setTimeout(() => {
          postBtnMessageUndoBtn.classList.remove("hidden");
        }, 3000);
        notificationsBtn.classList.remove("hidden");
        turnOffnotificationsBtn.classList.add("hidden");
        showPostBtnMessage();
        postBtnMessageTxt.textContent = "Notifications Turned off";
        post.notificationStatus = "off";
        localStorage.setItem("pagesArr", JSON.stringify(pagesArr));
      });
    }

    if (postType === "feedPagePost" || postType === "innerPagePost") {
      // მეხუთე (page post-სთვის მესამე) embed button

      const embedBtn = document.createElement("button");
      embedBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(embedBtn);

      createMoreBtnIconAndTxts(
        embedBtn,
        "embedBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Embed",
        "",
      );

      createMoreBtnsDecoLine(moreBtnsWindow);
    }

    if (postType === "feedPagePost") {
      // მეექვსე პოსტის დამალვის button

      const hidePostBtn = document.createElement("button");
      hidePostBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(hidePostBtn);

      createMoreBtnIconAndTxts(
        hidePostBtn,
        "",
        "https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/okEwlfy_N3L.png",
        "imgIcon",
        "twoTxtBtn",
        "Hide Post",
        "See fewer posts likes this",
      );

      hidePostBtn.addEventListener("mousedown", function () {
        hidePost();
      });

      // მეშვიდე snooze Page Button

      const snoozePageBtn = document.createElement("button");
      snoozePageBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(snoozePageBtn);

      createMoreBtnIconAndTxts(
        snoozePageBtn,
        "",
        "https://static.xx.fbcdn.net/rsrc.php/v4/yF/r/GtIrf9e0UA_.png",
        "imgIcon",
        "twoTxtBtn",
        `Snooze ${page.name} for 30 days`,
        "Temporarily stop seeing posts.",
      );

      snoozePageBtn.addEventListener("mousedown", function () {
        snoozePage();
      });

      // მერვე hide All button

      const hideAllBtn = document.createElement("button");
      hideAllBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(hideAllBtn);

      createMoreBtnIconAndTxts(
        hideAllBtn,
        "",
        "https://static.xx.fbcdn.net/rsrc.php/v4/yp/r/lfEjgEuq6CE.png",
        "imgIcon",
        "twoTxtBtn",
        `Hide all from ${page.name}`,
        "Stop seeing posts from this page",
      );

      hideAllBtn.addEventListener("mousedown", function () {
        hideAllPosts();
      });
    }

    if (postType === "feedPagePost" || postType === "innerPagePost") {
      // მეცხრე (page post-სთვის მეოთხე) report Post button

      const reportPostBtn = document.createElement("button");
      reportPostBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(reportPostBtn);

      createMoreBtnIconAndTxts(
        reportPostBtn,
        "",
        "https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/tKi0xxO9GKd.png",
        "imgIcon",
        "twoTxtBtn",
        "Report post",
        `We won't let ${page.name} know who reported this.`,
      );
    }

    if (postType === "feedPagePost") {
      // მეათე block page button

      const blockPageBtn = document.createElement("button");
      blockPageBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(blockPageBtn);

      createMoreBtnIconAndTxts(
        blockPageBtn,
        "",
        "https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/g0ec98kwkU_.png",
        "imgIcon",
        "twoTxtBtn",
        `Block ${page.name}'s profile`,
        `You won't be able to see or contact each other.`,
      );
    }

    // აქტიური იუსერის მეექვსე turn off translations button
    if (postType === "ActiveUserfeedPagePost") {
      const turnOffTranslationsBtn = document.createElement("button");
      turnOffTranslationsBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(turnOffTranslationsBtn);

      createMoreBtnIconAndTxts(
        turnOffTranslationsBtn,
        "turnOffTranslationsBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Turn off translations",
        "",
      );

      const editDateBtn = document.createElement("button");
      editDateBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(editDateBtn);

      createMoreBtnIconAndTxts(
        editDateBtn,
        "editDateBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Edit date",
        "",
      );

      createMoreBtnsDecoLine(moreBtnsWindow);

      const moverToArchiveBtn = document.createElement("button");
      moverToArchiveBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(moverToArchiveBtn);

      createMoreBtnIconAndTxts(
        moverToArchiveBtn,
        "moverToArchiveBtnIcon",
        "#",
        "backgroundIcon",
        "oneTxtBtn",
        "Move to archive",
        "",
      );

      const moveToTrashBtn = document.createElement("button");
      moveToTrashBtn.classList.add("postMoreBtn");
      moreBtnsWindow.appendChild(moveToTrashBtn);

      createMoreBtnIconAndTxts(
        moveToTrashBtn,
        "moveToTrashBtnIcon",
        "#",
        "backgroundIcon",
        "twoTxtBtn",
        "Move to trash",
        "Items in your trash are deleted after 30 days",
      );

      moveToTrashBtn.addEventListener("mousedown", function () {
        mainPagePostItem.classList.add("hidden");
        let hiddenPostsArr = JSON.parse(
          localStorage.getItem("ActiveUser"),
        ).hiddenPosts;
        hiddenPostsArr.push(post.postId);
        activeUser.hiddenPosts = hiddenPostsArr;
        updateUsers();
      });
    }
  }

  createMoreBtns(postMoreBtnsWindow);

  // ემოჯის ფანჯარა და ეფექტები

  function createEmojis(
    post,
    reactionIconsBox,
    btnsContainer,
    likeBtn,
    likesNumTxt,
    likeInnteractIcon,
    likeTxt,
  ) {
    // reactionIcon-ებში button-ების ზევით ჩავამატოთ ყველა აიქონი

    const postLikeIcon = document.createElement("img");
    const postLoveIcon = document.createElement("img");
    const postCareIcon = document.createElement("img");
    const postHahaIcon = document.createElement("img");
    const postWowIcon = document.createElement("img");
    const postSadIcon = document.createElement("img");
    const postAngryIcon = document.createElement("img");

    function addIconsToBox(icon, iconSrc) {
      icon.classList.add("hidden");
      icon.classList.add("postReactionIcon");
      icon.src = iconSrc;
      reactionIconsBox.appendChild(icon);
    }

    addIconsToBox(postLikeIcon, "icons/likeEmoji.png");
    addIconsToBox(postLoveIcon, "icons/loveEmoji.png");
    addIconsToBox(postCareIcon, "icons/CareEmoji.png");
    addIconsToBox(postHahaIcon, "icons/hahaEmoji.png");
    addIconsToBox(postWowIcon, "icons/WowEmoji.png");
    addIconsToBox(postSadIcon, "icons/sadEmoji.png");
    addIconsToBox(postAngryIcon, "icons/angryEmoji.png");

    if (postType === "feedPagePost" || postType === "innerPagePost") {
      postLikeIcon.classList.remove("hidden");
      postLoveIcon.classList.remove("hidden");
    }

    let iconArr = [
      postCareIcon,
      postHahaIcon,
      postWowIcon,
      postSadIcon,
      postAngryIcon,
    ];

    let hasReaction = false;

    const postEmojisWindow = document.createElement("div");
    postEmojisWindow.classList.add("postEmojisWindow");
    postEmojisWindow.classList.add("hidden");
    btnsContainer.appendChild(postEmojisWindow);

    const likeEmoji = document.createElement("img");
    const loveEmoji = document.createElement("img");
    const careEmoji = document.createElement("img");
    const hahaEmoji = document.createElement("img");
    const wowEmoji = document.createElement("img");
    const sadEmoji = document.createElement("img");
    const angryEmoji = document.createElement("img");

    function addEmojiToEmojisWindow(emoji, emojiSrc) {
      emoji.classList.add("postEmoji");
      emoji.src = emojiSrc;
      postEmojisWindow.appendChild(emoji);
    }

    addEmojiToEmojisWindow(likeEmoji, "icons/likeEmoji.png");
    addEmojiToEmojisWindow(loveEmoji, "icons/loveEmoji.png");
    addEmojiToEmojisWindow(careEmoji, "icons/CareEmoji.png");
    addEmojiToEmojisWindow(hahaEmoji, "icons/hahaEmoji.png");
    addEmojiToEmojisWindow(wowEmoji, "icons/WowEmoji.png");
    addEmojiToEmojisWindow(sadEmoji, "icons/sadEmoji.png");
    addEmojiToEmojisWindow(angryEmoji, "icons/angryEmoji.png");

    let isHoveringLikeBtn = false;
    let isHoveringEmojisWindow = false;

    function updateEmojisWindowVis() {
      if (isHoveringLikeBtn || isHoveringEmojisWindow) {
        postEmojisWindow.classList.remove("hidden");
      } else {
        postEmojisWindow.classList.add("hidden");
      }
    }

    likeBtn.addEventListener("mouseenter", function () {
      isHoveringLikeBtn = true;
      updateEmojisWindowVis();
    });

    likeBtn.addEventListener("mouseleave", function () {
      isHoveringLikeBtn = false;
      updateEmojisWindowVis();
    });

    postEmojisWindow.addEventListener("mouseenter", function () {
      isHoveringEmojisWindow = true;
      updateEmojisWindowVis();
    });

    postEmojisWindow.addEventListener("mouseleave", function () {
      isHoveringEmojisWindow = false;
      updateEmojisWindowVis();
    });

    function addEmojiReaction(emojiReaction, emojiSrc) {
      emojiReaction.src = emojiSrc;
      emojiReaction.classList.add("emojiReaction");
      emojiReaction.classList.add("hidden");
      likeBtn.appendChild(emojiReaction);
    }

    const likeEmojiReaction = document.createElement("img");
    const loveEmojiReaction = document.createElement("img");
    const careEmojiReaction = document.createElement("img");
    const hahaEmojiReaction = document.createElement("img");
    const wowEmojiReaction = document.createElement("img");
    const sadEmojiReaction = document.createElement("img");
    const angryEmojiReaction = document.createElement("img");

    addEmojiReaction(likeEmojiReaction, "icons/likeEmoji.png");
    addEmojiReaction(loveEmojiReaction, "icons/loveEmoji.png");
    addEmojiReaction(careEmojiReaction, "icons/CareEmoji.png");
    addEmojiReaction(hahaEmojiReaction, "icons/hahaEmoji.png");
    addEmojiReaction(wowEmojiReaction, "icons/WowEmoji.png");
    addEmojiReaction(sadEmojiReaction, "icons/sadEmoji.png");
    addEmojiReaction(angryEmojiReaction, "icons/angryEmoji.png");

    let emojiReactionArr = [
      likeEmojiReaction,
      loveEmojiReaction,
      careEmojiReaction,
      hahaEmojiReaction,
      wowEmojiReaction,
      sadEmojiReaction,
      angryEmojiReaction,
    ];

    const postEmotionTxt = document.createElement("p");
    likeBtn.appendChild(postEmotionTxt);

    function displayEmojiReaction(
      icon,
      emojiReaction,
      emotionTxt,
      emotionTxtColorClass,
    ) {
      if (
        !likeTxt.classList.contains("hidden") &&
        !likeInnteractIcon.classList.contains("hidden")
      ) {
        likeTxt.classList.add("hidden");
        likeInnteractIcon.classList.add("hidden");
      }
      postEmotionTxt.textContent = emotionTxt;
      postEmotionTxt.classList.remove("hidden");
      emojiReactionArr.forEach((reaction) => reaction.classList.add("hidden"));
      iconArr.forEach((icon) => icon.classList.add("hidden"));
      if (postType === "ActiveUserfeedPagePost") {
        postLikeIcon.classList.add("hidden");
        postLoveIcon.classList.add("hidden");
      }
      emojiReaction.classList.remove("hidden");
      if (emotionTxtColorClass === "blueTxtColor") {
        postEmotionTxt.classList.add("blueTxtColor");
        postEmotionTxt.classList.remove("yellowTxtColor");
        postEmotionTxt.classList.remove("redTxtColor");
      } else if (emotionTxtColorClass === "redTxtColor") {
        postEmotionTxt.classList.remove("blueTxtColor");
        postEmotionTxt.classList.remove("yellowTxtColor");
        postEmotionTxt.classList.add("redTxtColor");
      } else {
        postEmotionTxt.classList.add("yellowTxtColor");
        postEmotionTxt.classList.remove("redTxtColor");
        postEmotionTxt.classList.remove("blueTxtColor");
      }
      if (post.likesNum !== "0") {
        likesNumTxt.textContent = `You and ${post.likesNum} others`;
      } else {
        likesNumTxt.textContent = `You`;
      }
      icon.classList.remove("hidden");
    }

    function eventOnEmoji(
      icon,
      emoji,
      emojiReaction,
      emotionTxt,
      emotionTxtColorClass,
    ) {
      emoji.addEventListener("mousedown", function () {
        postEmojisWindow.classList.add("hidden");
        displayEmojiReaction(
          icon,
          emojiReaction,
          emotionTxt,
          emotionTxtColorClass,
        );
        updateLikedPosts(post, emotionTxt);
        hasReaction = true;
      });
    }

    function updateLikedPosts(post, emotionTxt) {
      let likedPostsArr = JSON.parse(
        localStorage.getItem("ActiveUser"),
      ).likedPosts;

      let existStatus = likedPostsArr.find(
        (likedPost) => likedPost.postId === post.postId,
      );

      if (!existStatus) {
        likedPostsArr.push({ postId: post.postId, reactionStatus: emotionTxt });
      } else {
        for (let i = 0; i < likedPostsArr.length; i++) {
          let currentPost = likedPostsArr[i];
          if (currentPost.postId === post.postId) {
            currentPost.reactionStatus = emotionTxt;
          }
        }
      }

      activeUser.likedPosts = likedPostsArr;
      updateUsers();
    }

    eventOnEmoji(
      postLikeIcon,
      likeEmoji,
      likeEmojiReaction,
      "Like",
      "blueTxtColor",
    );
    eventOnEmoji(
      postLoveIcon,
      loveEmoji,
      loveEmojiReaction,
      "Love",
      "redTxtColor",
    );
    eventOnEmoji(
      postCareIcon,
      careEmoji,
      careEmojiReaction,
      "Care",
      "yellowTxtColor",
    );
    eventOnEmoji(
      postHahaIcon,
      hahaEmoji,
      hahaEmojiReaction,
      "Haha",
      "yellowTxtColor",
    );
    eventOnEmoji(
      postWowIcon,
      wowEmoji,
      wowEmojiReaction,
      "Wow",
      "yellowTxtColor",
    );
    eventOnEmoji(
      postSadIcon,
      sadEmoji,
      sadEmojiReaction,
      "Sad",
      "yellowTxtColor",
    );
    eventOnEmoji(
      postAngryIcon,
      angryEmoji,
      angryEmojiReaction,
      "Angry",
      "redTxtColor",
    );

    likeBtn.addEventListener("click", function () {
      if (!hasReaction) {
        postEmojisWindow.classList.add("hidden");
        postEmotionTxt.classList.remove("hidden");
        displayEmojiReaction(
          postLikeIcon,
          likeEmojiReaction,
          "Like",
          "blueTxtColor",
        );
        updateLikedPosts(post, "Like");
        hasReaction = true;
      } else {
        if (post.likesNum !== "0") {
          likesNumTxt.textContent = post.likesNum;
        } else {
          likesNumTxt.textContent = "";
        }
        likeTxt.classList.remove("hidden");
        likeInnteractIcon.classList.remove("hidden");
        emojiReactionArr.forEach((reaction) =>
          reaction.classList.add("hidden"),
        );
        postEmotionTxt.classList.add("hidden");
        updateLikedPosts(post, "none");
        hasReaction = false;
        iconArr.forEach((icon) => icon.classList.add("hidden"));
        if (postType === "ActiveUserfeedPagePost") {
          postLikeIcon.classList.add("hidden");
          postLoveIcon.classList.add("hidden");
        }
      }
    });

    let likedPostsArr = JSON.parse(
      localStorage.getItem("ActiveUser"),
    ).likedPosts;

    for (let i = 0; i < likedPostsArr.length; i++) {
      if (likedPostsArr[i].postId === post.postId) {
        if (likedPostsArr[i].reactionStatus === "Like") {
          hasReaction = true;
          displayEmojiReaction(
            postLikeIcon,
            likeEmojiReaction,
            "Like",
            "blueTxtColor",
          );
        } else if (likedPostsArr[i].reactionStatus === "Love") {
          hasReaction = true;
          displayEmojiReaction(
            postLoveIcon,
            loveEmojiReaction,
            "Love",
            "redTxtColor",
          );
        } else if (likedPostsArr[i].reactionStatus === "Care") {
          hasReaction = true;
          displayEmojiReaction(
            postCareIcon,
            careEmojiReaction,
            "Care",
            "yellowTxtColor",
          );
        } else if (likedPostsArr[i].reactionStatus === "Haha") {
          hasReaction = true;
          displayEmojiReaction(
            postHahaIcon,
            hahaEmojiReaction,
            "Haha",
            "yellowTxtColor",
          );
        } else if (likedPostsArr[i].reactionStatus === "Wow") {
          hasReaction = true;
          displayEmojiReaction(
            postWowIcon,
            wowEmojiReaction,
            "Wow",
            "yellowTxtColor",
          );
        } else if (likedPostsArr[i].reactionStatus === "Sad") {
          hasReaction = true;
          displayEmojiReaction(
            postSadIcon,
            sadEmojiReaction,
            "Sad",
            "yellowTxtColor",
          );
        } else if (likedPostsArr[i].reactionStatus === "Angry") {
          hasReaction = true;
          displayEmojiReaction(
            postAngryIcon,
            angryEmojiReaction,
            "Angry",
            "redTxtColor",
          );
        }
      }
    }
  }

  createEmojis(
    post,
    postReactionIcons,
    postBtns,
    postLikeBtn,
    postLikesNum,
    postLikeInterractIcon,
    postLikeTxt,
  );

  // კომენტარების ნახვისათვის პოსტის ფანჯარა

  const postWindowBoxforComments = document.createElement("div");
  postWindowBoxforComments.classList.add("postWindowBoxforComments");
  postWindowBoxforComments.classList.add("hidden");
  body.appendChild(postWindowBoxforComments);

  const postWindowForComments = document.createElement("div");
  postWindowForComments.classList.add("postWindowForComments");
  postWindowBoxforComments.appendChild(postWindowForComments);

  const windowForCommentsTop = document.createElement("div");
  windowForCommentsTop.classList.add("windowForCommentsTop");
  postWindowForComments.appendChild(windowForCommentsTop);

  const windowForCommentsTxt = document.createElement("p");
  windowForCommentsTxt.classList.add("windowForCommentsTxt");
  if (postType === "feedPagePost" || postType === "innerPagePost") {
    windowForCommentsTxt.textContent = `${page.name}'s Post`;
  } else if (postType === "ActiveUserfeedPagePost") {
    windowForCommentsTxt.textContent = `${activeUser.firstName}'s Post`;
  }
  windowForCommentsTop.appendChild(windowForCommentsTxt);

  const windowForCommentsCloseBtnBox = document.createElement("div");
  windowForCommentsCloseBtnBox.classList.add("windowForCommentsCloseBtnBox");
  windowForCommentsTop.appendChild(windowForCommentsCloseBtnBox);

  const windowForCommentsCloseBtn = document.createElement("button");
  windowForCommentsCloseBtn.classList.add("windowForCommentsCloseBtn");
  windowForCommentsCloseBtnBox.appendChild(windowForCommentsCloseBtn);

  const windowForCommentsCloseBtnIcon = document.createElement("img");
  windowForCommentsCloseBtnIcon.classList.add("windowForCommentsCloseBtnIcon");
  windowForCommentsCloseBtnIcon.src = "icons/inpDelete.png";
  windowForCommentsCloseBtn.appendChild(windowForCommentsCloseBtnIcon);

  // კომენტარშიც უნდა გამოჩნდეს პოსტი ჩვეულებრივ ფუნქციებით

  const comBoxPostItem = document.createElement("div");
  comBoxPostItem.classList.add("mainPagePostItem");
  postWindowForComments.appendChild(comBoxPostItem);

  // პოსტის ძირითადი ნაწილი

  const comBoxPostItemMainContent = document.createElement("div");
  comBoxPostItem.appendChild(comBoxPostItemMainContent);

  const comBoxMainPagePostTop = document.createElement("div");
  comBoxMainPagePostTop.classList.add("mainPagePostTop");
  comBoxPostItemMainContent.appendChild(comBoxMainPagePostTop);

  const comBoxpostTopLeft = document.createElement("div");
  comBoxpostTopLeft.classList.add("postTopLeft");
  comBoxMainPagePostTop.appendChild(comBoxpostTopLeft);

  const comBoxPostProfImg = document.createElement("img");
  comBoxPostProfImg.classList.add("postProfImg");
  comBoxpostTopLeft.appendChild(comBoxPostProfImg);
  comBoxPostProfImg.style.cursor = "pointer";

  if (postType === "feedPagePost" || postType === "innerPagePost") {
    comBoxPostProfImg.src = page.profileImg;
  } else if (postType === "ActiveUserfeedPagePost") {
    comBoxPostProfImg.src = activeUser.profileImage;
  }

  const comBoxPostTopCenter = document.createElement("div");
  comBoxPostTopCenter.classList.add("postTopCenter");
  comBoxpostTopLeft.appendChild(comBoxPostTopCenter);

  const comBoxPostTopCenterTop = document.createElement("div");
  comBoxPostTopCenterTop.classList.add("postTopCenterTop");
  comBoxPostTopCenter.appendChild(comBoxPostTopCenterTop);

  const comBoxPostPageName = document.createElement("p");
  comBoxPostPageName.classList.add("postPageName");
  comBoxPostTopCenterTop.appendChild(comBoxPostPageName);

  if (postType === "feedPagePost" || postType === "innerPagePost") {
    comBoxPostPageName.textContent = page.name;
  } else if (postType === "ActiveUserfeedPagePost") {
    comBoxPostPageName.textContent =
      activeUser.firstName + " " + activeUser.lastName;
  }

  if (postType === "feedPagePost") {
    const comBoxSpanItem1 = document.createElement("span");
    comBoxPostTopCenterTop.appendChild(comBoxSpanItem1);
    comBoxSpanItem1.textContent = "·";

    const comBoxPostFollowBtn = document.createElement("button");
    comBoxPostFollowBtn.classList.add("postFollowBtn");
    comBoxPostTopCenterTop.appendChild(comBoxPostFollowBtn);
    comBoxPostFollowBtn.textContent = "Follow";
  }

  const comBoxPostTopCenterBottom = document.createElement("div");
  comBoxPostTopCenterBottom.classList.add("postTopCenterBottom");
  comBoxPostTopCenter.appendChild(comBoxPostTopCenterBottom);

  const comBoxPostDate = document.createElement("p");
  comBoxPostDate.classList.add("postDate");
  comBoxPostTopCenterBottom.appendChild(comBoxPostDate);
  if (postType === "feedPagePost" || postType === "innerPagePost") {
    comBoxPostDate.textContent = post.datePublished;
  } else if (postType === "ActiveUserfeedPagePost") {
    let currentTime = new Date().getTime();
    let timePassedInMS = currentTime - post.datePublished;
    let timePassedInSec = Math.floor(timePassedInMS / 1000);
    let timePassedInMin = Math.floor(timePassedInSec / 60);
    let timePassedInHours = Math.floor(timePassedInMin / 60);
    let showingTime = timePassedInSec;
    comBoxPostDate.textContent = showingTime.toString() + "s";
    if (timePassedInSec === 0) {
      comBoxPostDate.textContent = "Just now";
    }
    if (timePassedInSec > 60) {
      showingTime = timePassedInMin;
      comBoxPostDate.textContent = showingTime.toString() + "m";
    }
    if (timePassedInMin > 60) {
      showingTime = timePassedInHours;
      comBoxPostDate.textContent = showingTime.toString() + "h";
    }
  }

  const comBoxSpanItem3 = document.createElement("span");
  comBoxPostTopCenterBottom.appendChild(comBoxSpanItem3);
  comBoxSpanItem3.textContent = "·";

  const comBoxPostAudienceIcon = document.createElement("img");
  comBoxPostAudienceIcon.classList.add("postAudienceIcon");
  comBoxPostAudienceIcon.src = "icons/globeIcon.png";
  comBoxPostTopCenterBottom.appendChild(comBoxPostAudienceIcon);

  const comBoxPostTopBtns = document.createElement("div");
  comBoxPostTopBtns.classList.add("postTopBtns");
  comBoxMainPagePostTop.appendChild(comBoxPostTopBtns);

  const comBoxPostMoreBtnsBtn = document.createElement("button");
  comBoxPostMoreBtnsBtn.tabIndex = 0;
  comBoxPostMoreBtnsBtn.classList.add("postMoreBtnsBtn");
  comBoxPostMoreBtnsBtn.classList.add("postTopBtn");
  comBoxPostMoreBtnsBtn.classList.add("hoverLightGrayBtn");
  comBoxPostTopBtns.appendChild(comBoxPostMoreBtnsBtn);

  const comBoxPostTopBtnIcon1 = document.createElement("img");
  comBoxPostTopBtnIcon1.classList.add("postTopBtnIcon");
  comBoxPostTopBtnIcon1.src = "icons/threeDotIcon.png";
  comBoxPostMoreBtnsBtn.appendChild(comBoxPostTopBtnIcon1);

  const comBoxPostTxtContent = document.createElement("p");
  comBoxPostTxtContent.classList.add("postTxtContent");
  comBoxPostTxtContent.textContent = post.textContent;
  comBoxPostItemMainContent.appendChild(comBoxPostTxtContent);

  // პოსტის ფოტო

  if (post.imgContent !== "") {
    const comBoxPostImgContentBox = document.createElement("div");
    comBoxPostImgContentBox.classList.add("postImgContentBox");
    comBoxPostItemMainContent.appendChild(comBoxPostImgContentBox);
    const comBoxPostImgContent = document.createElement("img");
    comBoxPostImgContent.classList.add("postImgContent");
    comBoxPostImgContent.src = post.imgContent;
    comBoxPostImgContentBox.appendChild(comBoxPostImgContent);
  }

  // რამდენი ლაიქი კომენტარი და შეარი აქვს პოსტს

  const comBoxPostLikesCommentsShares = document.createElement("div");
  comBoxPostLikesCommentsShares.classList.add("postLikesCommentsShares");
  comBoxPostItemMainContent.appendChild(comBoxPostLikesCommentsShares);

  const comBoxPostLikes = document.createElement("div");
  comBoxPostLikes.classList.add("postLikes");
  comBoxPostLikesCommentsShares.appendChild(comBoxPostLikes);

  const comBoxPostReactionIcons = document.createElement("div");
  comBoxPostReactionIcons.classList.add("postReactionIcons");
  comBoxPostLikes.appendChild(comBoxPostReactionIcons);

  const comBoxPostLikesNum = document.createElement("p");
  comBoxPostLikesNum.classList.add("postLikesNum");
  comBoxPostLikes.appendChild(comBoxPostLikesNum);

  if (post.likesNum !== "0") {
    comBoxPostLikesNum.textContent = post.likesNum;
  }

  const comBoxCommentsAndShares = document.createElement("div");
  comBoxCommentsAndShares.classList.add("commentsAndShares");
  comBoxPostLikesCommentsShares.appendChild(comBoxCommentsAndShares);

  const comBoxPostCommentsNum = document.createElement("p");
  comBoxPostCommentsNum.classList.add("postLikesNum");
  comBoxCommentsAndShares.appendChild(comBoxPostCommentsNum);

  if (post.commentsArr.length !== 0) {
    comBoxPostCommentsNum.textContent = post.commentsArr.length + " comments";
  }

  const comBoxPostSharesNum = document.createElement("p");
  comBoxPostSharesNum.classList.add("postLikesNum");
  comBoxCommentsAndShares.appendChild(comBoxPostSharesNum);

  if (post.sharesNum !== "0") {
    comBoxPostSharesNum.textContent = post.sharesNum + " shares";
  }

  // ლაიქის, კომენტარის და დაშეარების ღილაკები

  const comBoxPostBtns = document.createElement("div");
  comBoxPostBtns.classList.add("postBtns");
  comBoxPostItemMainContent.appendChild(comBoxPostBtns);

  const comBoxPostLikeBtn = document.createElement("button");
  comBoxPostLikeBtn.classList.add("postLikeBtn");
  comBoxPostLikeBtn.classList.add("postBtn");
  comBoxPostLikeBtn.classList.add("hoverLightGrayBtn");
  comBoxPostBtns.appendChild(comBoxPostLikeBtn);

  const comBoxPostLikeInterractIcon = document.createElement("img");
  comBoxPostLikeInterractIcon.classList.add("postBtnIcon");
  comBoxPostLikeInterractIcon.src = "icons/likeIcon.png"
  comBoxPostLikeBtn.appendChild(comBoxPostLikeInterractIcon);

  const comBoxPostLikeTxt = document.createElement("p");
  comBoxPostLikeTxt.classList.add("postBtnTxt");
  comBoxPostLikeBtn.appendChild(comBoxPostLikeTxt);
  comBoxPostLikeTxt.textContent = "Like";

  const comBoxPostCommentBtn = document.createElement("button");
  comBoxPostCommentBtn.classList.add("postCommentBtn");
  comBoxPostCommentBtn.classList.add("postBtn");
  comBoxPostCommentBtn.classList.add("hoverLightGrayBtn");
  comBoxPostBtns.appendChild(comBoxPostCommentBtn);

  const comBoxPostCommentIcon = document.createElement("img");
  comBoxPostCommentIcon.classList.add("postBtnIcon");
  comBoxPostCommentIcon.src = "icons/commentIcon.png"
  comBoxPostCommentBtn.appendChild(comBoxPostCommentIcon);

  const comBoxPostCommentTxt = document.createElement("p");
  comBoxPostCommentTxt.classList.add("postCommentTxt");
  comBoxPostCommentTxt.classList.add("postBtnTxt");
  comBoxPostCommentBtn.appendChild(comBoxPostCommentTxt);
  comBoxPostCommentTxt.textContent = "Comment";

  const comBoxPostShareBtn = document.createElement("button");
  comBoxPostShareBtn.classList.add("postShareBtn");
  comBoxPostShareBtn.classList.add("postBtn");
  comBoxPostShareBtn.classList.add("hoverLightGrayBtn");
  comBoxPostBtns.appendChild(comBoxPostShareBtn);

  const comBoxPostShareIcon = document.createElement("img");
  comBoxPostShareIcon.classList.add("postBtnIcon");
  comBoxPostShareIcon.src = "icons/shareIcon.png"
  comBoxPostShareBtn.appendChild(comBoxPostShareIcon);

  const comBoxPostShareTxt = document.createElement("p");
  comBoxPostShareTxt.classList.add("postShareTxt");
  comBoxPostShareTxt.classList.add("postBtnTxt");
  comBoxPostShareBtn.appendChild(comBoxPostShareTxt);
  comBoxPostShareTxt.textContent = "Share";

  // გვერდის პროფაილზე ან სახელზე დაჭერის დროს აქტიურ გვერდად დაყენება და გვერდზე გადასვლა

  comBoxPostProfImg.addEventListener("click", redirectToPage);
  comBoxPostPageName.addEventListener("click", redirectToPage);

  // სამ წერტილზე დაჭერის დროს გამოსაჩენი ფანჯარა

  const comBoxPostMoreBtnsWindow = document.createElement("div");
  comBoxPostMoreBtnsWindow.classList.add("postMoreBtnsWindow");
  comBoxPostMoreBtnsWindow.classList.add("hidden");
  comBoxPostItem.appendChild(comBoxPostMoreBtnsWindow);
  comBoxPostMoreBtnsWindow.classList.add("innerPagePostMoreBtnsWindow");

  comBoxPostMoreBtnsBtn.addEventListener("click", function () {
    comBoxPostMoreBtnsWindow.classList.toggle("hidden");
  });

  comBoxPostMoreBtnsBtn.addEventListener("focusout", function () {
    comBoxPostMoreBtnsWindow.classList.add("hidden");
  });

  createMoreBtns(comBoxPostMoreBtnsWindow);
  createEmojis(
    post,
    comBoxPostReactionIcons,
    comBoxPostBtns,
    comBoxPostLikeBtn,
    comBoxPostLikesNum,
    comBoxPostLikeInterractIcon,
    comBoxPostLikeTxt,
  );

  const commentsBox = document.createElement("div");
  commentsBox.classList.add("commentsBox");
  postWindowForComments.appendChild(commentsBox);

  function createComment(profileImg, authorName, TxtContent) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("commentBox");
    commentsBox.appendChild(commentBox);

    const commentAuthorImg = document.createElement("img");
    commentAuthorImg.classList.add("commentAuthorImg");
    commentAuthorImg.src = profileImg;
    commentBox.appendChild(commentAuthorImg);

    const commentContentBox = document.createElement("div");
    commentContentBox.classList.add("commentContentBox");
    commentBox.appendChild(commentContentBox);

    const commentAuthorName = document.createElement("p");
    commentAuthorName.classList.add("commentAuthorName");
    commentAuthorName.textContent = authorName;
    commentContentBox.appendChild(commentAuthorName);

    const commentTxtContent = document.createElement("p");
    commentTxtContent.classList.add("commentTxtContent");
    commentTxtContent.textContent = TxtContent;
    commentContentBox.appendChild(commentTxtContent);
  }

  for (let i = 0; i < post.commentsArr.length; i++) {
    createComment(
      post.commentsArr[i].authorProfImg,
      post.commentsArr[i].authorName,
      post.commentsArr[i].commentTxtContent,
    );
  }

  const activeUserCommentWindow = document.createElement("div");
  activeUserCommentWindow.classList.add("activeUserCommentWindow");
  postWindowForComments.appendChild(activeUserCommentWindow);

  const activeUserCommentWindowProfImg = document.createElement("img");
  activeUserCommentWindowProfImg.classList.add(
    "activeUserCommentWindowProfImg",
  );
  activeUserCommentWindowProfImg.src = activeUser.profileImage;
  activeUserCommentWindow.appendChild(activeUserCommentWindowProfImg);

  const activeUserCommentInputBox = document.createElement("div");
  activeUserCommentInputBox.classList.add("activeUserCommentInputBox");
  activeUserCommentWindow.appendChild(activeUserCommentInputBox);

  const activeUserCommentInput = document.createElement("textarea");
  activeUserCommentInput.type = "text";
  activeUserCommentInput.classList.add("activeUserCommentInput");
  activeUserCommentInput.placeholder = "Write a comment...";
  activeUserCommentInputBox.appendChild(activeUserCommentInput);

  const commentBtn = document.createElement("button");
  commentBtn.classList.add("commentBtn");
  activeUserCommentInputBox.appendChild(commentBtn);

  const commentIcon = document.createElement("img");
  commentIcon.src = "icons/sendIcon.png";
  commentIcon.classList.add("commentIcon");
  commentBtn.appendChild(commentIcon);

  let pageYOffset;

  function unfreezeBack() {
    mainContainer.style.top = "";
    body.style.overflow = "auto";
    postWindowBoxforComments.classList.add("hidden");
    window.scrollTo(0, pageYOffset);
  }

  function freezeBack() {
    pageYOffset = window.pageYOffset;
    mainContainer.style.top = `-${pageYOffset}px`;
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }

  postCommentBtn.addEventListener("click", function () {
    freezeBack();
    postWindowBoxforComments.classList.remove("hidden");
  });

  postCommentsNum.addEventListener("click", function () {
    freezeBack();
    postWindowBoxforComments.classList.remove("hidden");
  });

  windowForCommentsCloseBtn.addEventListener("click", function () {
    unfreezeBack();
  });

  commentBtn.disabled = true;

  activeUserCommentInput.addEventListener("input", function (event) {
    commentIcon.classList.add("commentActiveIcon");
    commentBtn.disabled = false;
    let trimmedInput = activeUserCommentInput.value.trim();
    if (trimmedInput.length === 0) {
      commentIcon.classList.remove("commentActiveIcon");
      commentBtn.disabled = true;
    }
    let height = activeUserCommentInput.clientHeight + 50;
    commentsBox.style.paddingBottom = height + "px";
  });

  activeUserCommentInput.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
      event.preventDefault();
    }
  })

  activeUserCommentInputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      commentBtn.click();
    }
  });

  commentBtn.addEventListener("click", function () {
    const newComment = {
      authorName: activeUser.firstName + " " + activeUser.lastName,
      authorProfImg: activeUser.profileImage,
      commentTxtContent: activeUserCommentInput.value,
    };
    createComment(
      newComment.authorProfImg,
      newComment.authorName,
      newComment.commentTxtContent,
    );
    let commentsNum;
    if (postType === "feedPagePost" || postType === "innerPagePost") {
      for (let i = 0; i < pagesArr[0].postsArr.length; i++) {
        let currentPost = pagesArr[0].postsArr[i];
        if (currentPost.postId === post.postId) {
          currentPost.commentsArr.push(newComment);
          commentsNum = currentPost.commentsArr.length;
        }
      }
    } else if (postType === "ActiveUserfeedPagePost") {
      for (let i = 0; i < activeUser.posts.length; i++) {
        let currentPost = activeUser.posts[i];
        if (currentPost.postId === post.postId) {
          currentPost.commentsArr.push(newComment);
          commentsNum = currentPost.commentsArr.length;
        }
      }
    }
    localStorage.setItem("pagesArr", JSON.stringify(pagesArr));
    updateUsers();
    postCommentsNum.textContent = commentsNum + " comments";
    comBoxPostCommentsNum.textContent = commentsNum + " comments";
    activeUserCommentInput.value = "";
    commentBtn.disabled = true;
    commentIcon.classList.remove("commentActiveIcon");
    commentsBox.style.paddingBottom = "90px";
  });
}
