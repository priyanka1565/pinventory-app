const registerUser = (req, res) => {
    if (!req.body.email) {
        res.status(400)
        throw new Error("Pleased add an email")
    }
    res.send("Register User")
}
module.exports = {
  registerUser
};
