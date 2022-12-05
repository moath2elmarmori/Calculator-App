// theme 1 ojbect
const theme1Object = {
  textColor: "white",
  background: "hsl(222, 26%, 31%)",
  elementsBackground: "hsl(223, 31%, 20%)",
  altElementsBackground: "hsl(6, 63%, 50%)",
  buttonsColor: "hsl(221, 14%, 31%)",
  buttonsBackground: "hsl(30, 25%, 89%)",
  buttonsBorderBackground: "hsl(29, 16.2%, 64.9%)",
  lighterBackground: "hsl(225, 20.8%, 49%)",
  lighterBorderColor: "hsl(221, 28%, 38%)",
  specialBackground: "hsl(6, 63.1%, 50%)",
  specialBorderColor: "rgb(196, 26, 7)",
  specialElementsColor: "white",
};
// theme 2 ojbect
const theme2Object = {
  textColor: "black",
  background: "hsl(0, 0%, 90%)",
  elementsBackground: "hsl(0, 5.2%, 81%)",
  altElementsBackground: "hsl(24.9, 98%, 40%)",
  buttonsColor: "hsl(221, 14%, 31%)",
  buttonsBackground: "hsl(45, 7.1%, 89%)",
  buttonsBorderBackground: "rgb(109, 91, 75)",
  lighterBackground: "hsl(185.3, 41.8%, 37.1%)",
  lighterBorderColor: "rgb(27, 96, 102)",
  specialBackground: "hsl(24.9, 98%, 40%)",
  specialBorderColor: "rgb(148, 66, 8)",
  specialElementsColor: "white",
};
// theme 3 ojbect
const theme3Object = {
  textColor: "hsl(52, 100%, 62%)",
  background: "hsl(268, 75%, 9%)",
  elementsBackground: "hsl(267.9, 70.5%, 12%)",
  altElementsBackground: "hsl(176, 100%, 43.9%)",
  buttonsColor: "hsl(52, 100%, 62%)",
  buttonsBackground: "hsl(281.2, 89.4%, 25.9%)",
  buttonsBorderBackground: "rgb(127, 3, 184)",
  lighterBackground: "hsl(268.2, 47.7%, 21%)",
  lighterBorderColor: "rgb(82, 3, 172)",
  specialBackground: "hsl(176, 100%, 43.9%)",
  specialBorderColor: "rgb(4, 163, 153)",
  specialElementsColor: "black",
};

// #####################

// select the theme point
let themePoint = document.querySelector(".theme-point");
// select the theme numbers
let themeNumbers = document.querySelectorAll("[data-theme]");
// loop over them
themeNumbers.forEach((ele) => {
  // add an event listener to every themeNumber
  ele.addEventListener("click", function () {
    // check if the clicked theme is the theme [1]
    if (ele.dataset.theme === "1") {
      // make the theme point's style left = 15%
      themePoint.style.left = "15%";
      // call the change theme funciton and pass it the first theme object
      changeTheme(theme1Object);
      // check if the clicked element is the theme 2
    } else if (ele.dataset.theme === "2") {
      // make the theme point's style left = 47%
      themePoint.style.left = "47%";
      // call the change theme funciton and pass it the second theme object
      changeTheme(theme2Object);
      // check if the clicked element is the theme 3
    } else if (ele.dataset.theme === "3") {
      // make the theme point's style left = 83%
      themePoint.style.left = "83%";
      // call the change theme funciton and pass it the third theme object
      changeTheme(theme3Object);
    }
  });
});

// make a function that will expect an object and it will change the property of some variables in the root element to this passed object
function changeTheme(themeObject) {
  let rootEle = document.documentElement;
  rootEle.style.setProperty("--theme-text-color", themeObject.textColor);
  rootEle.style.setProperty("--theme-background", themeObject.background);
  rootEle.style.setProperty(
    "--theme-elements-background",
    themeObject.elementsBackground
  );
  rootEle.style.setProperty(
    "--theme-alt-elements-background",
    themeObject.altElementsBackground
  );
  rootEle.style.setProperty("--theme-buttons-color", themeObject.buttonsColor);
  rootEle.style.setProperty(
    "--theme-buttons-background",
    themeObject.buttonsBackground
  );
  rootEle.style.setProperty(
    "--theme-buttons-border-background",
    themeObject.buttonsBorderBackground
  );
  rootEle.style.setProperty(
    "--theme-lighter-background",
    themeObject.lighterBackground
  );
  rootEle.style.setProperty(
    "--theme-lighter-border-color",
    themeObject.lighterBorderColor
  );
  rootEle.style.setProperty(
    "--theme-special-background",
    themeObject.specialBackground
  );
  rootEle.style.setProperty(
    "--theme-special-border-color",
    themeObject.specialBorderColor
  );
  rootEle.style.setProperty(
    "--theme-special-ele-color",
    themeObject.specialElementsColor
  );
}

