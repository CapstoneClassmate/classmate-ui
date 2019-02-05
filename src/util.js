var getENDPOINT_URL = () => { process.env.REACT_APP_ENDPOINT_URL || "http://localhost:4000" }

module.exports = { getENDPOINT_URL };
