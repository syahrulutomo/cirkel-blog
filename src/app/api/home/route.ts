import { NextResponse } from "next/server";
import { HomeDataType } from "./types";
import { ARTICLES_LIBRARY } from "@/domains/home/constants/articles";

export async function POST() {
  try {
    return NextResponse.json<HomeDataType>({
      highlight: ARTICLES_LIBRARY[0],
      dynamic: [
        {
          title: "Road to Profesional Player",
          description: "Kiat kiat menjadi pemain musik pro",
          data: ARTICLES_LIBRARY
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }
}
