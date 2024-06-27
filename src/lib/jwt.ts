import { HMAC } from "oslo/crypto";
import { JWT, createJWT, validateJWT } from "oslo/jwt";
import { TimeSpan } from "oslo";

const getSecret = async () => {
  const encoder = new TextEncoder();
  const uint8Array = encoder.encode(process.env.TOKEN_SECRET);
  return uint8Array.buffer as ArrayBuffer;
};

const payload = {
  message: "hello, world",
};

export const createToken = async (subject: string) => {
  const secret = await getSecret();

  try {
    const jwt = await createJWT("HS256", secret, payload, {
      expiresIn: new TimeSpan(30, "d"),
      includeIssuedTimestamp: true,
      subject,

    });

    return jwt;
  } catch (error) {
    console.error();
    
    return;
  }
};



export const validateToken = async (token: string) => {
  const secret = await getSecret();
  try {
    const decodedToken = validateJWT("HS256", secret, token);
    // const message = jwt.payload.message;

    return decodedToken;
  } catch (error) {
    console.error();
    return null;

    // invalid signature
    // expired token
    // inactive token (`nbf`)
  }
};
