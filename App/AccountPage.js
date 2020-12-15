/* global signedInUser */
// this loads the appropriate user info into the page.
const accountInfo1 = signedInUser[0];
const accountInfo2 = signedInUser[1];
document.getElementById('signedInName').innerHTML = accountInfo1;
document.getElementById('signedInPwd').innerHTML = accountInfo2;
