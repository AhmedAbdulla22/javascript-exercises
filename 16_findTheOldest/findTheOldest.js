function getAge(birth,death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
    
}

const findTheOldest = function(persons) {
    return persons.reduce((oldest,currentPerson) => {
        const currentPersonAge = getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        const oldestPersonAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);

        return (currentPersonAge > oldestPersonAge) ? currentPerson:oldest;
    }); 
};

// Do not edit below this line
module.exports = findTheOldest;
