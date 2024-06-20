import { faker } from "@faker-js/faker";

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

console.log(
  "Please login with these credentials:",
  randomEmail,
  randomPassword
);

export async function submitLogin(formValues) {
  const { email, password } = formValues;

  if (email === randomEmail && password === randomPassword) {
    return { message: "Login successful!", status: 200 };
  } else {
    return { message: "Invalid email or password", status: 401 };
  }
}
