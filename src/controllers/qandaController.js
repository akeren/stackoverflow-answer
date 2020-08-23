exports.getAllQandas = (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Documments retrieved successfully',
		data: 'The data goes here from the data!'
	});
};

exports.getQanda = (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Doc retrieved successfully',
		data: 'The data goes here from the data!'
	});
};

exports.createQanda = (req, res) => {
	res.status(201).json({
		status: 'success',
		message: 'Qanda created successfully',
		data: 'Return the created data here!'
	});
};

exports.updateQanda = (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Doc updated successfully',
		data: 'The updated data goes here!'
	});
};

exports.deleteQanda = (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Doc deleted!',
		data: 'Return the Deleted data'
	});
};
