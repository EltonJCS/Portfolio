"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (fieldValue: unknown, maxLength: number) => {
  if (
    !fieldValue ||
    typeof fieldValue !== "string" ||
    fieldValue.length > maxLength
  ) {
    return false;
  }
  return true;
};

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Unknown error";
  }

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 320)) {
    return {
      error: "Invalid form sender email",
    };
  }
  if (!validateString(message, 2500)) {
    return {
      error: "Invalid form message",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio contact form <onboarding@resend.dev>",
      to: "eltjcs@gmail.com",
      subject: "Portfolio form email",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
