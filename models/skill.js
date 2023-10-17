const skills = ['juggling',
                'knife thowing',
                'card tricks',
                'tight rope',
                'beast taming'
                ];

module.exports = {
    getAll, skillAt
};

function getAll(){
    return skills;
}

function skillAt(idx){
    idx = parseInt(idx);
    return skills[idx];
}
