import { Request, Response, Router } from 'express'
import { Resend } from 'resend';
import { config } from 'dotenv'

config()

const resend = new Resend(process.env.RESEND_API_KEY)

const router = Router()

router.post("/", async (req: Request, res: Response) => {
	const { errorType, message, selectRoute, attachments } = req.body;

	const htmlTemplate = `
			<ul> 
				<li>
					<h3> 
						<strong>Error Type:</strong> 
					</h3>

					${errorType}
				</li>
				<li>
					<h3> 
						<strong>Message:</strong>
					</h3>

					${message}
				 </li>

				${!selectRoute ? `` : `
					<li>
						<h3>
							<strong>Route Selected:</strong>
						</h3>

						${selectRoute}
					</li>
				`}
			</ul>
		`;

	const { data, error } = await resend.emails.send({
		from: "Ayuda Concho <onboarding@resend.dev>",
		to: "carlosxaviergomezbarriento@gmail.com",
		subject: 'Report',
		html: htmlTemplate,
		attachments: attachments.map((file: any) => ({
			filename: file.filename,
			content: file.content
		})),
	});

	if (error) return res.status(400).json({ error });

	res.status(200).json({ data });
});

export default router