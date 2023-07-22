import { TOKEN_SECRET } from "./../config/index.js"

import pkg from 'jsonwebtoken';

const { verify, TokenExpiredError } = pkg

const authorizationStatus = (req, res, next) => {
    const authHeaders = req.headers['authorization']
    if (!authHeaders) {
        res.status(404).json({ message: "Unauthorized" })
        return
    }
    const standard = authHeaders.split(" ")[0]
    const token = authHeaders.split(" ")[1]
    if (standard.toLowerCase() != 'bearer') {
        res.status(404).json({ message: "Unauthorized" })
        return
    }
    try {
        const payload = verify(token, TOKEN_SECRET)
        req.user_info = payload
        next()

    } catch (err) {
        if (err instanceof TokenExpiredError) {
            res.status(498).json({ message: "Invalid token." })
            return
        }
        res.status(500).json({ message: err.message })
        return
    }

}

export { authorizationStatus }
