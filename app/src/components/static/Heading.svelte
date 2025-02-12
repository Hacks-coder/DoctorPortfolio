<script>
    import SolarHomeOutline from '~icons/solar/home-outline';
    import MaterialSymbolsCallSharp from '~icons/material-symbols/call-sharp';
    import IonLibrary from '~icons/ion/library';
    import MaterialSymbolsWorkHistoryRounded from '~icons/material-symbols/work-history-rounded';



    const navigation = [
        {icon: SolarHomeOutline , href: "/home", child: "Home"},
        {icon: MaterialSymbolsCallSharp, href: "/home", child: "About"},
        {icon: MaterialSymbolsWorkHistoryRounded, href: "/home", child: "Contact"},
        {icon: IonLibrary, href: "/home", child: "Books"}
    ]
</script>

<header class="hidden @4xl:flex @4xl:mb-20">
    <nav class="flex p-2 gap-16 justify-center">
        {#each navigation as item}
            <div class="flex gap-1 text-center">
                <item.icon class="text-md text-aqua"/>
                <a href={item.href} class="text-aqua">{item.child}</a>
            </div>
        {/each}
    </nav>
</header>