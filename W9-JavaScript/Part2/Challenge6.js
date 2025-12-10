function voteEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
}

// Example usage:
console.log(voteEligibility(20)); // Output: You are eligible to vote.
console.log(voteEligibility(16)); // Output: You are not eligible to vote.
console.log(voteEligibility(18)); // Output: You are eligible to vote.
function countVotes(votesArray) {
    let eligibleCount = 0;
    let ineligibleCount = 0;    
    for (let i = 0; i < votesArray.length; i++) {
        if (votesArray[i] >= 18) {
            eligibleCount++;
        } else {
            ineligibleCount++;
        }
    }
    return {
        eligible: eligibleCount,
        ineligible: ineligibleCount
    };
}
let votes = [16, 21, 18, 15, 30, 17, 22];
let result = countVotes(votes);
console.log(`Eligible voters: ${result.eligible}`);
console.log(`Ineligible voters: ${result.ineligible}`);