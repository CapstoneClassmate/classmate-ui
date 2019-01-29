let getENDPOINT_URL = () => { return process.env.ENDPOINT_URL || "http://localhost:4000" };

export { getENDPOINT_URL };
