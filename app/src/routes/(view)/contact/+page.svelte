<script>

	import LinkMedia from "../../../components/Media/LinkMedia.svelte";
	import TextSmall from "../../../components/Text/TextSmall.svelte";
	import TextTitle from "../../../components/Text/TextTitle.svelte";

</script>
<section class="grid place-items-center gap-5 mt-20">

    <form action="" class="flex flex-col gap-3 items-center">
        <div class="w-72">
            <TextTitle text = "Let’s Chat, Reach Out to Me" />
            <TextSmall text = "Empowering your health journey with care, compassion, and expertise. Your well-being is our heartbeat." />   
        </div>
        <input type="text" placeholder="Username" class="w-72 h-10 bg-base rounded-md">
        <input type="password" placeholder="Password" class="w-72 h-10 bg-base rounded-md" >
        <textarea placeholder="Message" class="w-72 h-56 bg-base rounded-md" ></textarea>
        <button class="bg-aqua w-72 h-10 rounded-md">Send</button>
    </form>
    <LinkMedia />
</section>