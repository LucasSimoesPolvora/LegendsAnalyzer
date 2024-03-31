import jwt from "jsonwebtoken"
import { privateKey } from "./private_key.mjs"

const auth = (req, res, next) => {
    const authorizationHeaders = req.headers.authorization;

    // Checking if the header exists
    if(!authorizationHeaders){
        const message = `Unvalid token or token not provided`
        res.status(401).json({ message })
    } else {
        // Extracting the token
        const token = authorizationHeaders.split(" ")[1]

        // Verifying the token
        jwt.verify(token, privateKey, (error, decodedToken) => {
            if(error){
                // If the token fails, return 401 
                const message = "You are not allowed to access this ressource"
                res.status(401).json({ message })
            }
            // Extracting the user's Id from the decoded token
            const userId = decodedToken.userId

            // Checking if the user ID in the request body matches the one in the token
            if(req.body.userId && req.body.userId !== userId){
                // If user ID in the request body doesn't match the one in the token, return 401 Unauthorized status
                const message = "Your Id is unvalid"
                res.status(401).json({ message })
            } else {
                // If everything is fine and the user is valid, we proceed to the middleware
                next()
            }
        })
    }
}

export { auth }