//Non null assertion (!) expression
const body1 = document.querySelector("body");
if (body1) body1.style.color = "red";

const body2 = document.querySelector("body")!;
body2.style.color = "red";

//Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.color = "red";
