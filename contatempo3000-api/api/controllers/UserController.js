/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async login(req, res){
        try {
            const { login, password } = req.body;
    
            const user = await User.findOne({ login });

            if (user.password == password) {
                res.ok();
            } else {
                throw new Error('login não autorizado!');
            }
            
        } catch (error) {
            sails.log.warn('login não autorizado!');
            res.negotiate();
        }



    }
  

};