// select the previous operation
let previousOperation = document.querySelector(".previous-operation");
// select the current operation
let currentOperation = document.querySelector(".current-operation");

// select the numbers and the [.]
let dataNums = document.querySelectorAll("[data-num]");
// loop over them
dataNums.forEach((dataNum) => {
  // add an event listener to every data num
  dataNum.addEventListener("click", function () {
    // check if the current operation's innerHTML has the [.]
    if (currentOperation.innerHTML.includes(".")) {
      // if so and the user has clicked on the [.] again don't give him the click, instead return nothing
      if (dataNum.dataset.num === ".") return;
    }
    // add the new clicked num to the current operation innerHTML
    currentOperation.innerHTML += dataNum.innerHTML;
  });
});

// select the data operations
let dataOperations = document.querySelectorAll("[data-operation]");
// loop over them
dataOperations.forEach((dataOperation) => {
  // add an evnet listener
  dataOperation.addEventListener("click", function () {
    // check if the current operarion's innerHTML includes any one of the operation, and if so return nothing because there is already an operation
    // after i read this code i have removed all the following 4 lines because they do nothing but introducing a bug in the calculator
    // ####### the 4 lines #######
    // if (currentOperation.innerHTML.includes("+")) return;
    // if (currentOperation.innerHTML.includes("-")) return;
    // if (currentOperation.innerHTML.includes("x")) return;
    // if (currentOperation.innerHTML.includes("/")) return;
    // #######
    // check if the current operation's innerHTML is empty, and if so return nothing
    if (currentOperation.innerHTML === "") return;
    // check if the previous operation's innerHTML is empty
    if (previousOperation.innerHTML === "") {
      // if so, make the innerHTML of the previous operation equal to the number that the user has put and the operation that the user has choose
      previousOperation.innerHTML = `<span class="the-num">${currentOperation.innerHTML}</span>	&nbsp; <span class="the-operation">${dataOperation.dataset.operation}</span>`;
      // check if the previous operation's innerHTML is not empty
    } else if (previousOperation.innerHTML !== "") {
      // select the previous number
      let theNum = document.querySelector(".the-num");
      // select the previous opertion
      let theOperation = document.querySelector(".the-operation");
      // make the previous operation's innerHTML equal to the result number by calling the calc function that will do all the working, and put the new operation
      previousOperation.innerHTML = `<span class="the-num">${calc(
        theNum.innerHTML,
        theOperation.innerHTML,
        currentOperation.innerHTML
      )}</span>&nbsp;<span class="the-operation">${
        dataOperation.dataset.operation
      }</span>`;
    }
    // reset the current operation's innerHTML
    currentOperation.innerHTML = "";
  });
});

// select the equal operation
let equalOperation = document.querySelector("[data-equal]");
// add an evnet listener to the equal element
equalOperation.addEventListener("click", function () {
  // check if the current operation's innerHTML and the previous operation's innerHTMl is not empty
  if (currentOperation.innerHTML !== "" && previousOperation.innerHTML !== "") {
    // select the previous number
    let theNum = document.querySelector(".the-num");
    // select the previous operation
    let theOperation = document.querySelector(".the-operation");
    // make the current operation's innerHTML equal to the result number by calling the calc function that will do all the working
    currentOperation.innerHTML = calc(
      theNum.innerHTML,
      theOperation.innerHTML,
      currentOperation.innerHTML
    );
    // reset the previous operation's innerHTML
    previousOperation.innerHTML = "";
  }
});

// select the delete elements
let deleteElements = document.querySelectorAll("[data-delete]");
// loop over them
deleteElements.forEach((deleteElement) => {
  // add an event listener
  deleteElement.addEventListener("click", function () {
    // if the clicked element is [del]
    if (deleteElement.dataset.delete === "del") {
      // remove the last char in the stirng of the current operation's innerHTML
      currentOperation.innerHTML = currentOperation.innerHTML.slice(0, -1);
      // if the clicked element is [reset]
    } else if (deleteElement.dataset.delete === "reset") {
      // reset the current operation's innerHTML
      currentOperation.innerHTML = "";
      // reset the previous operation's innerHTML
      previousOperation.innerHTML = "";
    }
  });
});

// make a function that will take two numbers and an operation and will return to you the result
function calc(num1, operation, num2) {
  // convert the nums to nums if they had been passed in strings
  num1 = Number(num1);
  num2 = Number(num2);
  let result;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  }
  return result;
}
