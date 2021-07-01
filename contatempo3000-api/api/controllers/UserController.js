/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const nodemailer = require('nodemailer');

module.exports = {
    async login(req, res){
        try {
            const { login, password } = req.body;
            
            const user = await User.findOne({ login });

            if (!!user && user.password == password) {
                return res.ok();
            } else {
                throw new Error('Login não encontrado ou senha incorreta!');
            }
            
        } catch (err) {
            sails.log.warn(err);
            return res.negotiate(err);
        }
    },

    async recoverPassword(req ,res){
        try {
            let userId = req.params.id;            
            if (!userId) throw new Error('Usuário não informado!')

            let user = User.findOne(userId);
            if (!user) throw new Error('Usuário não encontrado!')
            
            let transporter = nodemailer.createTransport(transport[ defaults]);

            let text = `
                Olá,
                Sua senha é ${user.password}
            `;

            let message = {
                from: 'taschezeit@gmail.com',
                to: user.email,
                subject: 'TascheZeit Password Recovery',
                text
            };

            transporter.sendMail(message)
                .then(res.ok())
                .catch(res.negotiate());

        } catch (error) {
            sails.log.warn('recoverPassword.failed: '+error);
            res.negotiate();
        }
    }
};



