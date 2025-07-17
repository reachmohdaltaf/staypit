import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const name = searchParams.get("name")
    const email = searchParams.get("email")

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing name or email" }), {
        status: 400,
      })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    })

    return new Response(JSON.stringify(user), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error creating user:", error)
    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500,
    })
  }
}
