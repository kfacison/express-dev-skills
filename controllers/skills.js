const Skill = require('../models/skill');

module.exports = {
    index, show, create, edit, update,
    new: newSkill,
    delete: deleteSkill
};

function index(req, res){
    res.render('skills/index.ejs', {
    skills: Skill.getAll()
    });
}

function show(req, res){
    res.render('skills/show.ejs',{
        skill: Skill.skillAt(req.params.idx),
        idx: req.params.idx
    });
}

function newSkill(req, res){
    res.render('skills/new');
}

function create(req, res){
    Skill.addSkill(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res){
    Skill.rmSkill(req.params.idx);
    res.redirect('/skills')
}

function edit(req, res){
    res.render('skills/edit', {
        skill: Skill.skillAt(req.params.idx),
        idx: req.params.idx
    });
}

function update(req, res){
    console.log(req.body)
    Skill.update(req.params.idx, req.body.skill);
    res.redirect(`${req.params.idx}`);
}