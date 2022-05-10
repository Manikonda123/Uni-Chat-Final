
$(function() {
    
    const url = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=75FxQanLjcWvktBhObDWhVVEqtEP6nloZQWofTYE&latest.admissions.admission_rate.overall__range=0.01..0.2&latest.school.degrees_awarded.predominant=3&fields=id,school.name&per_page=60';

    fetch(url)
    .then(response => response.json())
    .then(topList => displaySchools(topList.results));
    
    function displaySchools(info) {
        let schools= "";

        for (let i in info) {
            schools += info[i]["school.name"];
            document.getElementById('topSchools').innerText += info[i]["school.name"];
            document.getElementById('topSchools').innerHTML += "<br>";
        }
        console.log(schools);
        $("#topSchools").innerText = schools;
    }


    
});

function applySettings() {
    var settings_data = [
        {"private": privateSchools},
        {"religious": religiousSchools},
        {"elite": eliteSchools}
    ]

    $.ajax({
        type: "POST",
        url: "/filters",
        data: JSON.stringify(settings_data),
        contentType: "application/json",
        dataType: 'json' 
    });
}
