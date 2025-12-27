const teacher = localStorage.getItem("teacherName");
teacherInfo.textContent = "Welcome, " + teacher;

const subjects = {
  "Dr. Ramesh": ["Problem Solving Through Programming - Java"],
  "Prof. Anitha": ["Discrete Mathematics"],
  "Ms. Kavya": ["Language Skills for Engineers"],
  "Mr. Suresh": ["DTI"],
  "Ms. Priya": ["Web Development"]
};

subjects[teacher].forEach(s => {
  mySubjects.innerHTML += `<div class="subject">${s}</div>`;
});
