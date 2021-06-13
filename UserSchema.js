var mongoose = require('mongoose');
var jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true
    },
    conpassword: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRT_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;