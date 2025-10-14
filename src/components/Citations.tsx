import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Citations() {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-primary">Citations</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-outside space-y-4 text-muted-foreground pl-5">
          <li>
            <div>
              <p className="font-medium text-foreground mb-1">D3.js</p>
              <p className="text-sm">
                D3.js. (n.d.). D3.js: Data-Driven Documents. Retrieved from{" "}
                <a 
                  href="https://d3js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://d3js.org/
                </a>
              </p>
            </div>
          </li>

          <li>
            <div>
              <p className="font-medium text-foreground mb-1">Cursor AI</p>
              <p className="text-sm">
                Cursor. (n.d.). Cursor AI: Code Assistance Tool. Retrieved from{" "}
                <a 
                  href="https://www.cursor.so/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.cursor.so/
                </a>
              </p>
            </div>
          </li>

          <li>
            <div>
              <p className="font-medium text-foreground mb-1">ImageFX AI</p>
              <p className="text-sm">
                ImageFX AI. (n.d.). ImageFX AI: Visual Content Creation Tool. Retrieved from{" "}
                <a 
                  href="https://imagefx.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://imagefx.ai
                </a>
              </p>
            </div>
          </li>

          <li>
            <div>
              <p className="font-medium text-foreground mb-1">ChatGPT</p>
              <p className="text-sm">
                OpenAI. (2023). ChatGPT. Retrieved from{" "}
                <a 
                  href="https://openai.com/chatgpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://openai.com/chatgpt
                </a>
              </p>
            </div>
          </li>

          <li>
            <div>
              <p className="font-medium text-foreground mb-1">Binance API</p>
              <p className="text-sm">
                Binance. (n.d.). Binance API Documentation. Retrieved from https://www.binance.com/en
              </p>
            </div>
          </li>

          <li>
            <div>
              <p className="font-medium text-foreground mb-1">Templates for Data Pipeline, Use Case, and Personas</p>
              <p className="text-sm">
                Seo, J., Kapoor, R., & Sikkema, H. (2025). Templates for Data Pipeline, Use Case, and Personas. Sheridan College.
              </p>
            </div>
          </li>
        </ol>
      </CardContent>
    </Card>
  );
}
