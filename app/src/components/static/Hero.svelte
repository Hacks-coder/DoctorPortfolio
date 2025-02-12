<script>


	import { fly } from "svelte/transition";

    
	import ShortButton from "../Buttons/ShortButton.svelte";
	import MediaIcons from "../Media/MediaIcons.svelte";
	import TextSmall from "../Text/TextSmall.svelte";
	import { onMount } from "svelte";
    const userLogo = "/ochu.png"

    let isTransition = false;
     onMount(() => {
    isTransition = true;
  });


</script>
{#if isTransition}
    <section class="grid place-items-center p-3 @4xl:grid-cols-2" 
    in:fly={{x: -100, duration: 5000}}  
>
    <div class="@container w-80 space-y-3 @xs:w-96 @4xl:w-full">
        <p class="text-aqua font-krona text-3xl @xs:text-4xl @md:text-6xl @2xl:text-8xl">Dreams of liferemains till the heart beats</p>
        <TextSmall text = "Empowering your health journey with care, compassion, and expertise. Your well-being is our heartbeat." />
        <ShortButton text = "Contact Me"/>
        <MediaIcons />
    </div>
    <div style={`background-image: url(${userLogo});`} class="bg-cover size-80 md:size-96"
        in:fly={{x: 100, duration: 5000}}
    ></div>
</section>
{/if}