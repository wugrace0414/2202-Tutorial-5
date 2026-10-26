///////////////////////////////////////////////////////
//////////////varAndScope//////////////////////////////
///////////////////////////////////////////////////////

function summarizeGrades(assignments) {
// Parameter: assignments is an array of objects containing each
// assignment's id, grade, and number of days late.

  let totalGrade = 0;
  const count = assignments.length;
  const LATE_PENALTY_PER_DAY = 20;

  // Declare assignment outside the loop because it is
  // used again after the loop.
  let assignment;

  for (let i = 0; i < count; i++) {
    assignment = assignments[i];
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      const latePenalty =
        assignment.daysLate * LATE_PENALTY_PER_DAY;

      // The minimum grade allowed is 0.
      grade = grade - latePenalty >= 0
        ? grade - latePenalty
        : 0;
    }

    totalGrade += grade;
  }

  const lastGradedAssignment = assignment;

// Return an object containing the average grade and the ID
// of the last assignment processed.
  return {
    average: totalGrade / count,
    lastGraded: lastGradedAssignment.id
  };
}

// Example test
const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0 },
  { id: "9876", grade: 30, daysLate: 2 }
];

console.log(summarizeGrades(assignments));


///////////////////////////////////////////////////////
///////////////////closures////////////////////////////
///////////////////////////////////////////////////////


let letterCounter = function (letter, ignoreCapitalization) {
// Parameters: letter is the character to count.

    let targetLetter;

    //ignoreCapitalization determines whether uppercase and
    // lowercase versions of the character should count as matches.    

    if (ignoreCapitalization) {
        targetLetter = letter.toLowerCase();
    } else {
        targetLetter = letter;
    }

    // Return a function that takes a word and counts occurences
    // of targetLetter.
    return function (word) {
        // Parameter: word is the string to search through.
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            let currentLetter = word[i];

            if (ignoreCapitalization) {
                currentLetter = currentLetter.toLowerCase();
            }

            if (currentLetter === targetLetter) {
                count++;
            }
        }

        return count;
    };
};


function makeCharacter(characterName) {
    // Parameter: characterName is the name of the character to create.
    let farmingSkill = 0;
    let fishingSkill = 0;

    // Increase the requested skill by one, up to a maximum of 10.
    // Parameter: skill must be exactly "farming" or "fishing".
    let levelUp = function (skill) {
        if (skill === "farming" && farmingSkill < 10) {
            farmingSkill++;
        } else if (skill === "fishing" && fishingSkill < 10) {
            fishingSkill++;
        }
    };

    // Return the current value of the requested skill.
    // Parameter: skill must be exactly "farming" or "fishing".
    let showSkill = function (skill) {
        if (skill === "farming") {
            return farmingSkill;
        } else if (skill === "fishing") {
            return fishingSkill;
        }
    };

    // Return an object exposing the character's name and methods.
    return {
        name: characterName,
        levelUp,
        showSkill
    };
};
