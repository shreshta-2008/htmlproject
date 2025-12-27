const courses = [
  { name: "Problem Solving Through Programming - Java", teacher: "Dr. Ramesh", time: "Mon 09" },
  { name: "Discrete Mathematics", teacher: "Prof. Anitha", time: "Tue 10" },
  { name: "Language Skills for Engineers", teacher: "Ms. Kavya", time: "Wed 11" },
  { name: "DTI", teacher: "Mr. Suresh", time: "Thu 09" },
  { name: "Web Development", teacher: "Ms. Priya", time: "Fri 10" }
];

let registered = JSON.parse(localStorage.getItem("registeredCourses")) || [];

rollInfo.textContent = "Roll No: " + localStorage.getItem("studentRoll");

function render() {
  courseList.innerHTML = "";
  courses.forEach(c => {
    courseList.innerHTML += `
      <div class="course">
        <b>${c.name}</b><br>
        👨‍🏫 ${c.teacher}<br>
        ⏰ ${c.time}
        <button onclick="register('${c.name}')">Register</button>
      </div>
    `;
  });
}

function register(name) {
  const course = courses.find(c => c.name === name);
  if (registered.some(r => r.time === course.time)) {
    alert("Schedule Conflict");
    return;
  }
  registered.push(course);
  localStorage.setItem("registeredCourses", JSON.stringify(registered));
  alert("Registered Successfully");
}

function showTimetable() {
  location.href = "timetable.html";
}

render();
