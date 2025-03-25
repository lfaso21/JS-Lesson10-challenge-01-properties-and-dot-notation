const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Learning Java",
  "Understanding Properties",
  "Writing Code",
  "Building Websites",
];
learning.catagories = "Front End Development";
learning.topicImportance = "High";
console.log(learning);
learning.topic = "JavaScript";
console.log(learning);

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
