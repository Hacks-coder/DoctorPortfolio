<script>
    import FaYoutube from '~icons/fa-brands/youtube';
	import TextTitle from '../Text/TextTitle.svelte';


    const linkMedia = [
        {icon: FaYoutube, media: "Email"},
        {icon: FaYoutube, media: "Youtube"},
        {icon: FaYoutube, media: "Whatsapp"},
    ]
</script>


<section class="space-y-2 shadow-md shadow-base">
    {#each linkMedia as item}
        <div class="flex gap-5 items-center w-80 bg-primary h-16 rounded-md">
            <div class="size-10  rounded-full bg-purple flex items-center justify-center text-base"><item.icon /></div>
            <TextTitle text = {item.media} />
        </div>
    {/each}
</section>