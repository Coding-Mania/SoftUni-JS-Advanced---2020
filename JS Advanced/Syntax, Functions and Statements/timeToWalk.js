function solve(steps, stepLength, speed) {

    let distance = steps * stepLength;
    let breakTime = Math.floor(distance / 500) * 60;
    let time = Math.round(distance / speed * 3.6 + breakTime);
    let sec = time % 60;
    let min = ((time - sec) / 60) % 60;
    let hour = ((time - sec - min * 60) / 60) % 60;

    console.log(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
}