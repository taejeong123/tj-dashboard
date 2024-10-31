import { responseHandler } from "@/common";
import { CreateDashboardItemRequest } from "@/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
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

    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit"));

    const data = await prisma.dashboard.findMany({
      // where: {
      //   id: 1,
      // },
      // select: {
      //   id: true,
      //   title: true,
      // },
      ...(limit && { take: limit }),
    });

    return responseHandler({ status: 200, data });
  } catch (error) {
    return responseHandler({ status: 500, error });
  }
};

export const POST = async (req: Request) => {
  try {
    const data: CreateDashboardItemRequest = await req.json();

    console.log("POST", data);

    return responseHandler({ status: 201, data });
  } catch (error) {
    return responseHandler({ status: 500, error });
  }
};

export const DELETE = async (req: Request) => {
  try {
    console.log("DELETE", req.json());

    // do something

    return responseHandler({ status: 200 });
  } catch (error) {
    return responseHandler({ status: 500, error });
  }
};
