<script>
    import IonLibrary from '~icons/ion/library';
    import PhVideoFill from '~icons/ph/video-fill';
    import MedicalIconIInpatient from '~icons/medical-icon/i-inpatient';
	import TextSmall from '../Text/TextSmall.svelte';
	import TextTitle from '../Text/TextTitle.svelte';



    const servicesCard = [
        {
            icon: MedicalIconIInpatient,
            title: "Medication",
            description: "Comprehensive medication guidance, prescriptions, and expert advice to ensure safe and effective treatment for your health needs"
        },
        {
            icon: PhVideoFill,
            title: "Education",
            description: "Informative and engaging videos covering various health topics to guide you in making better wellness choices."
        },
        {
            icon: IonLibrary,
            title: "Book/Articles",
            description: "Expert-written resources providing in-depth medical insights, health tips, and the latest research."
        },
    ]
</script>


<section class="mt-20 p-2 bg-primary pt-5 pb-5">
    <TextTitle text = "Our Services" />
    <TextSmall text = "Empowering your health journey with care, compassion, and expertise. Your well-being is our heartbeat." />
<section class="space-y-3 flex flex-col items-center mt-10 @4xl:flex-row @4xl:gap-5 @4xl:justify-center">
    {#each servicesCard as item}
        <div class="w-80 h-56 bg-base rounded-xl p-2 space-y-3">
            <div class="bg-pink p-2 w-fit h-fit rounded-sm"><item.icon /></div>
            <p class="text-pink font-bold text-2xl">{item.title}</p>
            <TextSmall text = {item.description} />
        </div>
    {/each}
</section>
</section>