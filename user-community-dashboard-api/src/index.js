const express = require('express');
const usersRouter = require('./routes/users');
const communitiesRouter = require('./routes/communities');

const app = express();
const PORT = 4000;
module.exports = app;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/communities', communitiesRouter);

app.get('/', (req, res) => {
    res.json({ message: "Server is running successfully" });
});

app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}