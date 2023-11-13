function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let statusImagem = gameClicado.querySelector('.dashboard__item__img');
    let statusBotao = gameClicado.querySelector('.dashboard__item__button');

    if (statusImagem.classList.contains('dashboard__item__img--rented')) {
        statusImagem.classList.remove('dashboard__item__img--rented');
        statusBotao.classList.remove('dashboard__item__button--return');
        statusBotao.textContent = 'Alugar';
    } else {
        statusImagem.classList.add('dashboard__item__img--rented');
        statusBotao.classList.add('dashboard__item__button--return');
        statusBotao.textContent = 'Devolver';
    }
}