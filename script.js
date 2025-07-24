function calculateLifePath(dob) {
  let digits = dob.replaceAll(/[^0-9]/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  const master = [11, 22, 33];

  while (sum > 9 && !master.includes(sum)) {
    sum = sum.toString().split('').reduce((a, b) => a + Number(b), 0);
  }

  return sum;
}

function getSoulRank(num) {
  if (num === 33) return "Ascended";
  if (num === 11 || num === 22) return "Guardian";
  return "Builder";
}

const gumroadLinks = {
  "Builder": "https://gumroad.com/l/soulrank-builder",
  "Guardian": "https://gumroad.com/l/soulrank-guardian",
  "Ascended": "https://gumroad.com/l/soulrank-ascended"
};

document.getElementById('revealBtn').onclick = function () {
  const dob = document.getElementById('dob').value;
  if (!dob) return alert("Please enter your date of birth.");

  const path = calculateLifePath(dob);
  const rank = getSoulRank(path);

  document.getElementById('result').innerHTML = `
    <h2>Your Life Path Number is <span class="number">${path}</span></h2>
    <h3>💠 SoulRank: <strong>${rank}</strong></h3>
    <p>Tap below to unlock your soul’s mission 🔓</p>
    <a href="${gumroadLinks[rank]}" class="unlock-btn">Unlock Report – from £3.33</a>
  `;
};
