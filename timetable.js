const registered = JSON.parse(localStorage.getItem("registeredCourses")) || [];

registered.forEach(c => {
  const cell = document.getElementById(c.time.replace(" ", ""));
  if (cell) cell.textContent = c.name;
});

function goBack() {
  location.href = "student.html";
}
