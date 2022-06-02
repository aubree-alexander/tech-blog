//AA - I don't really know what this is doing or what the / syntax means.
module.exports = {
    format_date: date => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
};