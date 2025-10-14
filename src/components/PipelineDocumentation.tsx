import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageZoom } from "./ImageZoom";
import imgDataSource from "figma:asset/88203d197e02416063884bca01cf8629814726d4.png";
import imgCacheLayer from "figma:asset/449d418ddcc1e81a8ee10f383f5b0298fc27fe41.png";
import imgCryptoList from "figma:asset/8adc1c7fac87aa8661b741bc2600def40b3d25ed.png";
import imgDetailChart from "figma:asset/5f1b2828beec295fc44f152c0ccde5292a7eb2fc.png";
import imgVolumeChart from "figma:asset/0a96347c9a180fdd9528748acec78d625e8d6882.png";
import imgPieChart from "figma:asset/5858732ab8d7a16614a6ced60f4f73c76788d27c.png";
import imgSparklines from "figma:asset/527980f1530fb871d9c93e21466b833fc217aae1.png";
import imgHumanInteraction from "figma:asset/ab07953721e2f2bbb73346175b8931810c218099.png";
import imgAutoUpdate from "figma:asset/6cfc478c39883b1f581550f4a8e5f3e52c8d4236.png";
import imgTimeframeChange from "figma:asset/56d59adf9aedbaff6b4a51105cb5d58025f39b07.png";

export function PipelineDocumentation() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">Deep Dive</Badge>
        <h3 className="mb-4">Complete Data Pipeline Documentation</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore the comprehensive technical breakdown of how data flows through the system, 
          from collection to visualization, with detailed explanations of each component and its role.
        </p>
      </div>

      {/* 1. Data Source Layer */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              1
            </div>
            <CardTitle>Data Source Layer: Binance API</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The foundation of the system relies on real-time cryptocurrency market data from the Binance API. 
            This provides accurate, up-to-date information for all visualizations.
          </p>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="mb-3">API Endpoints Used:</h4>
            <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
              <li><strong>Real-time price data:</strong> <code className="bg-muted px-2 py-0.5 rounded text-sm">/ticker/24hr</code> - Current prices and 24-hour statistics</li>
              <li><strong>Historical data:</strong> <code className="bg-muted px-2 py-0.5 rounded text-sm">/klines</code> - Candlestick data for charts</li>
              <li><strong>Update frequency:</strong> Every 60 seconds for automatic refresh</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="mb-3">Implementation Code:</h4>
            <ImageZoom 
              src={imgDataSource} 
              alt="Data source API implementation code" 
              className="rounded-lg border border-border w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* 2. Data Processing Layer */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              2
            </div>
            <CardTitle>Data Processing Layer</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Raw data from the API is processed and transformed using HTML/JavaScript to prepare it for visualization. 
            This includes normalization, calculations, and formatting.
          </p>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="mb-3">Processing Steps:</h4>
            <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
              <li><strong>Price normalization:</strong> Standardizing price data across different cryptocurrencies</li>
              <li><strong>Volume calculations:</strong> Computing trading volume metrics and percentages</li>
              <li><strong>Data formatting:</strong> Converting raw API responses into visualization-ready structures</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 3. Cache Layer */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              3
            </div>
            <CardTitle>Temporary Cache Storage</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            To optimize performance and reduce unnecessary API calls, processed data is temporarily cached. 
            This ensures smooth user interactions and faster retrieval of recently accessed data.
          </p>

          <div className="mt-4">
            <ImageZoom 
              src={imgCacheLayer} 
              alt="Cache layer implementation" 
              className="rounded-lg border border-border w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* 4. Visualization Layer */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              4
            </div>
            <CardTitle>Visualization Layer: D3.js Rendering</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            The visualization layer uses D3.js to create dynamic, interactive charts and displays. 
            Each component serves a specific purpose in presenting market data to users.
          </p>

          {/* 4.1 Crypto List */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">4.1 Rendering the Crypto List</h4>
            <p className="text-muted-foreground">
              This function updates the main list of cryptocurrencies, displaying their current prices, 
              24-hour changes, and mini-charts for quick trend visualization.
            </p>
            <ImageZoom 
              src={imgCryptoList} 
              alt="Crypto list rendering code" 
              className="rounded-lg border border-border w-full"
            />
          </div>

          {/* 4.2 Detailed Chart */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">4.2 Drawing the Detailed Chart</h4>
            <p className="text-muted-foreground">
              This function creates the main interactive price chart that appears when a user expands a cryptocurrency. 
              It shows historical price movements with customizable timeframes (1hr, 24hr, 7 days, 1 month).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ImageZoom 
                src={imgDetailChart} 
                alt="Detailed chart implementation" 
                className="rounded-lg border border-border w-full"
              />
              <ImageZoom 
                src={imgVolumeChart} 
                alt="Volume chart code" 
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>

          {/* 4.3 Volume Pie Chart */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">4.3 Drawing the Volume Pie Chart</h4>
            <p className="text-muted-foreground">
              This function creates and updates the pie chart showing volume distribution across different 
              cryptocurrencies, helping users understand market activity at a glance.
            </p>
            <ImageZoom 
              src={imgPieChart} 
              alt="Pie chart implementation" 
              className="rounded-lg border border-border w-full"
            />
          </div>

          {/* 4.4 Sparklines */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">4.4 Sparklines (Mini-Charts)</h4>
            <p className="text-muted-foreground">
              These are the compact trend indicators next to each cryptocurrency in the main list, 
              providing quick visual feedback on price movements without requiring user interaction.
            </p>
            <ImageZoom 
              src={imgSparklines} 
              alt="Sparkline implementation" 
              className="rounded-lg border border-border w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* 5. Human Interaction Integration */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              5
            </div>
            <CardTitle>Human Interaction Integration</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The system responds to user actions through event handlers, enabling interactive exploration 
            of cryptocurrency data. Users can filter, expand, and customize their view of the market.
          </p>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="mb-3">Interactive Features:</h4>
            <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
              <li><strong>Event handlers:</strong> Capture and respond to user clicks, hovers, and selections</li>
              <li><strong>Dynamic data updates:</strong> Immediately refresh visualizations when users change parameters</li>
              <li><strong>Interactive tooltips:</strong> Display detailed information on hover for deeper insights</li>
            </ul>
          </div>

          <div className="mt-4">
            <ImageZoom 
              src={imgHumanInteraction} 
              alt="Event handler implementation" 
              className="rounded-lg border border-border w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* 6. Auto-Update Cycle */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              6
            </div>
            <CardTitle>Auto-Update Cycle</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            To ensure users always see current market conditions, the dashboard implements an automatic 
            refresh cycle that updates all data every 60 seconds. Additionally, user interactions 
            trigger immediate data refreshes for the selected timeframe.
          </p>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="mb-3">Refresh Mechanisms:</h4>
            <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
              <li>The dashboard automatically refreshes all data (prices, volumes, charts) every minute</li>
              <li>Users always see near real-time information without needing to manually refresh the page</li>
              <li>When users change timeframes (1hr → 24hr), the system immediately fetches and displays relevant data</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="mb-2">Auto-Refresh Timer:</h4>
              <ImageZoom 
                src={imgAutoUpdate} 
                alt="Auto-update implementation" 
                className="rounded-lg border border-border w-full"
              />
            </div>
            <div>
              <h4 className="mb-2">User-Triggered Refresh:</h4>
              <ImageZoom 
                src={imgTimeframeChange} 
                alt="Timeframe change handler" 
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Justification */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Design Justification & Human-Centered Approach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="mb-3">1. Dynamic Data Collection</h4>
            <div className="bg-background/80 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-medium mb-2">Multiple Endpoints:</p>
                <p className="text-muted-foreground text-sm">
                  The project fetches both real-time and historical data from the Binance API, using endpoints 
                  like <code className="bg-muted px-2 py-0.5 rounded text-xs">/ticker/24hr</code> for current 
                  prices and volumes and <code className="bg-muted px-2 py-0.5 rounded text-xs">/klines</code> for 
                  historical candlesticks. This allows the system to gather up-to-date price information and 
                  detailed historical data for accurate trend analysis.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3">2. User-Centered Design Philosophy</h4>
            <div className="bg-background/80 p-4 rounded-lg space-y-3">
              <p className="text-muted-foreground text-sm">
                Every component in the pipeline was designed with the end user in mind:
              </p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground text-sm pl-5">
                <li><strong>Real-time updates</strong> ensure traders never miss critical market movements</li>
                <li><strong>Interactive visualizations</strong> empower users to explore data at their own pace</li>
                <li><strong>Multiple timeframes</strong> support both day traders and long-term investors</li>
                <li><strong>Visual feedback</strong> (sparklines, color coding) enables split-second decision making</li>
                <li><strong>Performance optimization</strong> through caching ensures smooth interactions even with frequent updates</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-3">3. Technical Excellence Meets Usability</h4>
            <div className="bg-background/80 p-4 rounded-lg">
              <p className="text-muted-foreground text-sm">
                The data pipeline demonstrates how robust technical architecture can enhance user experience. 
                By separating concerns (data collection, processing, caching, visualization), the system remains 
                maintainable while delivering a seamless, responsive interface. The automatic refresh cycle and 
                event-driven updates create the illusion of instantaneous data while actually implementing smart 
                optimization strategies behind the scenes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
