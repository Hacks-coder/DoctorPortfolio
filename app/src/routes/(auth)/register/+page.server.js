import { actionResult, fail, message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { redirect } from "@sveltejs/kit";
import { userSchema } from "$lib/schemas/userSchema";

export const load = async () => {
  const form = await superValidate(zod(userSchema));
  
  return {
    form,   
  };
}

export const actions = {
  default: async ({ request, fetch, params }) => {
    const form = await superValidate(request, zod(userSchema));
    
    // Check if the form is valid
    if (!form.valid) {
      return fail(400, { form });
    }

    const { username, phone, email, password } = form.data;

    // Send request to the backend for registration
    const response = await fetch("http://127.0.0.1:3000/api/auth/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, phone, email, password }),
    });

    // If registration is successful, redirect to login page
    if (response.ok) {
      console.log("Registration successful, redirecting...");
      throw redirect(303, "/login");
    }

    // Handle failed registration
    const responseData = await response.json();
    return {
      form,
      message: responseData.message || 'An error occurred during registration.',
    };
  },
}
