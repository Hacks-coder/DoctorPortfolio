<script lang="ts">
	import { userSchema } from '$lib/schemas/userSchema.js';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	let { data } = $props();

	const { form, errors, message, enhance } = superForm(data.form, {
		validators: zodClient(userSchema),
		applyAction: true
	});
</script>

<SuperDebug data={$form} />
{#if message}
	<h1>{$message}</h1>
{/if}
<form use:enhance method="POST">
    <div>
		<input type="text" name="username" placeholder="Enter ur Username" bind:value={$form.username} />
		{#if $errors.username}
			<p class="text-red-900">{$errors.username}</p>
		{/if}
	</div>
    <div>
		<input type="number" name="phone" placeholder="Enter ur Number" bind:value={$form.phone} />
		{#if $errors.phone}
			<p class="text-red-900">{$errors.phone}</p>
		{/if}
	</div>
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
	<button type="submit">register</button>
</form>
