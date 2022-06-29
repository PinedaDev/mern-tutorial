/**
 * @desc Register user
 * @route POST /api/users
 * @access public
 */
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}

/**
 * @desc Authentica user
 * @route POST /api/users/login
 * @access public
 */
const loginUser = (req, res) => {
    res.json({ message: 'User login' })
}

/**
 * @desc Get user data
 * @route GET /api/users/login
 * @access private
 */
const getMe = (req, res) => {
    res.json({ message: 'Display user data' })
}

module.exports = { registerUser, loginUser, getMe }