import Users from '../modals/userModal.js';

const getUserProfile = async (req, res) => {
	try {
		const user_id = req.user;

		const userProfile = await Users.findOne({_id: user_id})
			.select("-personal_info.password");

		if(!userProfile) {
			return res.status(403).json({error: "User not found"});
		}
		return res.status(200).json({user: userProfile});
	} catch (err) {
		return res.status(500).json({error: err.message});
	}
}

const updateUserProfile = async (req, res) => {

	try {
		const userId = req.user;

		const personalInfoUpdates = req.body;

		const updateFields = {};
		for (const [key, value] of
			Object.entries(personalInfoUpdates)) {
			updateFields[`personal_info.${key}`] =
				value;
		}

		// console.log(updateFields);

		if (userId) {
			const updatedUser = await Users.findOneAndUpdate({_id: userId},
				{$set: updateFields},
				{new: true})
				.select("-personal_info.password");

			if(!updatedUser)
				return res.status(403).json({error: "User not found"});

			return res.status(200).json({updatedUser});
		}
	} catch (err) {
		return res.status(500).json({error: err.message});
	}
}

export {
	getUserProfile,
	updateUserProfile
};
