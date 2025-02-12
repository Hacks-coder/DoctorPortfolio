import { actionResult, fail, message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { redirect } from "@sveltejs/kit";
import { loginSchema } from "$lib/schemas/userSchema";

export const load = async () => {
  const form = await superValidate(zod(loginSchema));

  return {
    form,   
  };
}

export const actions = {
  default: async ({ request, fetch, params }) => {
    const form = await superValidate(request, zod(loginSchema));
   
    // Check if the form is valid
    if (!form.valid) {
      return fail(400, { form });
    }

    const { email, password } = form.data;

    // Send login request to the backend
    const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // If login is successful, redirect to home page
    if (response.ok) {
      console.log("Login successful, redirecting...");
      
      // Optionally you could save the token to localStorage or a store here if needed.
      
      throw redirect(303, "/home");
    }

    // Handle failed login
    const responseData = await response.json();
    return {
      form,
      message: responseData.message || 'Invalid email or password',
    };
  },
}
