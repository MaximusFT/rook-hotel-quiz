// Quiz 3 ver 2 shorten version
function quizVerThreeV2(recipe) {
  const SPANISH_FUDGE = 2;
  const FRENCH_FUDGE = 3;
  const ENGLISH_FUDGE = 4;

  const fudgeList = {
    SPANISH: SPANISH_FUDGE,
    FRENCH: FRENCH_FUDGE,
    ENGLISH: ENGLISH_FUDGE,
  };

  let fudge;
  let amt;
  let sugar;
  let chocolate;
  let base = 2;
  const top = (i) => i * 1.25;
  const bottom = (i) => i * 1.25;

  fudge = fudgeList[recipe] || 1;
  if (recipe === 'FRENCH') {
    chocolate = 7;
  }
  amt = base * fudge;
  sugar = 2 * bottom(amt) + top(amt) * 1.17;

  return [
    `fudge: ${fudge}`,
    `amt: ${amt}`,
    `sugar: ${sugar}`,
    `chocolate: ${chocolate}`,
  ];
}

// Quiz 3 ver 1
function quizVerThreeV1(recipe) {
  const SPANISH_FUDGE = 2;
  const FRENCH_FUDGE = 3;
  const ENGLISH_FUDGE = 4;
  let fudge;
  let amt;
  let sugar;
  let chocolate;
  let base = 2;
  const top = (i) => i * 1.25;
  const bottom = (i) => i * 1.25;

  switch (recipe) {
    case 'SPANISH':
      fudge = SPANISH_FUDGE;
      break;
    case 'FRENCH':
      chocolate = 7;
      fudge = FRENCH_FUDGE;
      break;
    case 'ENGLISH':
      fudge = ENGLISH_FUDGE;
      break;
    default:
      fudge = 1;
      break;
  }
  amt = base * fudge;
  sugar = 2 * bottom(amt) + top(amt) * 1.17;

  return [
    `fudge: ${fudge}`,
    `amt: ${amt}`,
    `sugar: ${sugar}`,
    `chocolate: ${chocolate}`,
  ];
}

console.log('3 v1', 'SPANISH', quizVerThreeV1('SPANISH'));
console.log('3 v1', 'FRENCH', quizVerThreeV1('FRENCH'));
console.log('3 v1', 'ENGLISH', quizVerThreeV1('ENGLISH'));
console.log('3 v1', 'UKRAINE', quizVerThreeV1('UKRAINE'));

console.log('3 v2', 'SPANISH', quizVerThreeV2('SPANISH'));
console.log('3 v2', 'FRENCH', quizVerThreeV2('FRENCH'));
console.log('3 v2', 'ENGLISH', quizVerThreeV2('ENGLISH'));
console.log('3 v2', 'UKRAINE', quizVerThreeV2('UKRAINE'));
