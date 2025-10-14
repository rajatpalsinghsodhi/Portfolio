import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageZoom } from "./ImageZoom";
import { AlertCircle, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";

// Iteration images
import imgInitialBlank from "figma:asset/6823e8ef83bb0fad272e4800ea60f2d9c00d0f73.png";
import imgImprovedPopulated from "figma:asset/268e70905299255d343e178fda9cb03042423084.png";
import imgSmoothCurves from "figma:asset/c9f8a25f2d5a75726d43750574af0490e196468d.png";
import imgTooltipAdded from "figma:asset/aed3bbe7545d28bea664e81c010b9a0e26d1d6e8.png";
import imgTimeframeSelector from "figma:asset/64fcb2de79db4d35940fa11e8e204f5e3c6340b9.png";
import imgFinalLayout from "figma:asset/5ea8e802811e27cc08e152b22af9d37fc9c37790.png";
import imgExpandedView from "figma:asset/941fb86d0f4814871515451652f3c664bd242a30.png";
import imgAxisLabeling from "figma:asset/62bbb3f886212e88dcd0c4509a1f51e4eed8f861.png";
import imgListWithPie from "figma:asset/ec57d312b9b664ce89c4c2a3c244a615bfe3252f.png";
import imgFinalBranding from "figma:asset/cdd591c5013f01d53ae698070df5c7789edeb42d.png";
// Process visualization images
import imgFeatureCards from "figma:asset/020f9162194235b4fdd27982a3145485016aa571.png";
import imgScrollingPieChart from "figma:asset/bfcfab9532bba20f4a80d6f51a8393d9b92e712a.png";
import imgMobileResponsive from "figma:asset/d8110e7566674dc8b0f8be3a0a959b8fa9406d6e.png";
// Final product images
import imgMobileView1 from "figma:asset/883e50aaae103d0f3d43380e477916ecf977844f.png";
import imgMobileView2 from "figma:asset/00c144e1a125a78ad0cd20335ee613651bdf099b.png";
import imgMobileView3 from "figma:asset/60e8e4195326cae043926a1ac44394db001b0ba0.png";
import imgDesktopFinal from "figma:asset/c9339c3ec67882a71f5353a9c36e1cae23408dcc.png";
import imgTabletView from "figma:asset/46331927dde7a8e2ca45b483b0fc83317594c85c.png";

export function IterationDocumentation() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">Design Evolution</Badge>
        <h3 className="mb-4">Iteration & Design Process</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Follow the journey from initial prototype to final design. Each iteration addressed specific 
          usability issues and incorporated user feedback to create a more intuitive, functional experience.
        </p>
      </div>

      {/* Stage 1: Initial Issues */}
      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive/10 text-destructive shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <CardTitle>Stage 1: Initial Prototype - Identifying Issues</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Issues List */}
            <div className="space-y-4">
              <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                <h4 className="mb-3 text-destructive">Issue #1: Blank Main Chart</h4>
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li>The large chart area was empty except for axes and labels</li>
                  <li>No data lines or legend were visible</li>
                  <li>Suggested that either data was not loaded, or the chart rendering failed</li>
                  <li>Users couldn't see any price trends or make comparisons</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="mb-3">Issue #2: Limited Data Display</h4>
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li>While cryptocurrency cards showed prices and 24h changes, the main visualization was missing</li>
                  <li>This created a disconnect between available data and its presentation</li>
                </ul>
              </div>
            </div>

            {/* Right: Screenshot */}
            <div>
              <p className="mb-3 text-muted-foreground">Initial prototype with blank chart area:</p>
              <ImageZoom 
                src={imgInitialBlank} 
                alt="Initial stage showing blank chart area" 
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 2: First Improvements */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <CardTitle>Stage 2: First Improvements - Data Rendering</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Screenshot */}
            <div>
              <p className="mb-3 text-muted-foreground">Improved version with populated chart:</p>
              <ImageZoom 
                src={imgImprovedPopulated} 
                alt="Improved stage showing populated chart with multiple lines" 
                className="rounded-lg border border-border w-full"
              />
            </div>

            {/* Right: Improvements */}
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="mb-3 text-primary">✓ Main Chart Now Populated</h4>
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li>Chart displays multiple colored lines, each representing a cryptocurrency</li>
                  <li>Legend shows the name and current price for each crypto</li>
                  <li>Y-axis labeled as "Price (USD - Log Scale)" and X-axis as "Time (24h)"</li>
                  <li>Data loading and chart rendering issues were fixed</li>
                </ul>
              </div>
              
              <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                <h4 className="mb-3 text-destructive">✗ New Issues Discovered</h4>
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li>Visualization was cluttered with too many overlapping lines</li>
                  <li>Difficult to distinguish individual cryptocurrency trends</li>
                  <li>Cramped data made it hard to extract meaningful insights</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 3: Visual Refinements */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <CardTitle>Stage 3: Visual & Functional Enhancements</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {/* Change 1: Smooth Curves */}
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Enhancement #1: Smooth Curve Interpolation</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Before:</strong> Lines were straight, connecting data points with sharp angles
                  </p>
                  <p className="text-muted-foreground">
                    <strong>After:</strong> Lines are now smooth and curved, making trends easier to follow
                  </p>
                  <p className="text-muted-foreground">
                    <strong>How:</strong> Implemented using curve functions (d3.curveMonotoneX) for natural-looking interpolation
                  </p>
                </div>
                <ImageZoom 
                  src={imgSmoothCurves} 
                  alt="Chart with smooth curve interpolation" 
                  className="rounded-lg border border-border w-full"
                />
              </div>
            </div>

            {/* Change 2: Legend Improvements */}
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Enhancement #2: Improved Legend Formatting</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li><strong>Before:</strong> Legend was present but less visually distinct</li>
                  <li><strong>After:</strong> Clearer legend with better spacing and alignment</li>
                  <li>Each cryptocurrency's color is more prominent and easier to identify</li>
                  <li>Improved readability helps users quickly map colors to currencies</li>
                </ul>
              </div>
            </div>

            {/* Change 3: Card Layout */}
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Enhancement #3: Consistent Card Layout</h4>
              <p className="text-muted-foreground">
                The cryptocurrency cards below the chart maintain consistency while achieving a cleaner, 
                more uniform appearance with improved spacing and visual hierarchy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 4: Interactive Features */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              4
            </div>
            <CardTitle>Stage 4: Adding Interactivity</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {/* Interactive Tooltip */}
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Feature #1: Interactive Tooltips</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="font-medium mb-2">Before:</p>
                    <p className="text-muted-foreground">No tooltip appeared when hovering over the chart</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="font-medium mb-2">After:</p>
                    <p className="text-muted-foreground mb-2">When hovering over a data point, users see:</p>
                    <ul className="list-disc list-outside space-y-1 text-muted-foreground pl-5">
                      <li>The exact price at that time</li>
                      <li>The timestamp of the data point</li>
                      <li>The percentage change at that point</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      <strong>Implementation:</strong> D3.js mouseover events with dynamic positioning
                    </p>
                  </div>
                </div>
                <ImageZoom 
                  src={imgTooltipAdded} 
                  alt="Interactive tooltip on hover" 
                  className="rounded-lg border border-border w-full"
                />
              </div>
            </div>

            {/* Highlighting Data Points */}
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Feature #2: Visual Data Point Highlighting</h4>
              <p className="text-muted-foreground">
                Hovered data points are now visually highlighted with a dot or marker, making it easier 
                to see exactly which value is being inspected. This provides immediate visual feedback 
                and improves data exploration.
              </p>
            </div>

            {/* Color-Coded Changes */}
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Feature #3: Color-Coded 24h Change</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li><strong>Before:</strong> 24h change was shown in neutral color</li>
                  <li><strong>After:</strong> Color-coded with red for negative and green for positive changes</li>
                  <li>Background of change value is highlighted for better visibility</li>
                  <li>Users can spot positive/negative trends at a glance without reading numbers</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 5: Detailed Comparisons - Images 4→5 and 5→6 */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              5
            </div>
            <CardTitle>Stage 5: Refinement Details - Timeframe & Layout Transitions</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Image 4 to Image 5 Comparison */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">Transition: Image 4 → Image 5</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">1. Timeframe Selector Placement/Style</h5>
                  <p className="text-muted-foreground text-sm">
                    The timeframe selector (1 Hour, 24 Hours, 7 Days) is now more visually 
                    integrated and prominent, making it easier for users to change time periods.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">2. Card Styling</h5>
                  <p className="text-muted-foreground text-sm">
                    The cards are more uniform, with consistent padding and spacing throughout 
                    the interface for better visual harmony.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">3. Chart Area</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>The chart area is visually cleaner, with less clutter and more focus on the lines</li>
                    <li>Lost the legend and axis labeling due to coding error (addressed in next iteration)</li>
                  </ul>
                </div>
              </div>
              
              <ImageZoom 
                src={imgTimeframeSelector} 
                alt="Image 5 - Timeframe selector refinements" 
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>

          {/* Image 5 to Image 6 Comparison */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">Transition: Image 5 → Image 6</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ImageZoom 
                src={imgFinalLayout} 
                alt="Image 6 - Final list layout with sparklines" 
                className="rounded-lg border border-border w-full"
              />
              
              <div className="space-y-3">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">1. Layout Shift</h5>
                  <p className="text-muted-foreground text-sm">
                    Switched from a dashboard with a main chart and horizontal cards to a 
                    vertical list with sparklines for better scanability.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">2. Sparklines Added</h5>
                  <p className="text-muted-foreground text-sm">
                    Each crypto now has a small red sparkline showing its recent price trend, 
                    providing instant visual feedback.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">3. Emphasis on Change</h5>
                  <p className="text-muted-foreground text-sm">
                    The 24h change is now a large, colored badge, making it easy to spot big movers at a glance.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">4. Expanded List & Cleaner UI</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>More cryptocurrencies are shown (e.g., Cardano)</li>
                    <li>New design is more focused on quick scanning and comparison</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 6: Expandable Detail Views */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              6
            </div>
            <CardTitle>Stage 6: Interactive Detail Expansion - Images 7 & 8</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Image 7 */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">Image 7: Expandable Detail View</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Expandable Detail View</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    When a cryptocurrency (e.g., Bitcoin) is clicked or selected, a detailed section expands below it.
                  </p>
                  <p className="text-muted-foreground text-sm font-medium mb-2">This section includes:</p>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>A larger, detailed price chart for the selected coin (with dots for each data point)</li>
                    <li>A stats/info panel with name, ticker, and timeframe selector</li>
                    <li>Current price, 24h change, 24h high/low, and 24h volume</li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Other Coins Collapsed</h5>
                  <p className="text-muted-foreground text-sm">
                    Only the selected coin shows the expanded view; others remain in summary form, 
                    maintaining focus and reducing clutter.
                  </p>
                </div>
              </div>
              
              <ImageZoom 
                src={imgExpandedView} 
                alt="Image 7 - Expandable detail view" 
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>

          {/* Image 8 */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">Image 8: Axis Labeling & Integration</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ImageZoom 
                src={imgAxisLabeling} 
                alt="Image 8 - Proper axis labeling" 
                className="rounded-lg border border-border w-full"
              />
              
              <div className="space-y-3">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Default Expanded View</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>The expanded detail view for Bitcoin is still present</li>
                    <li>AXIS labeling is now clearly visible with proper values ($)</li>
                    <li>The chart and stats update to reflect the selected timeframe</li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Slight UI Tweaks</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>The expanded card and stats panel are visually more integrated with the rest of the list</li>
                    <li>The sparkline for Bitcoin shows a different (shorter) time window, matching the selected timeframe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 7: Final Polish & Branding */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              7
            </div>
            <CardTitle>Stage 7: Final Polish - Images 9 & 10</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Image 9 */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">Image 9: List + Volume Distribution</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Layout Structure</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li><strong>Left:</strong> Vertical list of cryptocurrencies with rank, name, ticker, sparkline, price, and 24h change</li>
                    <li><strong>Right:</strong> Trading Volume Distribution pie chart (donut style) with legend</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground text-sm">
                    This layout provides both detailed individual crypto data and an overview of 
                    market volume distribution, catering to different analysis needs.
                  </p>
                </div>
              </div>
              
              <ImageZoom 
                src={imgListWithPie} 
                alt="Image 9 - List view with volume pie chart" 
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>

          {/* Image 10 */}
          <div className="border-l-4 border-primary/30 pl-4 space-y-3">
            <h4 className="text-primary">Image 10: Complete Product with Branding</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ImageZoom 
                src={imgFinalBranding} 
                alt="Image 10 - Final branded product" 
                className="rounded-lg border border-border w-full"
              />
              
              <div className="space-y-3">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Branding Update</h5>
                  <p className="text-muted-foreground text-sm">
                    Title changed to <strong>"Crypto Price Tracker"</strong> with a new subtitle: 
                    "Real-time cryptocurrency prices and market data."
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Enhanced Layout</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li><strong>Left:</strong> Same vertical list of cryptocurrencies</li>
                    <li><strong>Left panel:</strong> Large, detailed price chart for Bitcoin</li>
                    <li><strong>Right panel:</strong> Stats/info panel with comprehensive metrics</li>
                    <li><strong>Right:</strong> Volume distribution pie chart with metadata</li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Pie Chart Enhancements</h5>
                  <p className="text-muted-foreground text-sm">
                    Now includes "Updated" time and "Total Volume" above the chart, plus a 
                    short description of what the chart represents.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h5 className="mb-2">Expanded Details Integration</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>The selected coin (Bitcoin) shows detailed chart and stats</li>
                    <li>Rest of the list remains collapsed for clean presentation</li>
                    <li>All elements work together cohesively</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 8: Feature Integration - Image 11 */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              8
            </div>
            <CardTitle>Stage 8: Complete Feature Integration - Image 11</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="mb-3 text-primary">Four Feature Cards at the Top</h4>
                <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                  <li><strong>Price List:</strong> Real-time cryptocurrency prices</li>
                  <li><strong>Detailed Charts:</strong> Interactive price history</li>
                  <li><strong>Volume Analysis:</strong> Trading volume metrics</li>
                  <li><strong>Auto Updates:</strong> Automatic data refresh</li>
                </ul>
                <p className="text-muted-foreground text-sm mt-3">
                  Each card has an icon, bold title, and a short description to immediately communicate 
                  the dashboard's capabilities to new users.
                </p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="mb-3 text-primary">Crypto List</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Vertical list of cryptocurrencies with rank, name, ticker, sparkline, price, and 
                  24h change (by default, color-coded).
                </p>
                <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                  <li>Positive changes are green, negative are red</li>
                  <li>Sparklines provide quick visual trend indicators</li>
                  <li>Clean, scannable layout for quick comparisons</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="mb-3 text-primary">Trading Volume Distribution</h4>
                <p className="text-muted-foreground text-sm">
                  On the right, a donut pie chart with a legend showing volume distribution across 
                  cryptocurrencies. Above the chart: description, "Updated" time, and "Total Volume" 
                  (all populated with real values).
                </p>
              </div>
            </div>

            <ImageZoom 
              src={imgFeatureCards} 
              alt="Image 11 - Complete feature integration" 
              className="rounded-lg border border-border w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stage 9: Final UX Refinements - Image 12 */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              9
            </div>
            <CardTitle>Stage 9: Final UX Refinements - Image 12</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Pie Chart Interactivity</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground text-sm">
                    Hovering over a segment shows a tooltip with the coin's name, volume, and share percentage. 
                    This provides detailed information on demand without cluttering the interface.
                  </p>
                </div>
                <ImageZoom 
                  src={imgScrollingPieChart} 
                  alt="Pie chart hover interaction" 
                  className="rounded-lg border border-border w-full"
                />
              </div>
            </div>

            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Sticky Pie Chart Position</h4>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="text-muted-foreground text-sm mb-2">
                  <strong>Innovation:</strong> The pie chart position remains constant while users scroll 
                  over the currencies for better UI/UX.
                </p>
                <p className="text-muted-foreground text-sm">
                  Even when the user scrolls to the bottom of the website, they are able to see the pie 
                  chart right beside the crypto they are observing. This maintains context and allows for 
                  continuous comparison between individual coins and overall market distribution.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-primary/30 pl-4 space-y-3">
              <h4 className="text-primary">Responsive Design Implementation</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground text-sm">
                    Made the web app fully responsive for mobile and tablet devices. The layout adapts 
                    intelligently to different screen sizes, ensuring usability across all devices without 
                    sacrificing functionality or visual clarity.
                  </p>
                </div>
                <ImageZoom 
                  src={imgMobileResponsive} 
                  alt="Mobile responsive design" 
                  className="rounded-lg border border-border w-full"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 10: Final Product Showcase */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              10
            </div>
            <CardTitle>Stage 10: Final Product - Multi-Device Experience</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Live Link */}
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 text-center">
            <h4 className="mb-3 text-primary">🔗 Experience the Live Dashboard</h4>
            <p className="text-muted-foreground mb-4">
              Explore the fully functional cryptocurrency price tracker and interact with real-time data.
            </p>
            <a 
              href="https://public--main--cryptocurrencytracker--sodhraja.ixdcoder.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Live Visualization
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Desktop View */}
          <div className="space-y-3">
            <h4 className="text-primary">Desktop Experience</h4>
            <div className="bg-muted/30 p-6 rounded-lg">
              <ImageZoom 
                src={imgDesktopFinal} 
                alt="Final desktop view with all features" 
                className="rounded-lg border border-border w-full mb-4"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="mb-2">Key Features</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>Four prominent feature cards explaining capabilities</li>
                    <li>Real-time price list with sparklines and color-coded changes</li>
                    <li>Expandable detail view for in-depth analysis</li>
                    <li>Interactive price chart with multiple timeframes</li>
                    <li>Trading volume distribution pie chart with tooltips</li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2">Technical Excellence</h5>
                  <ul className="list-disc list-outside space-y-1 text-muted-foreground text-sm pl-5">
                    <li>Built with HTML, CSS, JavaScript, and D3.js</li>
                    <li>Fetches live data from Binance API</li>
                    <li>Auto-refreshing data every minute</li>
                    <li>Client-side rendering for instant updates</li>
                    <li>Smooth animations and transitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Views */}
          <div className="space-y-3">
            <h4 className="text-primary">Mobile & Tablet Responsive Views</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <ImageZoom 
                  src={imgMobileView1} 
                  alt="Mobile view - crypto list" 
                  className="rounded-lg border border-border w-full"
                />
                <p className="text-muted-foreground text-sm text-center">
                  <strong>Mobile:</strong> Crypto list with sparklines
                </p>
              </div>
              <div className="space-y-2">
                <ImageZoom 
                  src={imgMobileView2} 
                  alt="Mobile view - detailed chart" 
                  className="rounded-lg border border-border w-full"
                />
                <p className="text-muted-foreground text-sm text-center">
                  <strong>Mobile:</strong> Expandable detail view
                </p>
              </div>
              <div className="space-y-2">
                <ImageZoom 
                  src={imgMobileView3} 
                  alt="Mobile view - volume chart" 
                  className="rounded-lg border border-border w-full"
                />
                <p className="text-muted-foreground text-sm text-center">
                  <strong>Mobile:</strong> Volume pie chart
                </p>
              </div>
            </div>
          </div>

          {/* Tablet View */}
          <div className="space-y-3">
            <h4 className="text-primary">Tablet Optimization</h4>
            <div className="bg-muted/30 p-6 rounded-lg">
              <ImageZoom 
                src={imgTabletView} 
                alt="Tablet view of complete dashboard" 
                className="rounded-lg border border-border w-full mx-auto max-w-2xl"
              />
              <p className="text-muted-foreground text-sm text-center mt-4">
                Tablet layout balances information density with touch-friendly interactions
              </p>
            </div>
          </div>

          {/* Product Summary */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-6 rounded-lg border border-primary/20">
            <h4 className="mb-4">Cryptocurrency Price Tracker Dashboard - Summary</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="mb-2 text-primary">User Experience</h5>
                <ul className="list-disc list-outside space-y-1 text-muted-foreground pl-5">
                  <li><strong>Intuitive:</strong> Easy interaction with expandable details and tooltips</li>
                  <li><strong>Visual:</strong> Color-coded charts make trends easy to spot at a glance</li>
                  <li><strong>Automatic:</strong> Data auto-refreshes, no need for manual updates</li>
                  <li><strong>Accessible:</strong> Works seamlessly across desktop, tablet, and mobile</li>
                </ul>
              </div>

              <div>
                <h5 className="mb-2 text-primary">Value Proposition</h5>
                <p className="text-muted-foreground">
                  A real-time crypto dashboard that combines price tracking, historical analysis, and 
                  volume distribution in an interactive, user-friendly interface. Designed for both 
                  casual viewers and crypto enthusiasts, it provides the perfect balance of comprehensive 
                  data and intuitive design.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Learnings */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Key Learnings from the Iteration Process</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Start Simple, Then Add Complexity</p>
                <p className="text-muted-foreground text-sm">
                  The initial blank chart taught us to ensure core functionality works before adding features. 
                  Building incrementally prevented overwhelming users with too much information at once.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">User Testing Reveals Hidden Issues</p>
                <p className="text-muted-foreground text-sm">
                  While the populated chart seemed like progress, user feedback revealed it was actually too 
                  cluttered. Testing at each stage helped identify and address problems before they compounded.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Visual Polish Matters</p>
                <p className="text-muted-foreground text-sm">
                  Small changes like smooth curves, better legends, and color-coded indicators significantly 
                  improved usability. These "finishing touches" weren't superficial—they made data easier to understand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Interactivity Enhances Understanding</p>
                <p className="text-muted-foreground text-sm">
                  Adding tooltips and hover effects transformed the experience from passive viewing to active 
                  exploration. Users could dig deeper into data points that interested them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Layout Can Make or Break Usability</p>
                <p className="text-muted-foreground text-sm">
                  The shift from a single complex chart to individual sparklines addressed the clutter problem. 
                  Sometimes the solution isn't refining the current approach—it's rethinking the entire layout.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Responsive Design is Non-Negotiable</p>
                <p className="text-muted-foreground text-sm">
                  Making the dashboard fully responsive for mobile and tablet wasn't just about fitting content—it 
                  required rethinking interactions for touch interfaces and optimizing layouts for different contexts.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
