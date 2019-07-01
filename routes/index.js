var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello in my first koa application !'
  });
});
router.get('/health', function *(next) {
    this.body = 'welcome to my first koa app!!!';
});

module.exports = router;
