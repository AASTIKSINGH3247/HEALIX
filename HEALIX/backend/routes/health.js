// public/js/health.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('healthForm');
  const resultBox = document.getElementById('resultBox');
  const pulseInput = document.getElementById('pulse');
  const heartRateInput = document.getElementById('heartRate');
  const bpInput = document.getElementById('bloodPressure');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const heartRate = parseInt(heartRateInput.value);
    const pulse = parseInt(pulseInput.value);
    const bloodPressure = bpInput.value.trim();
    const healthScore = calculateHealthScore(heartRate, pulse, bloodPressure);

    const userId = localStorage.getItem('userId');
    const date = new Date().toISOString().slice(0, 10);

    const data = {
      userId,
      heartRate,
      pulse,
      bloodPressure,
      healthScore,
      date
    };

    try {
      const res = await fetch('/api/health/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      displayResult(healthScore);
    } catch (err) {
      console.error('Error submitting health data:', err);
    }
  });

  function calculateHealthScore(hr, pulse, bp) {
    let score = 100;
    if (hr < 60 || hr > 100) score -= 20;
    if (pulse < 60 || pulse > 100) score -= 20;

    const [systolic, diastolic] = bp.split('/').map(Number);
    if (systolic < 90 || systolic > 140 || diastolic < 60 || diastolic > 90) score -= 20;

    return Math.max(score, 0);
  }

  function displayResult(score) {
    resultBox.innerHTML = `<div class="result-card">
      <h3>Health Score: ${score}</h3>
      <p>${getHealthMessage(score)}</p>
    </div>`;
  }

  function getHealthMessage(score) {
    if (score >= 80) return 'Excellent! Keep up the good work!';
    if (score >= 60) return 'Good. Maintain your current habits.';
    if (score >= 40) return 'Moderate. Try to improve your health.';
    return 'Poor. Consult a doctor for guidance.';
  }
});