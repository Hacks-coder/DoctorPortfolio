<script>
    import FaYoutube from '~icons/fa-brands/youtube';
     import RiInstagramFill from '~icons/ri/instagram-fill';
     import IcSharpFacebook from '~icons/ic/sharp-facebook';
     import MedicalIconIInpatient from '~icons/medical-icon/i-inpatient';
     import PhVideoFill from '~icons/ph/video-fill';
     import AttachEmailIcon from '~icons/ic/sharp-attach-email';
     
     import MingcuteWhatsappFill from '~icons/mingcute/whatsapp-fill';
  import MynauiUserSolid from '~icons/mynaui/user-solid';
  import MageMessageDotsFill from '~icons/mage/message-dots-fill';
  import FluentSend48Filled from '~icons/fluent/send-48-filled';


   import SolarHomeOutline from '~icons/solar/home-outline';
    import MaterialSymbolsCallSharp from '~icons/material-symbols/call-sharp';
    import IonLibrary from '~icons/ion/library';
    import MaterialSymbolsWorkHistoryRounded from '~icons/material-symbols/work-history-rounded';


    const navigation = [
        {icon: SolarHomeOutline , href: "/home", child: "Home"},
        {icon: MaterialSymbolsCallSharp, href: "/about", child: "About"},
        {icon: MaterialSymbolsWorkHistoryRounded, href: "/contact", child: "Contact"},
        {icon: IonLibrary, href: "/home", child: "Books"}
    ]
</script>



<section class="fixed w-full bottom-0 @4xl:hidden">
    <nav class="flex p-2 gap-10 justify-evenly border-2 rounded-md border-primary">
        {#each navigation as item}
            <div class="flex flex-col text-center">
                <item.icon class="text-2xl"/>
                <a href={item.href}>{item.child}</a>
            </div>
        {/each}
    </nav>
</section>
<!-- <SolarHomeOutline />
<MaterialSymbolsCallSharp />
 <IonLibrary />
 <MaterialSymbolsWorkHistoryRounded />
 <FaYoutube />
  <RiInstagramFill />
  <IcSharpFacebook />
  <MedicalIconIInpatient />
  <PhVideoFill />
  <AttachEmailIcon />
 
  <MingcuteWhatsappFill />
  <MynauiUserSolid />
  <MageMessageDotsFill  />
  <FluentSend48Filled  /> -->