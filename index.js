const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`)
})

