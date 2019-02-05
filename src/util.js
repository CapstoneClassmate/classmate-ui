var getENDPOINT_URL = () => { 
    console.log('node env', process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
        return "http://classmate-endpoint-prod.herokuapp.com";
    } else {
        return "http://localhost:4000";
    }
};

module.exports = { getENDPOINT_URL };
