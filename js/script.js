let selectedGender = '';

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('male').classList.remove('selected');
    document.getElementById('female').classList.remove('selected');
    document.getElementById(gender).classList.add('selected');
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters

    if (selectedGender === '') {
        alert('Mohon pilih jenis kelamin Anda.');
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert('Mohon masukkan berat badan yang valid.');
        return;
    }

    if (isNaN(height) || height <= 0) {
        alert('Mohon masukkan tinggi badan yang valid.');
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Kurus';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Gemuk';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('result').innerText = `Hasil BMI: ${bmi.toFixed(2)} (${category})`;
}
