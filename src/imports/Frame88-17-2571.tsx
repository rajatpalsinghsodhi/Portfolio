import imgScreenshot20250415At72749Pm1 from "figma:asset/28eadaec43f6164bec53401cc3730d1abaacc6cb.png";

export default function Frame88() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 1920 1080\\\' preserveAspectRatio=\\\'none\\\'><g transform=\\\'matrix(-74.5 -39.15 18.118 -34.478 1920 1080)\\\'><foreignObject x=\\\'-243.84\\\' y=\\\'-243.84\\\' width=\\\'487.68\\\' height=\\\'487.68\\\'><div xmlns=\\\'http://www.w3.org/1999/xhtml\\\' style=\\\'background-image: conic-gradient(from 90deg, rgba(101, 61, 239, 1) -1.2265%, rgba(102, 65, 193, 1) 6.7518%, rgba(103, 68, 147, 1) 14.73%, rgba(104, 71, 101, 1) 22.708%, rgba(105, 74, 55, 1) 30.687%, rgba(104, 71, 101, 1) 47.708%, rgba(103, 68, 147, 1) 64.73%, rgba(102, 65, 193, 1) 81.752%, rgba(101, 61, 239, 1) 98.773%, rgba(102, 65, 193, 1) 106.75%, rgba(103, 68, 147, 1) 114.73%, rgba(104, 71, 101, 1) 122.71%, rgba(105, 74, 55, 1) 130.69%); opacity:1; height: 100%; width: 100%;\\\'></div></foreignObject></g></svg>')" }}>
      <div className="absolute bg-[rgba(0,0,0,0)] h-[1080px] left-[-307px] top-1/2 translate-y-[-50%] w-[1646px]" />
      <div className="absolute left-[960px] size-[15px] top-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.5" cy="7.5" fill="var(--fill-0, #FFD755)" id="Ellipse 11" r="7.5" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] left-[129px] text-[#ff9d00] text-[96px] top-[106.5px] tracking-[-2.88px] translate-y-[-50%] w-[958px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.2]">Data Pipeline Explained</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-[129px] text-[15px] text-white top-[688px] tracking-[-0.45px] translate-y-[-50%] w-[657px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.2] mb-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          4. Automated and On-Demand Refresh
        </p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Auto-Refresh Cycle: The pipeline automatically refreshes all data every 60 seconds, ensuring the UI is always up-to-date with the latest market data.</span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">This auto-refresh ensures that users always have the most accurate information without needing to manually reload the page.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Immediate User-Triggered Updates: When the user changes the timeframe or selects a different cryptocurrency, the relevant data is fetched and updated instantly.</span>
          </li>
          <ul>
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">This responsiveness improves user experience, providing them with real-time updates tailored to their selection.</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.2] mb-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          5. Dynamic Publishing (Visualization)
        </p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Multiple Visualization Types: The processed data is published to the UI through interactive line charts, sparklines, and pie charts using D3.js.</span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">These visualizations allow users to analyze trends, price movements, and volume distributions in a visually engaging and interactive way.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Event-Driven Updates: The UI listens for data changes and re-renders only the affected components.</span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">This ensures efficiency and responsiveness by updating only what is necessary, rather than refreshing the entire UI unnecessarily.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Tooltips and Interactivity: Visualizations respond to user hovers, clicks, and selections, providing detailed and context-sensitive information for an interactive experience.</span>
          </li>
          <ul>
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">This adds another layer of usability, allowing users to explore and interact with data directly.</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.2] mb-0" style={{ fontVariationSettings: "'opsz' 14" }}>{`6. Problem Solving & Robustness`}</p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Error Handling: The system includes error handling for failed API requests, missing data, and invalid user actions, ensuring smooth operation.</span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">The system remains resilient in case of external failures, with fallback mechanisms to maintain functionality.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Scalability: The modular structure of the pipeline allows for easy addition of new cryptocurrencies, timeframes, or visualization types as needed.</span>
          </li>
          <ul className="mb-0">
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">This ensures the project can scale to accommodate new features without major rework.</span>
            </li>
          </ul>
          <li className="list-disc mb-0 ms-[22.5px]">
            <span className="leading-[1.2]">Performance: By caching data and only updating the UI when necessary, the app remains fast, even as data grows or user interactions scale up.</span>
          </li>
          <ul>
            <li className="list-disc ms-[45px]">
              <span className="leading-[1.2]">This makes the system responsive and efficient, even with large datasets or complex user interactions.</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[1.2]">&nbsp;</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[1.2] left-[1041px] text-[15px] text-white top-[517px] tracking-[-0.45px] translate-y-[-50%] w-[657px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">This project demonstrates a high level of capacity with dynamic data by implementing a robust data pipeline that collects, processes, stores, transforms, and publishes real-time cryptocurrency data. Data is collected from multiple Binance API endpoints, both automatically (every 60 seconds) and in response to user actions (such as changing timeframes). The pipeline normalizes and aggregates this data, storing it efficiently in memory for rapid access. It supports complex transformations, such as dynamic timeframe selection and volume aggregation for pie chart visualization. The processed data is then published to the UI through interactive, event-driven visualizations, including line charts, sparklines, and pie charts. The system is resilient, with error handling and modular design, and is capable of scaling to additional data sources or visualization types. This approach ensures that users always see the most current and relevant information, and that the application remains responsive and robust under a variety of dynamic conditions.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['DM_Sans:Black',_sans-serif] font-black mb-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          In Summary:
        </p>
        <p>{`This cryptocurrency tracking system exemplifies the use of complex methods and techniques to collect, process, store, transform, and publish dynamic data. The pipeline employs real-time updates, user-driven interactions, and automated refresh cycles to maintain an efficient and user-responsive environment. The system's modular design and error handling mechanisms ensure that it can scale and adapt to new requirements as the user’s needs evolve.`}</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] left-[129px] text-[32px] text-white top-[245px] tracking-[-0.96px] translate-y-[-50%] w-[657px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.2]">Justification of Data Pipeline Process for Cryptocurrency Tracker</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3823256492614746)+(var(--transform-inner-height)*0.9240276217460632)))] items-center justify-center left-[530px] top-[295px] w-[calc(1px*((var(--transform-inner-height)*0.3823256492614746)+(var(--transform-inner-width)*0.9240276217460632)))]" style={{ "--transform-inner-width": "1179.0625", "--transform-inner-height": "460.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[22.478deg]">
          <div className="h-[460.201px] relative w-[1179.07px]" data-name="Screenshot 2025-04-15 at 7.27.49 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.09] pointer-events-none size-full" src={imgScreenshot20250415At72749Pm1} />
          </div>
        </div>
      </div>
    </div>
  );
}