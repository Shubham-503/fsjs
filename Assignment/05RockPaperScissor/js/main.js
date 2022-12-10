let user = 0;
let comp = 0;
let choice = document.querySelectorAll(".choice");
let userResult = document.querySelector("#result-user-stat");
let compResult = document.querySelector("#result-comp-stat");
let winner = document.querySelector("#result-final-stat");

choice.forEach((c) => {
  c.addEventListener("click", (e) => calResult(e));
});

function calResult(e) {
  let userChoice = e.currentTarget.id;

  let rand = Math.floor(Math.random() * 3);
  let computerChoice;

  if (userChoice === "r") {
    userResult.innerHTML = `User: &nbsp &nbsp <div class="choice" id="r">
            <img src="Images/rock.png" alt="rock" />
            </div>`;
  } else if (userChoice === "p") {
    userResult.innerHTML = `User: &nbsp &nbsp <div class="choice" id="r">
            <img src="Images/paper.png" alt="rock" />
            </div>`;
  } else {
    userResult.innerHTML = `User: &nbsp &nbsp <div class="choice" id="s">
    <img src="Images/scissors.png" alt="scissors" />
  </div>`;
  }
  if (rand === 0) {
    computerChoice = "r";
    compResult.innerHTML = `Computer: &nbsp &nbsp <div class="choice" id="r">
<img src="Images/rock.png" alt="rock" />
</div>`;
  } else if (rand === 1) {
    computerChoice = "p";
    compResult.innerHTML = `Computer: &nbsp &nbsp
        <div class="choice" id="p">
        <img src="Images/paper.png" alt="paper" />
      </div>
        `;
  } else {
    computerChoice = "s";
    compResult.innerHTML = `Computer: &nbsp &nbsp <div class="choice" id="s">
    <img src="Images/scissors.png" alt="scissors" />
  </div>`;
  }

  if (userChoice === "r") {
    if (computerChoice === "p") {
      comp += 1;
      winner.innerHTML = "Winner: &nbsp &nbsp Computer";
    } else if (computerChoice === "s") {
      user += 1;
      winner.innerHTML = "Winner: &nbsp &nbsp User";
    }
  } else if (userChoice === "p") {
    if (computerChoice === "s") {
      comp += 1;
      winner.innerHTML = "Winner: &nbsp &nbsp Computer";
    } else if (computerChoice === "r") {
      user += 1;
      winner.innerHTML = "Winner: &nbsp &nbsp User";
    }
  } else if (userChoice === "s") {
    if (computerChoice === "r") {
      comp += 1;
      winner.innerHTML = "Winner: &nbsp &nbsp Computer";
    } else if (computerChoice === "p") {
      user += 1;
      winner.innerHTML = "Winner: &nbsp &nbsp User";
    }
  }

  let userScoreVal = document.querySelector("#userScoreVal");
  userScoreVal.innerHTML = user;
  let compScoreVal = document.querySelector("#compScoreVal");
  compScoreVal.innerHTML = comp;
  console.log(userChoice, ":", computerChoice);
  console.log(user, " : ", comp);
}
