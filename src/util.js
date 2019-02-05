function getENDPOINT_URL() { return (process.env.ENDPOINT_URL || "http://localhost:4000") }

module.exports = { getENDPOINT_URL };
