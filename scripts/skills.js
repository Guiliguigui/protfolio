const competences = {
  "C#": 80,
  "Visual Studio": 60,
  "WPF": 40,
  "ASP.NET CORE": 40,
  "EntityFrameWork Core C#": 20,
  "API REST et WebService": 20,
  "Blazor": 10,
  "Xamarin": 10,
  "Azure": 10,
  "Python": 40,
  "Java": 30,
  "C++": 20,
  "C": 10,
  "JavaScript": 50,
  "HTML": 70,
  "CSS": 40,
  "AngularJS": 10,
  "jQuery": 30,
  "Méthodes Agiles": 10,
  "Gestion de Projet": 10,
  "SQL Server": 60,
  "MySQL": 30,
  "SQLite3": 30,
  "Anglais": 80,
  "Espagnol": 30,
  "Mathématiques": 60
}


$(document).ready(function () {
  $("#skillSearch").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#skillList div").filter(function () {
      $(this).toggle($(this).children().text().toLowerCase().indexOf(value) > -1)
      $(this).children().toggle($(this).children().text().toLowerCase().indexOf(value) > -1)
    });
  });

  $.each(competences, function (key, val) {
    $("#skillList").append(`
                    <div>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                          <span class="flex-shrink-0">${key}</span>
                          <span class="flex-grow-1 progress" style="max-width: 25%;">
                              <span class="progress-bar bg-dark" role="progressbar" style="width: ${val}%"
                                  aria-valuenow="${val}" aria-valuemin="0" aria-valuemax="100"></span>
                          </span>
                      </li>
                    </div>
    ` );
  });
});