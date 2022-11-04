function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="accets/Bandeiras-dos-países/icon=${player1}.svg" alt="${player1} Flag">
      <strong>${hour}</strong>
      <img src="accets/Bandeiras-dos-países/icon=${player2}.svg" alt="${2} Flag">
    </li>
  `
}

function createCard(date, day, group, games) {
  return `
    <div class="card">
      <h2>${date}<span>${day} (Grupo ${group})</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("20/11", "Domingo", 'a', createGame("qatar", "19:00", "ecuador")) +
    createCard(
      "21/11",
      "segunda", 'b & a',
      createGame("england", "16:00", "iran") +
        createGame("senegal", "19:00", "netherlands")
    ) +
    createCard("21/11", "Segunda", 'B', createGame("united-states", "16:00", "wales"))
