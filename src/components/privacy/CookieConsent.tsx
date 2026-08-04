import { useState } from "react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";

const enabled = import.meta.env.VITE_COOKIE_CONSENT_ENABLED !== "false";

export function CookieConsent() {
  const [visible, setVisible] = useState(() => enabled && window.localStorage.getItem("forever-qr-consent") === null);
  const [ads, setAds] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  if (!visible) return null;

  const save = (value: string) => {
    window.localStorage.setItem("forever-qr-consent", value);
    setVisible(false);
  };

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl p-4">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-base font-bold">Privacy preferences</h2>
          <p className="mt-1 text-sm text-text-secondary">The generator does not need cookies. Optional advertising and analytics stay off until consent is saved.</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <label><input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} /> Advertising</label>
            <label><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Analytics</label>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => save("reject")}>Reject non-essential</Button>
          <Button variant="secondary" onClick={() => save(JSON.stringify({ ads, analytics }))}>Accept selected</Button>
          <Button onClick={() => save(JSON.stringify({ ads: true, analytics: true }))}>Accept all</Button>
        </div>
      </div>
    </Card>
  );
}
