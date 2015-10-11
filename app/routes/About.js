module.exports = {
  path: 'about',
  getComponent(location, cb){
    require.ensure([], function(require){
      cb(null, require('../components/About.react'));
    })
  }
};
