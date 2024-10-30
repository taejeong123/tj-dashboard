import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req, res, "겟");
  // 데이터 행 생성
  // await prisma.dashboard.create({
  //   data: {
  //     title: "title1",
  //     context: "lorem ipsum",
  //   },
  // });

  // 데이터 행 수정
  // await prisma.dashboard.update({
  //   where: {
  //     id: 2,
  //   },
  //   data: {
  //     title: "title2",
  //     context: "context context",
  //   },
  // });

  const data = await prisma.dashboard.findMany();
  // console.log("data", data);

  // const data2 = await prisma.dashboard.findMany({
  //   where: {
  //     id: 1,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //   },
  // });
  // console.log("data2", data2);

  return Response.json({
    data,
  });
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(res, "포스트");

  console.log(req.body);

  return Response.json("post");
};

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req, res, "딜리트");

  return Response.json("delete");
};
