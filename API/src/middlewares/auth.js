if (typeof header !== 'undefined') {
    const bearer = header.split(" ")
    const token = bearer[1]
    try {
        if (verifiedUser) {
            const verifiedUser = jwt.verify(token, user_secret)
            req.user = verifiedUser;
            return next()
        }
    } catch (error) {
        return res.status(401).json({
            status: res.statusCode,
            error: 'Invalid token'
        });
    }

}
return res.status(401).json({
    status: res.statusCode,
})