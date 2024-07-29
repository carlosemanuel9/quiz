// Função para mostrar a próxima pergunta e esconder a atual
function nextQuestion(currentQuestionId, nextQuestionId) {
    const currentQuestion = document.getElementById(currentQuestionId);
    const nextQuestion = document.getElementById(nextQuestionId);
    
    if (validateAnswers(currentQuestionId)) {
        currentQuestion.classList.add('hidden');
        nextQuestion.classList.remove('hidden');
    } else {
        alert('Seleciona uma resposta tufão');
    }
}

// Função para validar se uma resposta foi selecionada
function validateAnswers(questionId) {
    const question = document.getElementById(questionId);
    const inputs = question.querySelectorAll('input[type="radio"]');
    
    return Array.from(inputs).some(input => input.checked);
}

// Função para calcular o resultado com base nas respostas
function calculateResult() {
    const color = getSelectedAnswer('color');
    const animal = getSelectedAnswer('animal');
    const season = getSelectedAnswer('season');
    const food = getSelectedAnswer('food');
    const hobby = getSelectedAnswer('hobby');
    
    let resultText = '';

    // Condições de resultado
    if (color === 'cr7' && animal === 'zero' && season === 'fut' && food === 'pal' && hobby === 'mid') {
        resultText = 'Você é o PAIN!!';
    } else if (color === 'messi' && animal === 'zero' && season === 'fut' && food === 'wesley' && hobby === 'bom') {
        resultText = 'Você é o WILL!!';
    } else if (color === 'messi' && animal === 'cinquenta' && season === 'vaquejada' && food === 'pal' && hobby === 'mid') {
        resultText = 'Você é o MAMÃO!!';
    } else if (color === 'cr7' && animal === 'zero' && season === 'vaquejada' && food === 'wesley' && hobby === 'bom') {
        resultText = 'Você é o BIEL!!';
    } else if (color === 'ney' && animal === 'cem' && season === 'fut' && food === 'wesley' && hobby === 'ruim') {
        resultText = 'Você é o BENEVI!!';
    } else {
        resultText = 'Você MENTIU!! volta e refaça';
    }
    
    // Mostrar resultado
    document.getElementById('question5').classList.add('hidden');
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    document.getElementById('result-text').textContent = resultText;
}

// Função para obter a resposta selecionada para uma pergunta
function getSelectedAnswer(name) {
    const selectedInput = document.querySelector(`input[name="${name}"]:checked`);
    return selectedInput ? selectedInput.value : '';
}