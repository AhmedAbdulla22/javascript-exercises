const fibonacci = function(memberAt) {
    if(typeof(memberAt) === "string") {
        memberAt = parseInt(memberAt);
    }
    if(memberAt < 0) {
        return "OOPS";
    }
    else if(memberAt === 1 || memberAt === 2) {
        return 1;
    }

    let fibonacci = [1,1];
    let member = 0;
    for (let i = 2; i < memberAt; i++) {
        member = fibonacci[i-2] + fibonacci[i-1]; //sum of last two
        if(memberAt === i+1) {
            break;
        } else {
            fibonacci.push(member);
        }
    } 

    return member;
};
//(1, 1, 2, 3)
// Do not edit below this line
module.exports = fibonacci;
