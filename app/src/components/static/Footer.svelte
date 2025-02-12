<script lang="ts">
	import TextTitle from "../Text/TextTitle.svelte";

    const footerPath = [
        {
            title: "Resources",
            text: [
                {title: "Consultation", href: "/"},
                {title: "Services", href: "/"},
                {title: "Pharmarcy", href: "/"},
                {title: "Article", href: "/"},
                {title: "Video", href: "/"}              
            ]
        },
        {
            title: "Books",
            text: [
                {title: "Medication", href: "/"},
                {title: "E-books", href: "/"},
                {title: "Quotes", href: "/"},
                {title: "Motivation", href: "/"}
            ]
        },
        {
            title: "Information",
            text: [
                {title: "blog", href: "/"},
                {title: "Private Policies", href: "/"},
                {title: "Terms and conditions", href: "/"},
                {title: "Partnerships", href: "/"},
                {title: "Support", href: "/"}              
            ]
        },
    ]
</script>

<footer class="grid bg-primary gap-10 p-5 mt-20 text-white grid-cols-1 md:grid-cols-2 md:place-items-center lg:grid-cols-3">
     {#each footerPath as item}
        <div>      
            <TextTitle text = {item.title} />
            {#each item.text as sub_item}
                <div>
                    <a href={sub_item.href}>{sub_item.title}</a>
                </div>
            {/each}       
        </div>
    {/each}
</footer>