let subjects = JSON.parse(localStorage.getItem('subjects')) || {};

const sound = new Audio('https://www.fesliyanstudios.com/play-mp3/7012');

function calculateTotalScore() {
    let totalScore = 0;
    for (const score of Object.values(subjects)) {
        totalScore += score;
    }
    document.getElementById('total-score').textContent = totalScore;
}

function addSubject() {
    const subjectInput = document.getElementById('subject-input');
    const subjectName = subjectInput.value.trim();

    if (subjectName === '') {
        alert('Введите название предмета!');
        return;
    }

    if (subjects[subjectName]) {
        alert('Такой предмет уже существует!');
        return;
    }

    subjects[subjectName] = 0;
    localStorage.setItem('subjects', JSON.stringify(subjects));
    subjectInput.value = '';
    renderSubjects();
    calculateTotalScore();
}

function addSubjectFive(subject) {
    subjects[subject]++;
    localStorage.setItem('subjects', JSON.stringify(subjects));
    renderSubjects();
    calculateTotalScore();

    sound.currentTime = 0;
    sound.play();
}

function renderSubjects() {
    const subjectsBody = document.getElementById('subjects-body');
    subjectsBody.innerHTML = '';

    for (const [subject, score] of Object.entries(subjects)) {
        const row = document.createElement('tr');

        const subjectCell = document.createElement('td');
        subjectCell.textContent = subject;

        const scoreCell = document.createElement('td');
        scoreCell.textContent = score;

        const actionCell = document.createElement('td');
        const addButton = document.createElement('button');
        addButton.textContent = 'Добавить пятерку';
        addButton.onclick = () => addSubjectFive(subject);
        actionCell.appendChild(addButton);

        row.appendChild(subjectCell);
        row.appendChild(scoreCell);
        row.appendChild(actionCell);
        subjectsBody.appendChild(row);
    }
}

renderSubjects();
calculateTotalScore();
