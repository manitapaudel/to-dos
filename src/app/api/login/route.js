import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

console.log(
  "Please login with these credentials:",
  randomEmail,
  randomPassword
);

// export async function POST(req) {
//   const { email, password } = await req.json();

//   if (email === randomEmail && password === randomPassword) {
//     return NextResponse.json({ message: "Login Successful!" });
//   } else {
//     return NextResponse.json(
//       { message: "Incorrect Email or Password" },
//       { status: 401 }
//     );
//   }
// }

export async function submitLogin(formValues) {
  const { email, password } = formValues;

  if (email === randomEmail && password === randomPassword) {
    return { message: "Login successful!" };
  } else {
    return { message: "Invalid email or password" };
  }
}
