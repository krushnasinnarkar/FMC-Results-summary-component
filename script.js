const fetchScoresData = async () => {
    try {
        const response = await fetch("./data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const renderScores = async () => {
    const scoresData = await fetchScoresData();
    const container = document.getElementById('score-container');

    if (scoresData) {
        scoresData.forEach(score => {
            const row = document.createElement('div');
            row.classList.add('row');

            const badge = document.createElement('div');
            badge.classList.add('badge');

            const icon = document.createElement('img');
            icon.src = score.icon;
            icon.alt = `icon for ${score.category}`;

            const category = document.createElement('b');
            category.textContent = score.category;

            badge.appendChild(icon);
            badge.appendChild(category);

            const scoreText = document.createElement('p');
            scoreText.innerHTML = `<b>${score.score}</b> / 100`;

            row.appendChild(badge);
            row.appendChild(scoreText);

            container.appendChild(row);
        });
    }
};

document.addEventListener('DOMContentLoaded', renderScores);
