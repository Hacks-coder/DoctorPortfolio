<script>
	import TextSmall from "../Text/TextSmall.svelte";
	import TextTitle from "../Text/TextTitle.svelte";


    const testimonies = [
        {
            photo: "/img1.jpg",
            person: "@Joseph",
            testimony: "Dr. Ochuko’s treatment ended years of migraines. I’m finally pain-free and so grateful"
        },
        {
            photo: "/img2.jpg",
            person: "@Joseph",
            testimony: "Dr. Ochuko’s treatment ended years of migraines. I’m finally pain-free and so grateful"
        }
    ]
</script>


<div class="text-center mt-20   ">
    <TextTitle text  = "Testimony" />
    <TextSmall text = "Let’s see what people say about me" />
</div>
<section class="mt-10 flex flex-col items-center gap-3 @4xl:flex-row @4xl:justify-center">
    {#each testimonies as item}
        <div class="text-center flex flex-col gap-3 p-3 items-center bg-primary w-72 h-56 rounded-lg ">
            <div style={`background-image: url(${item.photo})`} class="bg-cover w-20 h-20 shadow-md shadow-black rounded-full border-4 border-white"></div>
            <p class="text-pink font-bold text-xl">{item.person}</p>
            <TextSmall text = {item.testimony} />
        </div>
    {/each}
</section>