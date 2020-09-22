const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const UserAdmin = require('../models/userAdmin');


// @route    POST api/users
// @desc     Register user
// @access   Public
// tested
router.post('/',
    [
        check('name', 'O nome é requerido!').not().isEmpty(),
        check('email', 'Por favor, inclua um email válido!').isEmail(),
        check(
          'password',
          'Por favor, digita uma senha com um mínimo de 8 dígitos!'
        ).isLength({ min: 8 }),
        check('code', 'Code is invalid').equals('723')
    ],
    async (req, res) => {
        console.log('got in api/users');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { name, email, password } =  req.body;

            let user = await UserAdmin.findOne({ email });

            if (user) {
                return res.status(400).json({ errors: [{msg: 'Um usuário já foi cadastrado com esse email'}] });
            }

            user = new UserAdmin({
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(15);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '1hr' },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
            );

        } catch (err) {
            return res.status(400).json({ errors: [{msg: 'Erro inesperado, talvez um usuário já esteja cadastrado com essa matrícula!'}] });
        }
    }
);

module.exports = router;