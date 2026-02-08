function createPost(postsContainer, page, post) {
  const mainPagePostItem = document.createElement("div");
  mainPagePostItem.classList.add("mainPagePostItem");
  postsContainer.appendChild(mainPagePostItem);

  const mainPagePostTop = document.createElement("div");
  mainPagePostTop.classList.add("mainPagePostTop");
  mainPagePostItem.appendChild(mainPagePostTop);

  const postTopLeft = document.createElement("div");
  postTopLeft.classList.add("postTopLeft");
  mainPagePostTop.appendChild(postTopLeft);

  const postProfImg = document.createElement("img");
  postProfImg.classList.add("postProfImg");
  postTopLeft.appendChild(postProfImg);
  postProfImg.src = page.profileImg;
  postProfImg.style.cursor = "pointer";

  const postTopCenter = document.createElement("div");
  postTopCenter.classList.add("postTopCenter");
  postTopLeft.appendChild(postTopCenter);

  const postTopCenterTop = document.createElement("div");
  postTopCenterTop.classList.add("postTopCenterTop");
  postTopCenter.appendChild(postTopCenterTop);

  const postPageName = document.createElement("p");
  postPageName.classList.add("postPageName");
  postTopCenterTop.appendChild(postPageName);
  postPageName.textContent = page.name;

  const spanItem1 = document.createElement("span");
  postTopCenterTop.appendChild(spanItem1);
  spanItem1.textContent = "·";

  const postFollowBtn = document.createElement("button");
  postFollowBtn.classList.add("postFollowBtn");
  postTopCenterTop.appendChild(postFollowBtn);
  postFollowBtn.textContent = "Follow";

  const postTopCenterBottom = document.createElement("div");
  postTopCenterBottom.classList.add("postTopCenterBottom");
  postTopCenter.appendChild(postTopCenterBottom);

  const postDate = document.createElement("p");
  postDate.classList.add("postDate");
  postTopCenterBottom.appendChild(postDate);
  postDate.textContent = post.datePublished;

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
  postMoreBtnsBtn.classList.add("postMoreBtnsBtn");
  postMoreBtnsBtn.classList.add("postTopBtn");
  postMoreBtnsBtn.classList.add("hoverLightGrayBtn");
  postTopBtns.appendChild(postMoreBtnsBtn);

  const postTopBtnIcon1 = document.createElement("img");
  postTopBtnIcon1.classList.add("postTopBtnIcon");
  postTopBtnIcon1.src = "icons/threeDotIcon.png";
  postMoreBtnsBtn.appendChild(postTopBtnIcon1);

  const postHideBtn = document.createElement("button");
  postHideBtn.classList.add("postHideBtn");
  postHideBtn.classList.add("postTopBtn");
  postHideBtn.classList.add("hoverLightGrayBtn");
  postTopBtns.appendChild(postHideBtn);

  const postTopBtnIcon2 = document.createElement("img");
  postTopBtnIcon2.classList.add("postTopBtnIcon");
  postTopBtnIcon2.src = "icons/inpDelete.png";
  postHideBtn.appendChild(postTopBtnIcon2);

  const postTxtContent = document.createElement("p");
  postTxtContent.classList.add("postTxtContent");
  postTxtContent.textContent = post.textContent;
  mainPagePostItem.appendChild(postTxtContent);

  if (post.imgContent !== "") {
    const postImgContentBox = document.createElement("div");
    postImgContentBox.classList.add("postImgContentBox");
    mainPagePostItem.appendChild(postImgContentBox);
    // postImgContentBox.style.backgroundImage = `url(${post.imgContent})`;

    const postImgContent = document.createElement("img");
    postImgContent.classList.add("postImgContent");
    postImgContent.src = post.imgContent;
    postImgContentBox.appendChild(postImgContent);
    if (post.imgContent.naturalHeight > window.innerHeight * 0.6) {
      console.log("hello");
    }
  }

  const postLikesCommentsShares = document.createElement("div");
  postLikesCommentsShares.classList.add("postLikesCommentsShares");
  mainPagePostItem.appendChild(postLikesCommentsShares);

  const postLikes = document.createElement("div");
  postLikes.classList.add("postLikes");
  postLikesCommentsShares.appendChild(postLikes);

  const postReactionIcons = document.createElement("div");
  postReactionIcons.classList.add("postReactionIcons");
  postLikes.appendChild(postReactionIcons);

  const postLikeIcon = document.createElement("img");
  postLikeIcon.classList.add("postLikeIcon");
  postLikeIcon.classList.add("postReactionIcon");
  postLikeIcon.src =
    "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E";
  postReactionIcons.appendChild(postLikeIcon);

  const postLoveIcon = document.createElement("img");
  postLoveIcon.classList.add("postLoveIcon");
  postLoveIcon.classList.add("postReactionIcon");
  postLoveIcon.src =
    "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E";
  postReactionIcons.appendChild(postLoveIcon);

  const postLikesNum = document.createElement("p");
  postLikesNum.classList.add("postLikesNum");
  postLikes.appendChild(postLikesNum);
  postLikesNum.textContent = post.likesNum;

  const commentsAndShares = document.createElement("div");
  commentsAndShares.classList.add("commentsAndShares");
  postLikesCommentsShares.appendChild(commentsAndShares);

  const postCommentsNum = document.createElement("p");
  postCommentsNum.classList.add("postLikesNum");
  commentsAndShares.appendChild(postCommentsNum);
  postCommentsNum.textContent = post.commentsArr.length + " comments";

  const postSharesNum = document.createElement("p");
  postSharesNum.classList.add("postLikesNum");
  commentsAndShares.appendChild(postSharesNum);
  postSharesNum.textContent = post.sharesNum + " shares";

  const postBtns = document.createElement("div");
  postBtns.classList.add("postBtns");
  mainPagePostItem.appendChild(postBtns);

  const postLikeBtn = document.createElement("button");
  postLikeBtn.classList.add("postLikeBtn");
  postLikeBtn.classList.add("postBtn");
  postLikeBtn.classList.add("hoverLightGrayBtn");
  postBtns.appendChild(postLikeBtn);

  const postLikeInterractIcon = document.createElement("div");
  postLikeInterractIcon.classList.add("postLikeIcon");
  postLikeInterractIcon.classList.add("postBtnIcon");
  postLikeBtn.appendChild(postLikeInterractIcon);

  const postLikeTxt = document.createElement("p");
  postLikeTxt.classList.add("postLikeTxt");
  postLikeTxt.classList.add("postBtnTxt");
  postLikeBtn.appendChild(postLikeTxt);
  postLikeTxt.textContent = "Like";

  const postCommentBtn = document.createElement("button");
  postCommentBtn.classList.add("postCommentBtn");
  postCommentBtn.classList.add("postBtn");
  postCommentBtn.classList.add("hoverLightGrayBtn");
  postBtns.appendChild(postCommentBtn);

  const postCommentIcon = document.createElement("div");
  postCommentIcon.classList.add("postCommentIcon");
  postCommentIcon.classList.add("postBtnIcon");
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

  const postShareIcon = document.createElement("div");
  postShareIcon.classList.add("postShareIcon");
  postShareIcon.classList.add("postBtnIcon");
  postShareBtn.appendChild(postShareIcon);

  const postShareTxt = document.createElement("p");
  postShareTxt.classList.add("postShareTxt");
  postCommentTxt.classList.add("postBtnTxt");
  postShareBtn.appendChild(postShareTxt);
  postShareTxt.textContent = "Share";

  const postMoreBtnsWindow = document.createElement("div");
  postMoreBtnsWindow.classList.add("postMoreBtnsWindow");
  postMoreBtnsWindow.classList.add("hidden");
  mainPagePostItem.appendChild(postMoreBtnsWindow);

  for (let i = 0; i < 9; i++) {
    const postMoreBtn = document.createElement("button");
    postMoreBtn.classList.add("postMoreBtn");
    postMoreBtnsWindow.appendChild(postMoreBtn);

    if (i !== 6 && i !== 7 && i !== 8) {
      const postMoreBtnIcon = document.createElement("div");
      postMoreBtnIcon.classList.add("postMoreBtnIcon");
      postMoreBtn.appendChild(postMoreBtnIcon);
      if (i == 0) {
        postMoreBtnIcon.classList.add("interestedBtnIcon");
        postMoreBtnIcon.classList.add("marginTop-10px");
      } else if (i == 1) {
        postMoreBtnIcon.classList.add("notInterestedBtnIcon");
        postMoreBtnIcon.classList.add("marginTop-10px");
      } else if (i == 2) {
        postMoreBtnIcon.classList.add("savePostBtnIcon");
        postMoreBtnIcon.classList.add("marginTop-10px");
      } else if (i == 3) {
        postMoreBtnIcon.classList.add("notificationsBtnIcon");
      } else if (i == 4) {
        postMoreBtnIcon.classList.add("whySeeingBtnIcon");
      } else if (i == 5) {
        postMoreBtnIcon.classList.add("embedBtnIcon");
      }
    } else {
      const postMoreBtnIconImg = document.createElement("img");
      postMoreBtnIconImg.classList.add("postMoreBtnIcon");
      postMoreBtn.appendChild(postMoreBtnIconImg);
      postMoreBtnIconImg.classList.add("marginTop-10px");
      if (i === 6) {
        postMoreBtnIconImg.src =
          "https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/okEwlfy_N3L.png";
      } else if (i === 7) {
        postMoreBtnIconImg.src =
          "https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/tKi0xxO9GKd.png";
      } else if (i == 8) {
        postMoreBtnIconImg.src =
          "https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/g0ec98kwkU_.png";
      }
    }

    const postMoreBtnBoxTxts = document.createElement("div");
    postMoreBtnBoxTxts.classList.add("postMoreBtnBoxTxts");
    postMoreBtn.appendChild(postMoreBtnBoxTxts);

    const postMoreBtnBoxTxt1 = document.createElement("p");
    postMoreBtnBoxTxt1.classList.add("postMoreBtnBoxTxt1");
    postMoreBtnBoxTxts.appendChild(postMoreBtnBoxTxt1);

    const postMoreBtnBoxTxt2 = document.createElement("p");
    postMoreBtnBoxTxt2.classList.add("postMoreBtnBoxTxt2");
    postMoreBtnBoxTxts.appendChild(postMoreBtnBoxTxt2);

    if (i === 3 || i === 4 || i === 5) {
      postMoreBtnBoxTxts.removeChild(postMoreBtnBoxTxt2);
    }

    if (i === 0) {
      postMoreBtnBoxTxt1.textContent = "Interested";
      postMoreBtnBoxTxt2.textContent = "More of your posts will be like this";
    } else if (i === 1) {
      postMoreBtnBoxTxt1.textContent = "Not interested";
      postMoreBtnBoxTxt2.textContent = "Less of your posts will be like this";
    } else if (i === 2) {
      postMoreBtnBoxTxt1.textContent = "Save Post";
      postMoreBtnBoxTxt2.textContent = "Add this to your saved items";
    } else if (i === 3) {
      postMoreBtnBoxTxt1.textContent = "Turn on notifications for this post";
    } else if (i === 4) {
      postMoreBtnBoxTxt1.textContent = "Why am I seeing this post?";
    } else if (i === 5) {
      postMoreBtnBoxTxt1.textContent = "Embed";
    } else if (i === 6) {
      postMoreBtnBoxTxt1.textContent = "Hide Post";
      postMoreBtnBoxTxt2.textContent = "See fewer posts likes this";
    } else if (i === 7) {
      postMoreBtnBoxTxt1.textContent = "Report post";
      postMoreBtnBoxTxt2.textContent = `We won't let ${page.name} know who reported this`;
    } else if (i === 8) {
      postMoreBtnBoxTxt1.textContent = `Block ${page.name}'s profile`;
      postMoreBtnBoxTxt2.textContent = `You won't be able to see or contact each other`;
    }

    if (i === 1 || i === 2 || i === 5) {
      const postMoreBtnsDecoLine = document.createElement("div");
      postMoreBtnsDecoLine.classList.add("postMoreBtnsDecoLine");
      postMoreBtnsWindow.appendChild(postMoreBtnsDecoLine);
    }
  }

  postProfImg.addEventListener("click", function () {
    clearHeaderBtnEffects();
    localStorage.setItem("activePage", JSON.stringify(page));
    window.location.href = "FbPage.html";
  });

  postMoreBtnsBtn.addEventListener("click", function () {
    postMoreBtnsWindow.classList.toggle("hidden");
  });

  postMoreBtnsBtn.addEventListener("focusout", function () {
    postMoreBtnsWindow.classList.add("hidden");
  });
}
