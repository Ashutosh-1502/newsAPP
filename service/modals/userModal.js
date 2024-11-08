import mongoose from 'mongoose';
import bcrypt from "bcrypt";


let profile_imgs_name_list = ["Garfield",
	"Tinkerbell",
	"Annie",
	"Loki",
	"Cleo",
	"Angel",
	"Bob",
	"Mia",
	"Coco",
	"Gracie",
	"Bear",
	"Bella",
	"Abby",
	"Harley",
	"Cali",
	"Leo",
	"Luna",
	"Jack",
	"Felix",
	"Kiki"];
let profile_imgs_collections_list = ["notionists-neutral",
	"adventurer-neutral",
	"fun-emoji"];

const userSchema = mongoose.Schema({
	personal_info: {
		fullName: {
			type: String,
			lowercase: true,
			required: true,
			minlength: [3,
				'fullName must be 3 letters long'],
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true
		},
		password: String,
		username: {
			type: String,
			minlength: [3, 'Username must be 3 letters long'],
			unique: true,
		},
		/*
		bio: {
			type: String,
			maxlength: [200, 'Bio should not be more than 200'],
			default: "",
		},
		 */
		avatar: {
			type: String,
			default: () => {
				return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() *
					profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() *
					profile_imgs_name_list.length)]}`
			}
		},
	},
})

userSchema.pre('save', async function (next) {
	if(!this.isModified("personal_info.password")){
		next();
	}

	this.personal_info.password = await bcrypt.hash(this.personal_info.password,
		12);
	next();
})

export default mongoose.model("Users",
	userSchema);
