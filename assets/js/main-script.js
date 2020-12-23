
function mapPowRegData() {
    let alcohol_percentages = document.getElementsByClassName('alcohol-percentage');
    let raw_readings = document.getElementsByClassName('raw-reading');
    let dataToMap = [];

    for (let i = 0, len = alcohol_percentages.length; i < len; i++) {
        dataToMap.push([
            parseFloat(raw_readings[i].value || 0),
            parseFloat(alcohol_percentages[i].value)
        ])
    }

    return dataToMap
}

function calculateAlcoholPercentage(){
    let calculation_raw = document.getElementById('calculation-raw').value;
    let calculation_result = document.getElementById('calculation-result');
    let data = mapPowRegData();
    let powReg = regression('power', data);
    let coefficient = parseFloat(powReg.equation[0]);
    let exponent = parseFloat(powReg.equation[1]);
    let alcohol_percentage = coefficient * (parseFloat(calculation_raw) ^ exponent);

    calculation_result.innerHTML = alcohol_percentage.toFixed(2);

    console.log(alcohol_percentage);
}