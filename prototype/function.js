function loginFunction(email, password) {
  alert("Email: " + email + "\nHasło: " + password);
}

function registerFunction(email, password, confirmPassword, accept) {
  alert(
    "Email: " +
      email +
      "\nHasło: " +
      password +
      "\nPowtórzone hasło: " +
      confirmPassword +
      "\n" +
      accept
  );
}

function resetPassword_Function(email) {
  alert("Zmiana hasła wysłana na : " + email);
}

const data = [
  { name: "Noster", date: "14/11", From: 18, To: 20, place: "Puszkina" },
  { name: "Silversite", date: "14/11", From: 17, To: 19, place: "Moniuszki" },
];

function addReservation(newName, newDate, newFrom, newTo, newPlace) {
  data.push({
    name: newName,
    date: newDate,
    From: newFrom,
    To: newTo,
    place: newPlace,
  });
  alert(
    "Dodano: Drużynę" +
      newName +
      " dnia: " +
      newDate +
      " od godziny: " +
      newFrom +
      " do godziny: " +
      newTo +
      "w miejscu: " +
      newPlace
  );
  createTable();
}

function createTable() {
  let html = "<table >";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>" + "<b>Nazwa drużyny </b>" + "</td>";
    html += "<td>" + "<b>Data</b>" + "</td>";
    html += "<td>" + "<b>Od</b>" + "</td>";
    html += "<td>" + "<b>Do</b>" + "</td>";
    html += "<td>" + "<b>Miejsce</b>" + "</td>";
    html += "</tr>";
    html += "</thead>";
    for (var i = 0; i < data.length; i++) {
      html += "<tr>";
      html += "<td>" + data[i].name + "</td>";
      html += "<td>" + data[i].date + "</td>";
      html += "<td>" + data[i].From + "</td>";
      html += "<td>" + data[i].To + "</td>";
      html += "<td>" + data[i].place + "</td>";
      html += "</tr>";
    }
    document.getElementById("table").innerHTML = html;
  }, 500);
}
createTable();
