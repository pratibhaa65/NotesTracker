import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // const identifier =
    //   req.ip || req.headers["x-forwarded-for"] || "anonymous";

    // const { success } = await ratelimit.limit(identifier);

    // if (!success) {
    //   return res.status(429).json({
    //     message: "Too many requests, please try again later",
    //   });
    // }

    return next();
  } catch (error) {
    console.error("Rate limit failed, bypassing limiter:", error.message);
    return next();
  }
};

export default rateLimiter;