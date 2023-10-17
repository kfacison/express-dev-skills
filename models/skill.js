const skills = ["juggling", "knife thowing", "card tricks", "tight rope", "beast taming"];

function  getAll(){
    return skills;
}

function skillAt(idx){
    return skills[idx];
}

module.exports = {
    skills, getAll, skillAt
};