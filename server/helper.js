export function calculateScore(userSat, sat25th, sat75th) {
    if (userSat < sat25th) {
        // Low base score for SAT below the 25th percentile
        return 20 + (userSat - sat25th) / 10;
    } else if (sat25th <= userSat && userSat <= sat75th) {
        // Variable score for SAT within the range
        return 20 + 60 * (userSat - sat25th) / (sat75th - sat25th);
    } else {
        // High base score for SAT above the 75th percentile
        return 80 - (userSat - sat75th) / 10;
    }
}

export function combinedScore(userSatVerbal, userSatMath, university) {
    const userSat = (userSatVerbal + userSatMath) / 2;

    const readingScore = calculateScore(userSat, university.satReading25th, university.satReading75th);
    const writingScore = calculateScore(userSat, university.satWriting25th, university.satWriting75th);

    const combinedScore = (readingScore + writingScore) / 2;
    return Math.max(5, Math.min(combinedScore, 85));
}
