const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { title: 'DiamondNetwork' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
