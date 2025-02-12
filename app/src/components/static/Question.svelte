<script>
	import ShortButton from "../Buttons/ShortButton.svelte";
	import MediaIcons from "../Media/MediaIcons.svelte";
	import TextSmall from "../Text/TextSmall.svelte";
	import TextTitle from "../Text/TextTitle.svelte";

    const mediaPhoto = "/media.png"
</script>


<section class="mt-20 grid gap-3 place-items-center text-center pt-5 pb-5 @4xl:grid-cols-2">
    <div style={`background-image: url(${mediaPhoto})`} class="bg-cover size-80"></div>
    <div class="w-80 space-y-3 flex flex-col items-center md:w-full md:p-20">
        <TextTitle text = "Ask Dr. Ochuko Directly: Quick Replies via YouTube, Twitter, and More" />
        <TextSmall text = "Dr. Ochuko is dedicated to providing accessible healthcare information through active engagement on platforms like YouTube and Twitter. Patients are encouraged to ask questions and can expect prompt responses, ensuring timely and reliable medical guidance." />
        <MediaIcons />
        <ShortButton text = "Connect" />
    </div>
</section>