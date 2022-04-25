let  students = {
    js: [{
    name: 'John',
    progress: 100
    },{
    name: 'Ivan',
    progress: 60
}],

html: {
    basic: [{
    name: 'Peter',
    progress: 20
    }, 
    {
    name: 'Ann',
    progress: 18
    }],

    pro: [{
    name: 'Sam',
    progress: 10
}],
 newItem: {
    name: 'Ann',
    progress: 18
 },
}
}


function  getProgressRecor(data) {
    if(Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        } 
        // console.log(data)
        // console.log(`${total} - число`)
        return [total, data.length]
    } 
    else {
        let total = [0,0];

        for (let SubData of Object.values(data)) {
            const SubDataArr = getProgressRecor(SubData); 
            total[0] += SubDataArr[0];
            total[1] += SubDataArr[1];
        }
        return total;
    }
}

const result = getProgressRecor(students);

console.log(result[0]/result[1])

getProgressRecor(students)


// console.log(Object.values(students))
// console.log(students)


// function getProgress(data) {
//     let total = 0;
//     let students = 0;

//     for(let course of Object.values(data)) {
//         if(Array.isArray(course)) {
//             students += course.length;
//             console.log(`${students} - студенты`)

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//                 console.log(`${total} - число`)

//             } 
//         } else {
//                 for(let subCouse of Object.values(course)) {
//                     students += subCouse.length;
//                     console.log(`${students} - студенты2`)

//                 for (let i = 0; i < subCouse.length; i++) {
//                     total += subCouse[i].progress;
//                     console.log(`${total} - число2`)

//                 } 
                    
//         }
//      }
//     }
//     return total / students;
// };

// console.log(getProgress(students));



