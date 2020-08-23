const express = require('express');
const morgan = require('morgan');

const qandaRouter = require('./routes/qandaRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// ROUTES
app.use('/api/v1/qandas', qandaRouter);

/*
 ** HANDLING UNHANDLED ROUTES
 */
app.all('*', (req, res, next) => {
	res.status(404).json({
		status: 'fail',
		message: `Can't find ${req.originalUrl} on this Server!`
	});
});

module.exports = app;
