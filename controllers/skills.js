const Skill = require('../models/skill');

module.exports = {
    index, show
};

function index(req, res){
    res.render('skills/index', {
    skills: Skill.getAll()
    });
}

function show(req, res){
    //console.log(req.params.idx)
    res.render('skills/show',{
        skill: Skill.skillAt(req.params.idx)
    });
}