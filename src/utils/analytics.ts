import { analyticsConfig } from "@/config";

// Umami collects visits; Vercount independently supplies public counters.
export const getAnalyticsConfig = () => ({
    enabled: analyticsConfig.enabled,
    platform: analyticsConfig.platform,
    code: analyticsConfig.umami.code,
    counter: analyticsConfig.counter,
});
