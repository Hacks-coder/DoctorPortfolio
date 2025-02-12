<script>
	import TextSmall from "../Text/TextSmall.svelte";
	import TextTitle from "../Text/TextTitle.svelte";


    const video = [
        {
            video: "https://www.youtube-nocookie.com/embed/2IqPlncdek0?si=A3oEspTuvvgk9qrx",
        },
        {
            video: "https://www.youtube-nocookie.com/embed/mfoGt0Gu70U?si=3N25HvwozVxbZ2wD",
        },
        {
            video: "https://www.youtube-nocookie.com/embed/dHacBURluQA?si=hKKk7Z5y9E1bjyLF",
        },
        {
            video: "https://www.youtube-nocookie.com/embed/dHacBURluQA?si=hKKk7Z5y9E1bjyLF",
        }
    ]
</script>

<section>
    <div>
        <TextTitle text = "Educative Videos" />
        <TextSmall text = "Empowering your health journey with care, compassion, and expertise. Your well-being is our heartbeat." />
    </div>
    <div class="grid place-items-center gap-2 @4xl:grid-cols-2 mt-10">
        {#each video as item}
            <iframe width="400" height="200"  src={item.video} title="YouTube video player"allow="accelerometer; allowfullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        {/each}
    </div>
</section>