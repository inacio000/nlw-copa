function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="accets/icon-${player1}.svg" alt="${player1} Flag">
      <strong>${hour}</strong>
      <img src="accets/icon-${player2}.svg" alt="${2} Flag">
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="accets/logo.svg" alt="nlw logo">
  </header>

  <main id="cards">
    ${createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia'))}
    ${createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland'))}
    ${createCard('02/12', 'sexta', createGame('cameroon', '16:00', 'brazil'))}
  </main>
`