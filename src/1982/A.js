﻿module.exports = {
  isItPossibleToMeetRequirements: (score1, score2) =>
    (score1[0] - score1[1]) * (score2[0] - score2[1]) > 0 ? 'YES' : 'NO',
};
