/**
 * App Plan Types
 * Available subscription plans for shops
 */
export declare const SHOP_APP_PLANS: {
    readonly FREE: "free";
    readonly BASIC: "basic";
    readonly PRO: "pro";
    readonly CUSTOM: "custom";
};
export type AppPlan = typeof SHOP_APP_PLANS[keyof typeof SHOP_APP_PLANS];
/**
 * Synchronization Frequency
 */
export declare const SYNC_FREQUENCY: {
    readonly HOURLY: "hourly";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
};
export type SyncFrequency = typeof SYNC_FREQUENCY[keyof typeof SYNC_FREQUENCY];
/**
 * App Plan Configuration Interface
 */
export interface AppPlanConfig {
    /** Display name of the plan */
    name?: string;
    /** Price of the plan */
    price?: number;
    /** Whether the plan is recurring (subscription) */
    recurring: boolean;
    /** Maximum number of active feeds */
    count_feeds: number;
    /** Maximum number of variants */
    count_variants: number;
    /** Available synchronization frequencies */
    sync_frequency: readonly SyncFrequency[];
    /** Whether instant sync feature is available (push on webhook) */
    instant_sync: boolean;
    /** Whether product level mapping is available */
    has_product_level_mapping: boolean;
    /** Whether product reviews integration is available */
    has_integrate_product_reviews: boolean;
}
/**
 * App plans and their features
 *
 * - count_feeds: The maximum number of feeds is active
 * - count_variants: The maximum number of variants
 * - instant_sync: Whether the app has instant sync feature (push to channel when the webhook product is updated/deleted)
 * - sync_frequency: The synchronization frequency
 * - has_product_level_mapping: Whether the app has product level mapping
 * - has_integrate_product_reviews: Whether the app has integrate product reviews
 */
export declare const APP_PLANS: {
    readonly free: {
        readonly recurring: true;
        readonly count_feeds: 1;
        readonly count_variants: 50;
        readonly sync_frequency: readonly ["daily", "weekly"];
        readonly instant_sync: false;
        readonly has_product_level_mapping: false;
        readonly has_integrate_product_reviews: false;
    };
    readonly basic: {
        readonly recurring: true;
        readonly count_feeds: 5;
        readonly count_variants: 500;
        readonly sync_frequency: readonly ["hourly", "daily", "weekly"];
        readonly instant_sync: true;
        readonly has_product_level_mapping: true;
        readonly has_integrate_product_reviews: true;
    };
    readonly pro: {
        readonly recurring: true;
        readonly count_feeds: 20;
        readonly count_variants: 1000;
        readonly sync_frequency: readonly ["hourly", "daily", "weekly"];
        readonly instant_sync: true;
        readonly has_product_level_mapping: true;
        readonly has_integrate_product_reviews: true;
    };
    readonly custom: {
        readonly name: "Custom";
        readonly recurring: true;
        readonly count_feeds: 0;
        readonly count_variants: 0;
        readonly sync_frequency: readonly ["hourly", "daily", "weekly"];
        readonly instant_sync: true;
        readonly has_product_level_mapping: true;
        readonly has_integrate_product_reviews: true;
    };
};
/**
 * Get the count of feeds for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The count of feeds
 */
export declare function getAppPlanCountFeeds(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): number;
export declare function getAppPlanCountFeeds(appPlan: AppPlan | null): number;
/**
 * Get the maximum number of variants for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The maximum number of variants
 */
export declare function getAppPlanMaxVariants(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): number;
export declare function getAppPlanMaxVariants(appPlan: AppPlan | null): number;
/**
 * Get the instant sync feature for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The instant sync feature
 */
export declare function getAppPlanInstantSync(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): boolean;
export declare function getAppPlanInstantSync(appPlan: AppPlan | null): boolean;
/**
 * Get the synchronization frequency for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The synchronization frequency
 */
export declare function getAppPlanSyncFrequency(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): SyncFrequency[];
export declare function getAppPlanSyncFrequency(appPlan: AppPlan | null): SyncFrequency[];
/**
 * Get the product level mapping feature for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The product level mapping feature
 */
export declare function getAppPlanProductLevelMapping(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): boolean;
export declare function getAppPlanProductLevelMapping(appPlan: AppPlan | null): boolean;
/**
 * Get the integrate product reviews feature for a given app plan
 * @param appPlan - The app plan
 * @param customPlanConfig - Custom plan configuration (required when appPlan is 'custom')
 * @returns The integrate product reviews feature
 */
export declare function getAppPlanIntegrateProductReviews(appPlan: typeof SHOP_APP_PLANS.CUSTOM, customPlanConfig: AppPlanConfig): boolean;
export declare function getAppPlanIntegrateProductReviews(appPlan: AppPlan | null): boolean;
//# sourceMappingURL=app-plans.d.ts.map