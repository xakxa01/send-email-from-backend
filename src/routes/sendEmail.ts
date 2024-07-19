import { Request, Response, Router } from 'express'
import { Resend } from 'resend';
import { config } from 'dotenv'

config()

const resend = new Resend(process.env.RESEND_API_KEY)

const router = Router()

router.post("/", async (req: Request, res: Response) => {
	const { data, error } = await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: "carlosxaviergomezbarriento@gmail.com",
		subject: "hello world",
		html: "<strong>it works!</strong>",
	});

	if (error) return res.status(400).json({ error });

	res.status(200).json({ data });
});

export default router