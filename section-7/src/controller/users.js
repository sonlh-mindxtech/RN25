import userService from "../services/user.service.js"

const signUpHandler = async (req, res) => {
    const body = req.body
    // validation
    if (!('username' in body)) {
        res.status(400).json({ "message": "`username` field is required." })
        return
    }
    if (!('password' in body)) {
        res.status(400).json({ "message": "`password` field is required." })
        return
    }
    // ...
    const { username, password } = body
    const result = await userService.createUser({
        name: "",
        phoneNumber: "",
        username: username,
        password: password,
    })
    res.status(201).json({ message: "Created", ...result })
    // call db => risky
}

const signInHandler = async (req, res) => {
    const body = req.body
    // validation
    if (!('username' in body)) {
        res.status(400).json({ "message": "`username` field is required." })
        return
    }
    if (!('password' in body)) {
        res.status(400).json({ "message": "`password` field is required." })
        return
    }
    const { username, password } = body

    try {
        const result = await userService.signUserIn({
            username: username,
            password: password
        })
        res.status(200).json({ "token": result })
    } catch (err) {
        if (err.message == 'Invalid Credential.') {
            res.status(400).json({ message: err.message })
            return
        }
        res.status(500).json({ message: err.message })
        return
    }



    // call db => risky
}


export { signUpHandler, signInHandler }
