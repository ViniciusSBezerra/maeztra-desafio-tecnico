import NewColection from "../../assets/infocard/new-coletion.png"

export const InfoCard = () => {
    return <section className="px-[31px] pt-[23px] pb-10 lg:flex items-center max-w-[1598px] mx-auto lg:p-0 justify-between mb-10 lg:mb-20 mt-[23px] lg:mt-16">

        <div className="lg:min-[420px]" >
            <p className="text-2xl leading-[36.5px] font-bold">Lorem ipsum</p>

            <p className="text-sm leading-[21px] font-normal mt-4 lg:max-w-[420px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .</p>

        </div>
        <img className="mt-6 max-w-[1114px] h-auto max-h-[480px] w-full object-cover lg:mt-0" src={NewColection} alt="" />
    </section>
}