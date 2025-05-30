export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly: true,
        // secure: true uncommit it when you have SSL in Ftontend
    } 
    res.status(statusCode);
}