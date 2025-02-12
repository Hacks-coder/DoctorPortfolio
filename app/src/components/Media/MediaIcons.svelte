<script>
    import FaYoutube from '~icons/fa-brands/youtube';
    import RiInstagramFill from '~icons/ri/instagram-fill';
    import IcSharpFacebook from '~icons/ic/sharp-facebook';

    const mediaIcons = [
        {href: "/", icon: FaYoutube},
        {href: "/", icon: RiInstagramFill},
        {href: "/", icon: IcSharpFacebook}
    ]
</script>

<div class="flex gap-2 text-xl text-aqua">
    {#each mediaIcons as item}
        <a href={item.href}><item.icon /></a>
    {/each}
</div>