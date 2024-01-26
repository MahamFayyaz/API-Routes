import { user } from "@/app/dummydata";
import React from "react";
import { NextResponse } from "next/server";
export function GET(response, content) {
  const data = user;
  // console.log(content.params.id)
  const singledata = data.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    singledata.length==0?{result:"No result found"}:{result:singledata}
  );
}
