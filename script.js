// About
function openNav1() {
  document.getElementById("aboutNav").style.width = "100%";
}
function closeNav1() {
  document.getElementById("aboutNav").style.width = "0%";
}
let htmlWidth = "80%";
let cssWidth = "70%";
let jsWidth = "75%";
let reactWidth = "55%";
let jqueryWidth = "40%";

function showBar(a){
  switch(a){
    case "HTML":
      document.getElementById("myBar"+a).style.width = htmlWidth;
      break;
    case "CSS":
      document.getElementById("myBar"+a).style.width = cssWidth;
      break;
    case "JS":
      document.getElementById("myBar"+a).style.width = jsWidth;
      break;
    case "REACT":
      document.getElementById("myBar"+a).style.width = reactWidth;
      break;
    case "JQUERY":
      document.getElementById("myBar"+a).style.width = jqueryWidth;
      break;
  }
  document.getElementById("myProgress"+a).style.display = "block";
}
function hideBar(a){
  document.getElementById("myProgress"+a).style.display = "none";
}

//info
let html = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
let css = "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content."
let js = "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it."
let react = "React (also known as React.js or ReactJS) is a JavaScript library[3] for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API: Redux, React Router and axios are examples of such libraries."
let jquery = "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having 3 to 4 times more usage than any other JavaScript library."
function showInfo(a){
  if(a === "html"){
    document.getElementById("info").innerHTML = html;
  }
  else if(a === "css"){
    document.getElementById("info").innerHTML = css;
  }  
  else if(a === "js"){
    document.getElementById("info").innerHTML = js;
  }  
  else if(a === "react"){
    document.getElementById("info").innerHTML = react;
  }  
  else if(a === "jquery"){
    document.getElementById("info").innerHTML = jquery;
  }  
}
function hideInfo(){
  document.getElementById("info").innerHTML = " ";
}
// Projects
function openNav2() {
  document.getElementById("projectsNav").style.width = "100%";
}
function closeNav2() {
  document.getElementById("projectsNav").style.width = "0%";
}

// Contact
function openNav3() {
  document.getElementById("contactNav").style.width = "100%";
}
function closeNav3() {
  document.getElementById("contactNav").style.width = "0%";
}

// Typewriter
let i = 0;
let txt = "I'm Zhora Harutyunyan.I build and design User Interfaces";
let speed = 50;
window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
