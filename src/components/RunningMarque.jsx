function RunningMarquee() {
    return (
        <div className="overflow-hidden w-full bg-[#fd9b40]">
            <marquee behavior="scroll" direction="left" loop="-1" className="text-lg flex justify-center items-center h-10 font-medium text-[#290c06]">
                🌟 Discover our latest products || Stay informed with exclusive updates! Subscribe to our newsletter for exciting details and be the first to know about upcoming discounts. 🎉
            </marquee>
        </div>
    );
}

export default RunningMarquee;
