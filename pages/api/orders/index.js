import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  var pad = (function (num) {
    return function () {
      var str = String(num++);
      while (str.length < 6) str = "0" + str;
      return "OPG" + str;
    };
  })(await prisma.order.count()+1);

  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.order.findFirst({
          select: {
            orderCode: true,
          },
          where: {
            tel: { contains: req.query.tel },
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const oderCode = pad()
        await prisma.order.create({
          data: {
            orderCode: oderCode,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            tel: req.body.tel,
            image: req.body.image,
            email: req.body.email,
            address: req.body.address,
            subDistrict: req.body.subDistrict,
            district: req.body.district,
            postalCode: req.body.postalCode,
            province: req.body.province,
            status: req.body.status,
            notes: req.body.notes,
            total: parseInt(req.body.totalPrice),
            OrderDetail: {
              create: req.body.cart.map((product) => ({
                productId: product.id,
                sumPrice: parseInt(product.sumPrice),
                sumQty: parseInt(product.sumQty),
              })),
            },
          },
        });
        res.status(201).json({ success: true, orderCode: oderCode });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
