<script lang="ts">
    import { loginSchema } from "$lib/schemas/userSchema";
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	let { data } = $props();

	const { form, errors, message, enhance } = superForm(data.form, {
		validators: zodClient(loginSchema),
		applyAction: true
	});
</script>

<SuperDebug data={$form} />
{#if message}
	<h1>{$message}</h1>
{/if}
<form use:enhance method="POST">
	<div>
		<input type="email" name="email" placeholder="Enter ur email" bind:value={$form.email} />
		{#if $errors.email}
			<p class="text-red-900">{$errors.email}</p>
		{/if}
	</div>
	<div>
		<input type="password" name="password" placeholder="password" bind:value={$form.password} />
		{#if $errors.password}
			<p class="text-red-900">{$errors.password}</p>
		{/if}
	</div>
	<button type="submit">Login</button>
</form>
