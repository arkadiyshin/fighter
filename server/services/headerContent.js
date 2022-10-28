
const header = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next();
};

export default header;