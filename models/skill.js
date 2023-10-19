const skills = 
    [
    'juggling',
    'knife thowing',
    'card tricks',
    'tight rope',
    'beast taming'
    ];

module.exports = {
    skills, getAll, skillAt, addSkill, rmSkill
};

function getAll(){
    return skills;
}

function skillAt(idx){
    idx = parseInt(idx);
    return skills[idx];
}

function addSkill(newSkill){
    skills.push(newSkill.skill);
}

function rmSkill(idx){
    skills.splice(idx,1);
}