import bcrypt from 'bcrypt'

const encryptPassword = async (password) => {
	try {
		const saltRounds = 14;
		const salt = await bcrypt.genSalt(saltRounds)
		const hashPassword = await bcrypt.hash(password, salt)

		return hashPassword

	} catch (error) {
		console.log("Error setting a password", error)
	}
}

export default encryptPassword