import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useHeaderCb, useButtonsCb, useFlex6Cb, useLogoCb, useLogoIconCb, useTabsCb, useDescriptionCb, useMainSectionCb, useTitleNDescriptionCb, useButtonGroupCb, useImageSectionCb, useFavAppsSectionCb, useAppIconsGroupCb, useFlex15Cb, useFlex36Cb, useFlex21Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex37Cb, useorderOnlineCb, useReservateCb, useLogoIconAssetCb, useCartCb, usePageCb, useMenuCb, useHomeCb, useAboutCb, useTitle2Cb, useTitle1Cb, useDescriptionTextCb, useReservateButtonCb, useOrderOnlineCb, useImageCb, useTitleCb, useGrubHubCb, useDoorDashCb, useRappiCb, usePostmatesCb, useTextBox13Cb, useImage7Cb, useTextBox15Cb, useTextBox16Cb, useTextBox14Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useImage14Cb, useTextBox38Cb, useTextBox39Cb, useImage15Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useImage16Cb, useTextBox43Cb, useButton6Cb, useButton7Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const ButtonsProps = useStore((state)=>state["Home"]["Buttons"]);
const ButtonsIoProps = useIoStore((state)=>state["Home"]["Buttons"]);
const ButtonsCb = useButtonsCb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const LogoIconProps = useStore((state)=>state["Home"]["LogoIcon"]);
const LogoIconIoProps = useIoStore((state)=>state["Home"]["LogoIcon"]);
const LogoIconCb = useLogoIconCb()
const TabsProps = useStore((state)=>state["Home"]["Tabs"]);
const TabsIoProps = useIoStore((state)=>state["Home"]["Tabs"]);
const TabsCb = useTabsCb()
const DescriptionProps = useStore((state)=>state["Home"]["Description"]);
const DescriptionIoProps = useIoStore((state)=>state["Home"]["Description"]);
const DescriptionCb = useDescriptionCb()
const MainSectionProps = useStore((state)=>state["Home"]["MainSection"]);
const MainSectionIoProps = useIoStore((state)=>state["Home"]["MainSection"]);
const MainSectionCb = useMainSectionCb()
const TitleNDescriptionProps = useStore((state)=>state["Home"]["TitleNDescription"]);
const TitleNDescriptionIoProps = useIoStore((state)=>state["Home"]["TitleNDescription"]);
const TitleNDescriptionCb = useTitleNDescriptionCb()
const ButtonGroupProps = useStore((state)=>state["Home"]["ButtonGroup"]);
const ButtonGroupIoProps = useIoStore((state)=>state["Home"]["ButtonGroup"]);
const ButtonGroupCb = useButtonGroupCb()
const ImageSectionProps = useStore((state)=>state["Home"]["ImageSection"]);
const ImageSectionIoProps = useIoStore((state)=>state["Home"]["ImageSection"]);
const ImageSectionCb = useImageSectionCb()
const FavAppsSectionProps = useStore((state)=>state["Home"]["FavAppsSection"]);
const FavAppsSectionIoProps = useIoStore((state)=>state["Home"]["FavAppsSection"]);
const FavAppsSectionCb = useFavAppsSectionCb()
const AppIconsGroupProps = useStore((state)=>state["Home"]["AppIconsGroup"]);
const AppIconsGroupIoProps = useIoStore((state)=>state["Home"]["AppIconsGroup"]);
const AppIconsGroupCb = useAppIconsGroupCb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const orderOnlineProps = useStore((state)=>state["Home"]["orderOnline"]);
const orderOnlineIoProps = useIoStore((state)=>state["Home"]["orderOnline"]);
const orderOnlineCb = useorderOnlineCb()
const ReservateProps = useStore((state)=>state["Home"]["Reservate"]);
const ReservateIoProps = useIoStore((state)=>state["Home"]["Reservate"]);
const ReservateCb = useReservateCb()
const LogoIconAssetProps = useStore((state)=>state["Home"]["LogoIconAsset"]);
const LogoIconAssetIoProps = useIoStore((state)=>state["Home"]["LogoIconAsset"]);
const LogoIconAssetCb = useLogoIconAssetCb()
const CartProps = useStore((state)=>state["Home"]["Cart"]);
const CartIoProps = useIoStore((state)=>state["Home"]["Cart"]);
const CartCb = useCartCb()
const PageProps = useStore((state)=>state["Home"]["Page"]);
const PageIoProps = useIoStore((state)=>state["Home"]["Page"]);
const PageCb = usePageCb()
const MenuProps = useStore((state)=>state["Home"]["Menu"]);
const MenuIoProps = useIoStore((state)=>state["Home"]["Menu"]);
const MenuCb = useMenuCb()
const HomeProps = useStore((state)=>state["Home"]["Home"]);
const HomeIoProps = useIoStore((state)=>state["Home"]["Home"]);
const HomeCb = useHomeCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const Title2Props = useStore((state)=>state["Home"]["Title2"]);
const Title2IoProps = useIoStore((state)=>state["Home"]["Title2"]);
const Title2Cb = useTitle2Cb()
const Title1Props = useStore((state)=>state["Home"]["Title1"]);
const Title1IoProps = useIoStore((state)=>state["Home"]["Title1"]);
const Title1Cb = useTitle1Cb()
const DescriptionTextProps = useStore((state)=>state["Home"]["DescriptionText"]);
const DescriptionTextIoProps = useIoStore((state)=>state["Home"]["DescriptionText"]);
const DescriptionTextCb = useDescriptionTextCb()
const ReservateButtonProps = useStore((state)=>state["Home"]["ReservateButton"]);
const ReservateButtonIoProps = useIoStore((state)=>state["Home"]["ReservateButton"]);
const ReservateButtonCb = useReservateButtonCb()
const OrderOnlineProps = useStore((state)=>state["Home"]["OrderOnline"]);
const OrderOnlineIoProps = useIoStore((state)=>state["Home"]["OrderOnline"]);
const OrderOnlineCb = useOrderOnlineCb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const TitleProps = useStore((state)=>state["Home"]["Title"]);
const TitleIoProps = useIoStore((state)=>state["Home"]["Title"]);
const TitleCb = useTitleCb()
const GrubHubProps = useStore((state)=>state["Home"]["GrubHub"]);
const GrubHubIoProps = useIoStore((state)=>state["Home"]["GrubHub"]);
const GrubHubCb = useGrubHubCb()
const DoorDashProps = useStore((state)=>state["Home"]["DoorDash"]);
const DoorDashIoProps = useIoStore((state)=>state["Home"]["DoorDash"]);
const DoorDashCb = useDoorDashCb()
const RappiProps = useStore((state)=>state["Home"]["Rappi"]);
const RappiIoProps = useIoStore((state)=>state["Home"]["Rappi"]);
const RappiCb = useRappiCb()
const PostmatesProps = useStore((state)=>state["Home"]["Postmates"]);
const PostmatesIoProps = useIoStore((state)=>state["Home"]["Postmates"]);
const PostmatesCb = usePostmatesCb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()

  return (<>
  <Flex className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}>
