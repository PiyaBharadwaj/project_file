// lib/mailer.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: false,
	auth: {
		user: process.env.EMAIL_FROM,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export const sender = {
	email: process.env.EMAIL_FROM,
	name: process.env.EMAIL_FROM_NAME || "UnLinked",
};
