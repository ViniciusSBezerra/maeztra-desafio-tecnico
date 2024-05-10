export const NewsLetter = () => {
    return <section className="w-full py-6 lg:py-10 px-[31px] bg-[#FAFAFA] border-y-2 border-[#EFEFEF]">

        <div className="max-w-[952px] mx-auto flex flex-col gap-2 lg:gap-[15px] lg:flex-row ">
            <p className="text-2xl font-bold leading-9 text-[#353535] text-center lg:text-left lg:max-w-[307px] w-full">Recebe Nossa Newsletter</p>

            <div className="flex gap-[15px] h-[26px] w-full max-w-[791px] md:gap-0 md:h-[40px]">
                <input className="w-full border border-[#353535] text-[#353535] pl-6 rounded font-normal text-sm leading-[21px] lg:border-r-[0] rounded-tr-none  rounded-br-none" type="text" placeholder="Digite seu e-email" /> <button className="px-5 bg-[#FAA500] text-sm font-bold leading-5 text-[#FFFFFF] w-full rounded max-w-[131px]"> Enviar</button>
            </div>
        </div>
    </section>

}