<Flex className="p-Home LogoIcon bpt" {...LogoIconProps} {...LogoIconCb} {...LogoIconIoProps}>
<Image className="p-Home LogoIconAsset bpt" {...LogoIconAssetProps} {...LogoIconAssetCb} {...LogoIconAssetIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Tabs bpt" {...TabsProps} {...TabsCb} {...TabsIoProps}>
<TextBox className="p-Home Home bpt" {...HomeProps} {...HomeCb} {...HomeIoProps}/>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home Menu bpt" {...MenuProps} {...MenuCb} {...MenuIoProps}/>
<TextBox className="p-Home Page bpt" {...PageProps} {...PageCb} {...PageIoProps}/>
<TextBox className="p-Home Cart bpt" {...CartProps} {...CartCb} {...CartIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Buttons bpt" {...ButtonsProps} {...ButtonsCb} {...ButtonsIoProps}>
<Button className="p-Home orderOnline bpt" {...orderOnlineProps} {...orderOnlineCb} {...orderOnlineIoProps}/>
<Button className="p-Home Reservate bpt" {...ReservateProps} {...ReservateCb} {...ReservateIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Description bpt" {...DescriptionProps} {...DescriptionCb} {...DescriptionIoProps}>
<Flex className="p-Home MainSection bpt" {...MainSectionProps} {...MainSectionCb} {...MainSectionIoProps}>
<Flex className="p-Home TitleNDescription bpt" {...TitleNDescriptionProps} {...TitleNDescriptionCb} {...TitleNDescriptionIoProps}>
<TextBox className="p-Home Title1 bpt" {...Title1Props} {...Title1Cb} {...Title1IoProps}/>
<TextBox className="p-Home Title2 bpt" {...Title2Props} {...Title2Cb} {...Title2IoProps}/>
<TextBox className="p-Home DescriptionText bpt" {...DescriptionTextProps} {...DescriptionTextCb} {...DescriptionTextIoProps}/>
<Flex className="p-Home ButtonGroup bpt" {...ButtonGroupProps} {...ButtonGroupCb} {...ButtonGroupIoProps}>
<Button className="p-Home OrderOnline bpt" {...OrderOnlineProps} {...OrderOnlineCb} {...OrderOnlineIoProps}/>
<Button className="p-Home ReservateButton bpt" {...ReservateButtonProps} {...ReservateButtonCb} {...ReservateButtonIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home ImageSection bpt" {...ImageSectionProps} {...ImageSectionCb} {...ImageSectionIoProps}>
<Image className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FavAppsSection bpt" {...FavAppsSectionProps} {...FavAppsSectionCb} {...FavAppsSectionIoProps}>
<TextBox className="p-Home Title bpt" {...TitleProps} {...TitleCb} {...TitleIoProps}/>
<Flex className="p-Home AppIconsGroup bpt" {...AppIconsGroupProps} {...AppIconsGroupCb} {...AppIconsGroupIoProps}>
<Image className="p-Home DoorDash bpt" {...DoorDashProps} {...DoorDashCb} {...DoorDashIoProps}/>
<Image className="p-Home Postmates bpt" {...PostmatesProps} {...PostmatesCb} {...PostmatesIoProps}/>
<Image className="p-Home Rappi bpt" {...RappiProps} {...RappiCb} {...RappiIoProps}/>
<Image className="p-Home GrubHub bpt" {...GrubHubProps} {...GrubHubCb} {...GrubHubIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex>
</Flex>
  </>);
}
