import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    // console.log("",req.body);
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.popup.findMany();
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
