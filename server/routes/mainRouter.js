// Modules
const express = require('express');
const mainRouter = express();

memberRoute = require('./memberRoute');
mainRouter.use('/member', memberRoute);

groupRoute = require('./groupRoute');
mainRouter.use('/group', groupRoute);

registerRoute = require('./registerRoute');
mainRouter.use('/register', registerRoute);

slotRoute = require('./slotRoute');
mainRouter.use('/slot', slotRoute);

groupChoiceRoute = require('./groupChoiceRoute');
mainRouter.use('/groupChoice', groupChoiceRoute);

module.exports = mainRouter;
