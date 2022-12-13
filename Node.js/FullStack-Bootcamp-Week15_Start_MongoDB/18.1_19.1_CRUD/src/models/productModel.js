import mongoose from 'mongoose';
import validator from 'validator';
const { Schema } = mongoose;
const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    isActive: { type: Boolean },
    details: {
        description: {
            type: String,
            required: true,
            minLength: 10,
        },
        Price: {
            type: Number,
            required: true,
            min: [0, 'Invalid Price has to be a positive number'],
        },
        discount: { type: Number, default: 0 },
        img: { type: Array },
        phone: {
            type: String,
            required: true,
            validate: {
                validator: (value) => validator.isMobilePhone(value, 'he-IL'),
                message: 'Invalid phone number',
            },
        },
        DateAdded: { type: Date, default: () => Date.now() },
    },
});
export const Product = mongoose.model('Product', productSchema);
