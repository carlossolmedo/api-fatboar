import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { routeWithoutAuth, tokenSecret } from '../config/config';

const init = () => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: tokenSecret
    };

    passport.use(new Strategy(opts, (decoded, done) => {
        return done(null, decoded);
    }));
};

exports.protectWithJwt = (req, res, next) => {
    init();
    if (req.path == routeWithoutAuth.home || req.path == routeWithoutAuth.login) {     // allow the connection to those paths
        return next();
    }

    return passport.authenticate('jwt', { session: false })(req, res, next);
};
