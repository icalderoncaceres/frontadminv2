/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {
  dev: {},
  prod: {}
}

/* Enviroment on development */
conf['dev']['base_url'] = 'https://core.pengi.co';
conf['dev']['port'] = '3100';
conf['dev']['apiServer'] = 'https://core.pengi.co:8080';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
conf['dev']['mediaApi'] = 'https://core.pengi.co:3100/dist/';
/* firebase */
conf['dev']['fireConnect'] = {
  apiKey: 'AIzaSyApg5oLg5pspItdyh5lB-eh7EUtfcS9UFQ',
  authDomain: 'chat-bot-stg.firebaseapp.com',
  databaseURL: 'https://chat-bot-stg.firebaseio.com',
  projectId: 'chat-bot-stg'
};

/* Enviroment on production */
conf['prod']['base_url'] = 'https://pengi.co';
conf['prod']['port'] = '3100';
conf['prod']['apiServer'] = 'https://core.pengi.co:8080';
conf['prod']['fileName'] = 'bundle';
conf['prod']['minify'] = true;

/* Export constants */
module.exports = conf[global.enviroment];
