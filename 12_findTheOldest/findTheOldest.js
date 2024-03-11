const findTheOldest = function(array) {
    return array.reduce((oldest, cur) => {
        const temp = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
       const age = getAge(cur.yearOfBirth, cur.yearOfDeath);
       return age > temp ? cur : oldest;
    });
};

function getAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}


// Do not edit below this line
module.exports = findTheOldest;
