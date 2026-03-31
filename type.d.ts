import { IconSvgObject } from "@hugeicons/core-free-icons";

declare global {
    interface TabIconProps {
        focused: boolean;
        icon: IconSvgObject;
    }
}
