    // find the average;

// function findAverage(score){
//     let sum = 0;
//     for(let i = 0; i<score.length;i++) {
//         sum += score[i];
//     }
//     return sum/score.length;
// }
// console.log(findAverage([20,30,40,50,60]));

function getGrade(score) {
    if(score==100){
        return "A++";
    } else if(score>=90){
        return "A";
    } else if(score>=80){
        return "B";
    } else if(score>=70){
        return "C";
    } else if(score>=60){
        return "D";
    } else {
        return "F";
    }
}
function hasPassingGrade(score){
    return getGrade(score) !== "F";
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(90));
console.log(hasPassingGrade(80));
console.log(hasPassingGrade(70));
console.log(hasPassingGrade(60));
console.log(hasPassingGrade(40));