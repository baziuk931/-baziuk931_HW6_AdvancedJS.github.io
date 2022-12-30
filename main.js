//create array

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];


//getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]

function getSubjects(name) {
    for (let iterator of students) {
        if (iterator.name === name) {
            const subjectValue = Object.keys(iterator.subjects);
            const subjectModified = subjectValue.map((item) => {
                const itemCorrected = item.replace('_', ' ');
                return itemCorrected.charAt(0).toUpperCase() + itemCorrected.slice(1);
            });

            return name + "=>" + subjectModified;
        }
    }
}
console.log(getSubjects("Tanya"));
document.writeln(`Get subjects for Student: <b>${getSubjects("Tanya")}</b><br>`);

//getAverageMark(students[0]) --> 3.79

function getAverageMark(name) {
    for (const iterator of students) {
        if (iterator.name === name) {
            const subjects = Object.values(iterator.subjects);
            let sum = 0;
            let counter = 0;

            for (const key of subjects) {
                const marksSum = Object.values(key).reduce((a, i) => a + i, 0);
                sum = sum + marksSum;

                const marksCount = Object.values(key).reduce((a) => a + 1, 0);
                counter = counter + marksCount;
            }

            const averageMark = (sum / counter).toFixed(2);
            return averageMark;
        }
    }
}

console.log(getAverageMark("Tanya"));
document.writeln(`Get average mark for Student: <b>${getAverageMark("Tanya")}</b><br>`);

//getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}

function getStudentInfo(name) {

    for (let iterator of students) {
        if (iterator.name === name) {
            let studentInfo = {
                course: iterator.course,
                name: name,
                averageMark: getAverageMark(name)
            }
            return studentInfo;
        }
    }
}

console.log(getStudentInfo("Tanya"));
document.writeln(`Get Student info: <b>${JSON.stringify(getStudentInfo("Tanya"))}</b><br>`);

//getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]

function getStudentsNames() {
    const arr = [];
    for (const iterator of students) {
        arr.push(iterator.name)
    }
    return arr.sort();

}
console.log(getStudentsNames());
document.writeln(`Sorted students names: <b>${JSON.stringify(getStudentsNames())}</b><br>`);


//getBestStudent(students) --> "Anton"


function getBestStudent() {
    let highestMark = 0;
    let bestStudent = '';

    for (const item of students) {
        if (getAverageMark(item.name) > highestMark) {
            highestMark = getAverageMark(item.name);
            bestStudent = item.name;
        }
    }
    return bestStudent;
}
console.log(getBestStudent());
document.writeln(`Best Student: <b>${getBestStudent()}</b><br>`);

//calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }

function calculateWordLetters(text) {
    const calcLettersObj = {};

    for (let i = 0; i < text.length; i++) {

        let counter = text.split('').map((e, index) => {
            if (e === text[i])
                return index;
        })
            .filter((i) => {
                return i != undefined;
            })
            .length;

        let key1 = text.charAt(i);
        calcLettersObj[key1] = counter;
    }
    return calcLettersObj;
}
console.log(calculateWordLetters("test"));
document.writeln(`Calculate letters in word  : <b>${JSON.stringify(calculateWordLetters("test"))}</b><br>`);


