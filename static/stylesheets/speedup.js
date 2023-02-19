document.getElementById("calcbtn").addEventListener('click', e => {
    if (e.target.matches('button')) {
        calcSpeedUps();
    }
})

function calcSpeedUps() {
    var minutes_arr = [
        getInput("su1min"),
        getInput("su3min") * 3,
        getInput("su5min") * 5,
        getInput("su10min") * 10,
        getInput("su15min") * 15,
        getInput("su30min") * 30,
        getInput("su60min") * 60,
        getInput("su3h") * 3 * 60,
        getInput("su8h") * 8 * 60,
        getInput("su15h") * 15 * 60,
        getInput("su24h") * 24 * 60,
        getInput("su3d") * 3 * 24 * 60,
        getInput("su7d") * 7 * 24 * 60,
        getInput("su30d") * 30 * 24 * 60
    ];

    var totalminutes = minutes_arr.reduce((partialSum, a) => partialSum + a, 0);

    var days = Math.floor(totalminutes / (24 * 60));
    totalminutes = totalminutes - days * 24 * 60;
    var hours = Math.floor(totalminutes / 60);
    totalminutes = totalminutes - hours * 60;

    var result = "<p><b>Total time</b></p>";
    if (days > 0) {
        result = result + "<p>" + days + " days" + "</p>";
    }
    if (hours > 0) {
        result = result + "<p>" + hours + " hours" + "</p>";
    }
    if (totalminutes > 0) {
        result = result + "<p>" + totalminutes + " minutes" + "</p>";
    }

    var resultbox = document.getElementById("resultsPanel");
    resultbox.innerHTML = result;
}

function getInput(field) {
    var value = parseInt(document.getElementById(field).value);
    if (isNaN(value))
        return 0;
    else if (value < 0)
        return 0;
    else return value;
}