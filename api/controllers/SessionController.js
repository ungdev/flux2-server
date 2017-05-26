const Flux = require('../../Flux');
const ModelController = require('../../lib/ModelController');

class SessionController extends ModelController {

    constructor() {
        super(Flux.Session);
    }

    /**
     * @api {post} /user/subscribe Subscribe to new items
     * @apiName subscribe
     * @apiGroup User
     * @apiDescription Subscribe to all new items.
     */
    // subscribe(req, res) {}


    /**
     * @api {post} /user/unsubscribe Unsubscribe from new items
     * @apiName subscribe
     * @apiGroup User
     * @apiDescription Unsubscribe from new items
     */
    // unsubscribe(req, res) {}

     open(req, res) {

        // Debug sessions
        /*
        if(req.param('token', null)) {
            sails.log.debug('open : ' + req.user.name + ' (' + req.team.name + '): Android('+sails.sockets.getId(req)+', '+req.param('token', '').substr(0, 32)+', '+req.param('deviceId', '')+')')
        }
        else {
            sails.log.debug('open : ' + req.user.name + ' (' + req.team.name + '): Browser('+sails.sockets.getId(req) + ')')
        }
        */

        const newSession = {
            user: req.user,
            socketId: sails.sockets.getId(req),
        };

        // check if this device already exists in the database
        let filter = [{ socketId: sails.sockets.getId(req) }];
        if(req.param('deviceId')) filter.push({ deviceId: req.param('deviceId')});
        if(req.param('token')) filter.push({ firebaseToken: req.param('token') });

        Session.findOne(filter)
        .exec((error, session) => {
            if (error) return res.negotiate(error);

            // if a session already exists, update the session
            if (session) {
                session.user = req.user.id;
                session.lastAction = Date.now();
                session.socketId = sails.sockets.getId(req);
                session.firebaseToken = req.param('token', null);
                session.deviceId = req.param('deviceId', null),

                session.save(err => {
                    if (err) return res.negotiate(err);

                    return res.ok({message: "session updated"});
                });
            }
            else {
                let session = {};
                session.user = req.user.id;
                session.lastAction = Date.now();
                session.socketId = sails.sockets.getId(req);
                session.firebaseToken = req.param('token', null);
                session.deviceId = req.param('deviceId', null),

                Session.create(session).exec((error, session) => {
                    if (error) return res.negotiate(error);

                    return res.ok({message: "new session"});
                });
            }
        });
    }
};

module.exports = SessionController;
