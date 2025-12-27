const teachers = {
  T101: { name: "Dr. Ramesh", pass: "java123" },
  T102: { name: "Prof. Anitha", pass: "math123" },
  T103: { name: "Ms. Kavya", pass: "eng123" },
  T104: { name: "Mr. Suresh", pass: "dti123" },
  T105: { name: "Ms. Priya", pass: "web123" }
};

function login() {
  const r = role.value;
  const id = userId.value.trim();
  const p = password.value;

  if (r === "student") {
    if (!id) return alert("Enter Roll Number");
    localStorage.setItem("studentRoll", id);
    location.href = "student.html";
  }

  if (r === "teacher") {
    if (!teachers[id] || teachers[id].pass !== p) {
      alert("Invalid Teacher Credentials");
      return;
    }
    localStorage.setItem("teacherName", teachers[id].name);
    location.href = "teacher.html";
  }
}
