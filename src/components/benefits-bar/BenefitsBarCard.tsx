

interface BenefitsBarCardProps {
    title: string
    text: string
    children: any
}
export const BenefitsBarCard = ({ title, text, children }: BenefitsBarCardProps) => {
    return <div className="bg-[#EFEFEF] pl-[26px] pt-[11px] pb-[14px] pr-[19px] flex items-center gap-[21px] min-w-[298px] mx-auto">
        <img className="w-8 h-8" src={children} alt="" />
        <p className="font-bold text-sm leading-[21.29px]">{title} <br />
            <span className="font-normal text-[12px] leading-[18.25px]">{text}</span>
        </p>
    </div>
}