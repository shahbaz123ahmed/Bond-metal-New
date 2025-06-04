import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  service: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model redefinition error during hot reloads
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;