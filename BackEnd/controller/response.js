const dt = require('node-datetime');
module.exports = function response_data(response_type, status_code, data = null, error = null, user_message = null, internal_message = null, errpoint = null) {
    return {
        "type": response_type,
        "code": status_code,
        "data": data,
        "error": error,
        "message":
        {
            "user": user_message,
            "internal": internal_message
        },
        'datetime': dt.create()._now
    };
};