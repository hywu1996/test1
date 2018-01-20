'use strict';
module.exports = function(app) {
 app.get('/', function(req, res) {
   res.render('pages/index', {"testing":"wwwwwwww"});
 });
 app.get('/about', function(req, res) {
   res.render('pages/about');
 });
};