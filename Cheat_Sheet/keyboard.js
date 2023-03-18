// keyboard btn disabled for website

// mouse write button disabled
window.oncontextmenu = function () {
  console.log("HI, How Are You? Welcome to the console!");
  return false;
};


// keyboard btn disabled

document.onkeydown = function (f) {
  if (f.ctrlKey && f.shiftKey && f.keyCode === 73) {
    alert("Hi, 😀");
    return false;
  } else if (
    f.ctrlKey &&
    (f.keyCode === 67 ||
      f.keyCode === 86 ||
      f.keyCode === 85 ||
      f.keyCode === 117)
  ) {
    alert("Hello World! 🤓");
    return false;
  } else {
    return true;
  }
};
