import { Snippet } from "@microsoft/applicationinsights-web";
import { TNitroAppInsightsConfig } from "nitro-applicationinsights";


declare module '@nuxt/schema' {
    interface RuntimeConfig {
        applicationinsights: Partial<TNitroAppInsightsConfig>
    }

    interface PublicRuntimeConfig {
        applicationinsights: Partial<Snippet>
    }
}