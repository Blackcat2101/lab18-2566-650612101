import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Santhod Khiawaubon",
    studentId: "650612101",
  });
};
