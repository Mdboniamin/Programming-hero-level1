const numbers = [1, 2, 3, 4, 5, 6];
const tournament_runs = [[], [], []];
const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 86, 23, 11],
    [45, 82, 23, 32, 64],
    [883, 23, 5, 2, 5]
]
console.log(exam_marks[0][0]);
exam_marks[0].pop();
for (const marks of exam_marks) {
    console.log(marks)
}
console.log(exam_marks)