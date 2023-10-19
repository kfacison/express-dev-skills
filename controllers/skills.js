const Skill = require('../models/skill');

module.exports = {
    index, show, create,
    new: newSkill
};

function index(req, res){
    res.render('skills/index.ejs', {
    skills: Skill.getAll()
    });
}

function show(req, res){
    //console.log(req.params.idx)
    res.render('skills/show.ejs',{
        skill: Skill.skillAt(req.params.idx)
    });
}

function newSkill(req, res){
    res.render('skills/new');
}

function create(req, res){
    Skill.addSkill(req.body);
    res.redirect('/skills');
}