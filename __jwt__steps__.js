/**
 * -------------------
 *        JWT
 * -------------------
 *
 *
 * install cookie-parser jsonwebtoken
 *
 * set cookie-parser as middleware
 * 
 * 1. create a token
 * 
 * jwt.sign(data(payload), secret, { expiresIn: '5h })
 * 
 * set token to the cookie of response (server side)
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
 * 
        cors({
            origin: [`http://localhost:5173`],
            credentials: true,
          })

 * client side :
          {withCredentials: true}

 * 2. send the token to the client side. Make sure token is in the cookies (application)
 */
/**
 * 3.
 *
 */
