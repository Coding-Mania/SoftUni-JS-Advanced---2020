function solve(name, age, weight, height) {

    let BMI =Math.round(weight / Math.pow((height / 100), 2));
    let status = BMI < 18.5 ?	'underweight' :  BMI < 25 ? 'normal' : BMI < 30 ? 'overweight' : 'obese';


    let personInfo = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI,
        status      
    }

    if (status === 'obese') {
        Object.defineProperty(personInfo, 'recommendation', {value: 'admission required', enumerable: true});
    }

    return personInfo;
}

console.log(solve('Honey Boo Bo', 9, 57, 137));