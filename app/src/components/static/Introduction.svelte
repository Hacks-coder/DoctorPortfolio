<script>
	import ShortButton from "../Buttons/ShortButton.svelte";
	import TextSmall from "../Text/TextSmall.svelte";
	import TextTitle from "../Text/TextTitle.svelte";

    let introPhoto = "/intro.png"
</script>



<section class="mt-20 space-y-3 bg-primary grid place-items-center items-center @4xl:grid-cols-2 @4xl:p-20">
    <div style={`background-image: url(${introPhoto})`} class="bg-cover size-80 @xl:size-96"></div>
    <div class="w-80 space-y-3 @xl:w-96 text-center @4xl:w-full">
        <TextTitle text = "Hi, I am Doctor Ochuko A. " />
        <TextSmall text = "Dr. Ochuko A. is a board-certified family medicine physician with 21+ years of experience, specializing in diabetes, obesity, and hypertension. He is affiliated with Piedmont Henry Hospital and holds medical licenses in Alabama and Georgia." />
        <ShortButton text = "Contact Me" />
    </div>
</section>