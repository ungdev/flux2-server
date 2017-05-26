const Flux = require('../../Flux');
const { ExpectedError } = require('../../lib/Errors');
const ModelController = require('../../lib/ModelController');

class BarrelTypeController extends ModelController {

    constructor() {
        super(Flux.BarrelType);
    }

    /**
     * @api {post} /barreltype/subscribe Subscribe to new items
     * @apiName subscribe
     * @apiGroup BarrelType
     * @apiDescription Subscribe to all new items.
     */
    //  subscribe(req, res) {}

    /**
     * @api {post} /barreltype/unsubscribe Unsubscribe from new items
     * @apiName subscribe
     * @apiGroup BarrelType
     * @apiDescription Unsubscribe from new items
     */
    //  unsubscribe(req, res) {}

    /**
     * @api {get} /barreltype
     * @apiName find
     * @apiGroup BarrelType
     * @apiDescription Get the list of all barrel types according to permissions.
     *
     * @apiSuccess {Array} An array of barrel type
     *
     * @apiUse forbiddenError
     */
    //  find(req, res) {}

    /**
     * @api {post} /barreltype
     * @apiName create
     * @apiGroup Barrel Type
     * @apiDescription Create a new barrel type
     *
     * @apiParam {string} name : The name of the contents of the barrel (required)
     * @apiParam {string} shortName : A short unique code from the name of the contents (required)
     * @apiParam {integer} liters : The amount of drink in the barrel (required)
     * @apiParam {float} supplierPrice : purchasing price (required)
     * @apiParam {float} sellPrice : sell price(required)
     *
     * @apiSuccess {BarrelType} The alert button that you've just created
     *
     * @apiUse badRequestError
     * @apiUse forbiddenError
     */
    //  create(req, res) {}

    /**
     * @api {put} /barreltype/:id
     * @apiName update
     * @apiGroup BarrelType
     * @apiDescription Update the given barrel type
     *
     * @apiParam {string} id : Id of the barrel type to edit (required)
     * @apiParam {string} name : The name of the contents of the barrel (optional)
     * @apiParam {string} shortName : A short unique code from the name of the contents (optional)
     * @apiParam {integer} liters : The amount of drink in the barrel (optional)
     * @apiParam {float} supplierPrice : purchasing price (optional)
     * @apiParam {float} sellPrice : sell price(optional)
     *
     * @apiSuccess {BarrelType} The barrel type that you've just updated
     *
     * @apiUse forbiddenError
     * @apiUse notFoundError
     */
    //  update(req, res) {}

    /**
     * @api {delete} /barreltype/:id
     * @apiName destroy
     * @apiGroup BarrelType
     * @apiDescription Delete the given BarrelType
     *
     * @apiParam {string} id : Id of the barrel type to delete
     *
     * @apiUse forbiddenError
     * @apiUse notFoundError
     */
    //  destroy(req, res) {}

    /**
     * @api {post} /barreltype/barrel
     * @apiName Set barrel count
     * @apiGroup BarrelType
     * @apiDescription Set the number of barrels from a barrel type
     *
     * @apiParam {string} id : The id of the barrel type (required)
     * @apiParam {integer} number : the number of barrels to set for this Type
     *
     * @apiSuccess {null} This endpoint return nothing, if you want to whole new list of barrel ask `find`
     *
     * @apiUse badRequestError
     * @apiUse forbiddenError
     * @apiUse notFoundError
     */
     setBarrelNumber(req, res) {

        // Check permissions
        if(!req.team.can('barrelType/admin')) {
            return res.error(403, 'forbidden', 'You are not authorized to create new barrels.');
        }

        // check parameters
        if (!req.param('id')) {
            return res.error(400, 'BadRequest', "Missing barrel type id");
        }
        if (req.param('number') && (parseInt(req.param('number')) < 0 || parseInt(req.param('number')) > 500)) {
            return res.error(400, 'BadRequest', "The number of barrels to create must be a positive integer (less than 500).");
        }

        // get the barrel type
        
    }
};

module.exports = BarrelTypeController;
