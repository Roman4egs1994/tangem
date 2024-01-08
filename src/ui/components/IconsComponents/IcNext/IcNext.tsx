import {IconProps, IconWrapper} from "@/ui/components/IconsComponents/IconWrapper";


export const IcNext = (allProps: IconProps) => {
        const {svgProps: props, ...restProps} = allProps

        return (
            <IconWrapper
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%">
                        <path
                            fill={'currentColor'}
                            d="m531.692-480-184-184L376-692.308 588.308-480 376-267.692 347.692-296l184-184Z"
                        />
                    </svg>
                }
                {...restProps}
            />
        )
    }


;