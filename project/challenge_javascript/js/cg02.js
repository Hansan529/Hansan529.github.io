// const title = document.querySelector("h1");

// function webResize() {
//title.classList.toggle("active");

/*  this === toggle
    const className = "active";
    
  if (title.classList.contains(className)) {
    title.classList.remove(className);
  } else {
    title.classList.add(className);
  }
 
}
 */
// title.addEventListener("click", webResize);

/* function half() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "purple";
  } else {
    newColor = "blue";
  }
  title.style.color = newColor;
}

window.addEventListener("resize", half);


function copywindow() {
  alert("복사를 했습니다!");
}

function offlineWindow() {
  alert("SOS no WIFI");
}

function onlineWindow() {
  alert("ALL GOOD");
}

window.addEventListener("copy", copywindow);
window.addEventListener("offline", offlineWindow);
window.addEventListener("online", onlineWindow);
*/

const text = document.querySelector("body");

function resizeViewport() {
  const viewportSize = window.innerWidth;

  if (viewportSize < 800) {
    text.classList.remove("half");
    //text.className = "";
  } else if (viewportSize > 800 && viewportSize < 1200) {
    text.classList.remove("pull");
    text.classList.add("half");
    //text.className = "half";
  } else if (viewportSize > 1200) {
    text.classList.remove("half");
    text.classList.add("pull");
    //text.className = "pull";
  }
}

window.addEventListener("resize", resizeViewport);
