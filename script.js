function collatz(n) {
    const sequence = [n];
    let peak = n;
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
        sequence.push(n);
        if (n > peak) {
            peak = n;
        }
    }
    return { sequence, peak };
}

function collatzRange(num) {
    let maxSteps = 0;
    let maxStepsNum = 0;
    let maxPeak = 0;
    let maxPeakNum = 0;
    for (let i = 1; i <= num; i++) {
        const { sequence, peak } = collatz(i);
        if (sequence.length > maxSteps) {
            maxSteps = sequence.length;
            maxStepsNum = i;
        }
        if (peak > maxPeak) {
            maxPeak = peak;
            maxPeakNum = i;
        }
    }
    console.log(`Number ${maxStepsNum} took ${maxSteps} steps to reach 1.`);
    console.log(`Number ${maxPeakNum} had the highest peak value of ${maxPeak}.`);
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const numberInput = document.getElementById('number');

    submitButton.addEventListener('click', function () {
        const inputNumber = parseInt(numberInput.value);
        if (inputNumber >= 1) {
            collatzRange(inputNumber);
        } else {
            alert('Please enter a positive number greater than or equal to 1.');
        }
    });
});
