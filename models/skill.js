const skills = ['juggling',
                'knife thowing',
                'card tricks',
                'tight rope',
                'beast taming'
                ];

module.exports = {
    getAll
};

function getAll(){
    return skills;
}

function skillAt(idx){
    return skills[idx];
}
