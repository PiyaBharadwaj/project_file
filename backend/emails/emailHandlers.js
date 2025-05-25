// utils/sendEmail.js
import { transporter, sender } from "../lib/mailtrap.js";
import {
	createCommentNotificationEmailTemplate,
	createConnectionAcceptedEmailTemplate,
	createWelcomeEmailTemplate,
} from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
	try {
		await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: email,
			subject: "Welcome to UnLinked",
			html: createWelcomeEmailTemplate(name, profileUrl),
		});
		console.log("✅ Welcome Email sent successfully");
	} catch (error) {
		console.error("❌ Failed to send welcome email:", error);
	}
};

export const sendCommentNotificationEmail = async (
	recipientEmail,
	recipientName,
	commenterName,
	postUrl,
	commentContent
) => {
	try {
		await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: recipientEmail,
			subject: "New Comment on Your Post",
			html: createCommentNotificationEmailTemplate(recipientName, commenterName, postUrl, commentContent),
		});
		console.log("✅ Comment Notification Email sent successfully");
	} catch (error) {
		console.error("❌ Failed to send comment notification email:", error);
	}
};

export const sendConnectionAcceptedEmail = async (senderEmail, senderName, recipientName, profileUrl) => {
	try {
		await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: senderEmail,
			subject: `${recipientName} accepted your connection request`,
			html: createConnectionAcceptedEmailTemplate(senderName, recipientName, profileUrl),
		});
		console.log("✅ Connection Accepted Email sent successfully");
	} catch (error) {
		console.error("❌ Failed to send connection accepted email:", error);
	}
};
