const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const templateRouter = require('./routes/template');
const timetableRouter = require('./routes/timetable');

const app = express();
const port = 5000;

app.use(cors());
app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/template', templateRouter);
app.use('/timetable', timetableRouter);

// Keep this last
app.get('/*', (req, res) => {
    res.status(404).send('Error 404');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});