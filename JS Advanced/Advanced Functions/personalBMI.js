function solve(name, age, weight, height) {

    let BMI = Math.round(weight / (height / 100) ** 2);
    let status = BMI < 18.5 ? 'underweight' : BMI < 25 ? 'normal' : BMI < 30 ? 'overweight' : 'obese';


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
        Object.defineProperty(personInfo, 'recommendation', { value: 'admission required', enumerable: true });
    }

    return personInfo;
}
